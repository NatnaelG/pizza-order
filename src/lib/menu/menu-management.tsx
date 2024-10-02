"use server";

import { getUserBySession } from "../actions";
// import { z } from "zod";
import prisma from "../db";

// import { revalidatePath } from "next/cache";

type FormState =
  | {
      errors?: {
        name?: string[];
        pirce?: string[];
        // password?: string[];
        // confirmPassword?: string[];
        // location?: string[];
        // phoneNumber?: string[];
      };
      message?: string;
    }
  | undefined;

export async function addMenu(state: FormState, formData: FormData) {
  console.log("formData", formData);

  const loggedInUser = await getUserBySession();
  console.log("loggedInUser", loggedInUser);

  if (loggedInUser === null || loggedInUser.restaurantId === null) {
    return { message: "Not logged in" };
  }

  const insertedMenu = await prisma.menu.create({
    data: {
      name: (formData.get("name") as string) || "Menu",

      toppings: (formData.get("toppings") as string).split(",") || [],
      price: formData.get("price") as string,
      restaurantId: loggedInUser.restaurantId,
    },
  });
  console.log("insertedUser", insertedMenu);
  //   revalidatePath("/role");
  return { message: "success" };
}

export async function getMenus() {
  try {
    return await prisma.menu.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      include: {
        Restaurant: true,
      },
    });
  } catch (error) {
    console.log("insertedBookError", error);
    return "Something went wrong.";
  }
}
