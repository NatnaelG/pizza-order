"use server";

import { z } from "zod";
import prisma from "../db";
import { FormState, getUserBySession } from "../actions";
import bcrypt from "bcrypt";

import { revalidatePath } from "next/cache";

export async function getusers(
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
          email: {
            search: search,
          },
        },
        {
          phoneNumber: {
            search: search,
          },
        },
        {
          name: {
            search: search,
          },
        },
      ],
      NOT: {
        restaurantId: {
          not: loggedInUser.restaurantId,
        },
      },
    };
    // body: {
    // search: search,
    // },
  }

  query.where = {
    ...query.where,
    restaurantId: loggedInUser.restaurantId,
  };

  console.log("Params", JSON.stringify(query));
  try {
    return await prisma.user.findMany({
      ...query,
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
    console.log("insertedBookError", error);
    return "Something went wrong.";
  }
}

export async function adduser(state: FormState, formData: FormData) {
  console.log("formData", formData);
  const loggedInUser = await getUserBySession();

  if (loggedInUser === null || loggedInUser.restaurantId === null) {
    return { message: "Not logged in" };
  }

  const validatedFields = await z
    .object({
      email: z
        .string()
        .email()
        .refine(async (current) => {
          const count = await prisma.user.count({
            where: {
              email: current,
            },
          });

          return count < 1;
        }, "Email has been taken"),
      password: z.string().min(6),
      // confirmPassword: z.string().min(6),
      location: z.string(),
      phoneNumber: z
        .string()
        .min(9)
        .max(10)
        .regex(
          /^0?(9|7)[0-9]{8}$/,
          "Phone number must have to be local number - either ethio telecom or safaricom"
        ),
      name: z.string(),
      role: z.string(),
      roleId: z.string(),
    })
    .safeParseAsync({
      name: formData.get("name") || undefined,
      email: formData.get("email"),
      password: formData.get("password"),
      // confirmPassword: formData.get("confirmPassword") || undefined,
      location: formData.get("location") || undefined,
      phoneNumber: formData.get("phoneNumber") || undefined,
      role: formData.get("role") || undefined,
      roleId: formData.get("roleId") || undefined,
      // isAdmin: formData.get("isAdmin") || undefined,
    });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password, name, location, phoneNumber, role, roleId } =
    validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);
  const insertedUser = await prisma.user.create({
    data: {
      email: email,
      location: location,
      name: name,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      isAdmin: role === "Super Admin",
      role: role,
      status: "ACTIVE",
      // needs to be checked
      restaurantId: loggedInUser.restaurantId,
      roleId: roleId,
    },
  });
  console.log("insertedUser", insertedUser);
  revalidatePath("/user");
  return { message: "success" };
}

export async function updateUserStatus(
  id: string,
  status: "ACTIVE" | "INACTIVE"
) {
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: {
      status: status,
    },
  });

  revalidatePath("/user");
  return updatedUser;
}
