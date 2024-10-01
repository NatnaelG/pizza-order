"use server";

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

  const insertedMenu = await prisma.menu.create({
    data: {
      name: (formData.get("name") as string) || "Menu",

      toppings: (formData.get("toppings") as string).split(",") || [],
      price: formData.get("price") as string,
      restaurantId: "7886be99-0d86-4a46-8fea-e87a7ec66482"
    },
  });
  console.log("insertedUser", insertedMenu);
  //   revalidatePath("/role");
  return { message: "success" };
}
