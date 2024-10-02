"use server";

import { getUserBySession } from "../actions";
// import { z } from "zod";
import prisma from "../db";

import { revalidatePath } from "next/cache";

type FormState =
  | {
      errors?: {
        name?: string[];
        // email?: string[];
        // password?: string[];
        // confirmPassword?: string[];
        // location?: string[];
        // phoneNumber?: string[];
      };
      message?: string;
    }
  | undefined;

export async function getRoles(
  search: string,
  params: { id: string; value: string }[] | null
) {
  console.log("Params", params, search);
  // let query = params !== null && params?.length > 0 ? { ["where"]: {} } : {};

  const loggedInUser = await getUserBySession();

  if (loggedInUser === null || loggedInUser.restaurantId === null) {
    return "Not logged in";
  }

  const query = { where: {} };

  params?.map((param) => {
    if (query.where !== undefined) {
      // if (param.id === "name") {
      //   query.where = {
      //     ...query.where,
      //     owner: { [param.id]: { contains: param.value, mode: "insensitive" } },
      //   };
      //   // query.where["owner"][param.id] = { contains: param.value, mode: 'insensitive', };
      // } else {
      query.where = {
        ...query.where,
        [param.id]: { contains: param.value, mode: "insensitive" },
      };
      // query.where[param.id] = { contains: param.value, mode: 'insensitive', };
      // }
    }
    // console.log("query0", query);
    return param;
  });

  if (search.length > 0) {
    query.where = {
      ...query.where,
      OR: [
        {
          name: {
            search: search,
          },
        },
        {
          status: {
            search: search,
          },
        },
        // {
        //   name: {
        //     search: search,
        //   },
        // },
      ],
      NOT: {
        user: {
          some: {
            restaurantId: { not: loggedInUser.restaurantId },
          },
        },
      },
    };
    // body: {
    // search: search,
    // },
  }

  query.where = {
    ...query.where,
    user: {
      some: {
        restaurantId: loggedInUser.restaurantId,
      },
    },
  };

  console.log("Params", JSON.stringify(query));
  try {
    return await prisma.role.findMany({
      // ...query,
      where: {
        Restaurant: {
          id: loggedInUser.restaurantId,
        },
      },
      orderBy: [
        {
          created_at: "desc",
        },
      ],
      //   include: {
      //     owner: true,
      //   },
    });
  } catch (error) {
    console.log("role retrive error", error);
    return "Something went wrong.";
  }
}

export async function addRole(state: FormState, formData: FormData) {
  console.log("formData", formData);
  const loggedInUser = await getUserBySession();

  if (loggedInUser === null || loggedInUser.restaurantId === null) {
    return { message: "Not logged in" };
  }

  if (formData.get("type") === "update") {
    if (formData.get("id") === null) {
      return { message: "Id needed!" };
    }
    const updatedRole = await prisma.role.update({
      where: { id: formData.get("id") as string },
      data: {
        name: (formData.get("name") as string) || "Role",
        permissions: (formData.get("permissions") as string).split(",") || [],
      },
    });
    console.log("insertedUser", updatedRole);
    revalidatePath("/role");
    return { message: "success" };
  }

  const insertedRole = await prisma.role.create({
    data: {
      name: (formData.get("name") as string) || "Role",
      permissions: (formData.get("permissions") as string).split(",") || [],
      restaurantId: loggedInUser.restaurantId,
    },
  });
  console.log("insertedUser", insertedRole);
  revalidatePath("/role");
  return { message: "success" };
}

export async function updateRoleStatus(
  id: string,
  status: "ACTIVE" | "INACTIVE"
) {
  const updatedUser = await prisma.role.update({
    where: { id: id },
    data: {
      status: status,
    },
  });

  revalidatePath("/role");
  return updatedUser;
}
