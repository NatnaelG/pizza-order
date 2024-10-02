"use server";

// import { getUserBySession } from "../actions";
// import { z } from "zod";
import prisma from "../db";
// import { FormState } from "../actions";
// import bcrypt from "bcrypt";

// import { revalidatePath } from "next/cache";

export async function getMenu(
  id: string,
) {

    try {
        const menu = await prisma.menu.findFirst({
            where: {
                id: id
            },
            include: {
                Restaurant: true,
            }
        });

        return menu;

    } catch (error) {
        console.log("insertedBookError", error);
        return "Something went wrong."; 
    }


}