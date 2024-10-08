"use server";

import { getUserBySession } from "../actions";
// import { z } from "zod";
import prisma from "../db";
// import { FormState } from "../actions";
// import bcrypt from "bcrypt";

type Data = {
  quantity: number;
  toppings: string[];
  menuId: string;
};

import { revalidatePath } from "next/cache";

export async function getOrders(
  search: string,
  params: { id: string; value: string }[] | null
) {
  console.log("Params", params, search);
  // let query = params !== null && params?.length > 0 ? { ["where"]: {} } : {};

  const loggedInUser = await getUserBySession();

  if (loggedInUser === null) {
    return "Not logged in";
  }

  const query = { where: {} };

  let IsMenuFilterPresent = false;

  params?.map((param) => {
    if (query.where !== undefined) {
      if (param.id === "menuName") {
        IsMenuFilterPresent = true;
        query.where = {
          ...query.where,
          AND: [
            {
              // Existing condition: user's restaurant's menu
              Menu: {
                Restaurant: {
                  admins: {
                    some: {
                      id: loggedInUser.id,
                    },
                  },
                },
              },
            },
            {
              // New condition: menu name

              Menu: {
                ["name"]: { contains: param.value, mode: "insensitive" },
              },
            },
          ],
        };
        // query.where["owner"][param.id] = { contains: param.value, mode: 'insensitive', };
      } else if (param.id === "toppings") {
        query.where = {
          ...query.where,
          // Menu: { ["name"]: { contains: param.value, mode: "insensitive" } },
          [param.id]: {
            has: param.value,
          },
        };
        // query.where["owner"][param.id] = { contains: param.value, mode: 'insensitive', };
      } else if (param.id === "customerNo") {
        query.where = {
          ...query.where,
          customer: {
            ["phoneNumber"]: { contains: param.value, mode: "insensitive" },
          },
        };
        // query.where["owner"][param.id] = { contains: param.value, mode: 'insensitive', };
      } else {
        query.where = {
          ...query.where,
          [param.id]: { contains: param.value, mode: "insensitive" },
        };
        // query.where[param.id] = { contains: param.value, mode: 'insensitive', };
      }
    }
    // console.log("query0", query);
    return param;
  });

  if (search.length > 0) {
    query.where = {
      ...query.where,
      OR: [
        {
          status: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          Menu: {
            name: { contains: search, mode: "insensitive" },
          },
        },

        // {
        //   name: {
        //     search: search,
        //   },
        // },
      ],
      NOT: {
        Menu: {
          Restaurant: {
            admins: {
              some: {
                id: {
                  not: loggedInUser.id,
                },
              },
            },
          },
        },
      },
    };
    // body: {
    // search: search,
    // },
  }

  if (!IsMenuFilterPresent && search.length === 0) {
    query.where = {
      ...query.where,
      Menu: {
        Restaurant: {
          admins: {
            some: {
              id: loggedInUser.id,
            },
          },
        },
      },
    };
  }

  console.log("Params", JSON.stringify(query));
  try {
    return await prisma.order.findMany({
      // where: {
      //   Menu: {
      //     Restaurant: {
      //       admins: {
      //         some: {
      //           id: loggedInUser.id,
      //         },
      //       },
      //     },
      //   },
      // },
      ...query,
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        // customer: true,
        Menu: true,
        customer: true,
      },
    });
  } catch (error) {
    console.log("insertedBookError", error);
    return "Something went wrong.";
  }
}

export async function addOrder(data: Data) {
  const loggedInUser = await getUserBySession();

  if (loggedInUser === null) {
    return { message: "Not logged in" };
  }

  try {
    const insertedOrder = await prisma.order.create({
      data: {
        // name: (formData.get("name") as string) || "Role",
        // permissions: (formData.get("permissions") as string).split(",") || [],
        // restaurantId: loggedInUser.restaurantId,
        quantity: data.quantity,
        toppings: data.toppings,
        menuId: data.menuId,
        customerId: loggedInUser.id,
      },
    });
    console.log("insertedUser", insertedOrder);
    revalidatePath("/order");
    revalidatePath("/order-history");
    return { message: "success" };
  } catch (error) {
    console.log("error", error);
    return { message: "Something Went wrong" };
  }
}

export async function updateOrderStatus(
  id: string,
  status: "PREPARING" | "READY" | "DELIVERED"
) {
  const updatedUser = await prisma.order.update({
    where: { id: id },
    data: {
      status: status,
    },
  });

  revalidatePath("/order");
  revalidatePath("/order-history");
  return updatedUser;
}

export async function getMyOrders() {
  const loggedInUser = await getUserBySession();

  if (loggedInUser === null) {
    return "Not logged in";
  }

  try {
    const orders = await prisma.order.findMany({
      where: {
        customerId: loggedInUser.id,
      },
      include: {
        Menu: true,
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });

    return orders;
  } catch (error) {
    console.log("insertedBookError", error);
    return "Something went wrong.";
  }
}
