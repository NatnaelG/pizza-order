"use server";

// import { getUserBySession } from "../actions";
// import { z } from "zod";
import prisma from "../db.ts";

export async function getRestaurants() {
  try {
    return await prisma.restaurant.findMany({
      take: 7,

      include: {
        _count: {
          select: { menus: true },
        },
        menus: {
          orderBy: {
            Order: {
              _count: "desc",
            },
          },
          include: {
            _count: {
              select: { Order: true },
            },

            // Order: true,
          },
        },
      },

      orderBy: {
        menus: {
          _count: "desc",
        },
      },
    });
  } catch (error) {
    console.log("insertedBookError", error);
    return "Something went wrong.";
  }
}
