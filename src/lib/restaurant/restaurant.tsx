"use server";

// import { getUserBySession } from "../actions";
// import { z } from "zod";
import prisma from "../db";

export async function getRestaurants() {
    try {
      return await prisma.restaurant.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
        include: {
          menus: {
            include: {
                Order: true,
            }
          }
        },
        take: 7
      });
    } catch (error) {
      console.log("insertedBookError", error);
      return "Something went wrong.";
    }
  }
  