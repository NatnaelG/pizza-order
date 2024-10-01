"use server";

import { z } from "zod";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

import prisma from "./db";
import { deleteSession, getSession, createSession } from "./session";

export type User = {
  id: string;
  name: string;
  email: string;
  // password: string;
  location: string;
  phoneNumber: string;
  status: string;
  role: string;
  isAdmin: boolean;
};

export type UserWithPassword = User & {
  password: string;
};
async function getUser(email: string): Promise<UserWithPassword | null> {
  return await prisma.user.findFirst({
    omit: {
      password: false,
    },
    where: {
      email: email,
    },
  });
}

export async function signout() {
  deleteSession();
  redirect("/login");
}

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
        location?: string[];
        phoneNumber?: string[];
      };
      message?: string;
    }
  | undefined;

export async function authenticate(state: FormState, formData: FormData) {
  console.log("HI what's up", formData);
  // Validate form fields
  const validatedFields = await z
    .object({
      email: z
        .string()
        .email()
        .refine(async (current) => {
          if (formData.get("type") !== "Sign Up") {
            return true;
          }
          const count = await prisma.user.count({
            where: {
              email: current,
            },
          });

          return count < 1;
        }, "Email has been taken"),
      password: z.string().min(6),
      confirmPassword: z.string().min(6).optional(),
      location: z.string().optional(),
      phoneNumber: z
        .string()
        .min(9)
        .max(10)
        .regex(
          /^0?(9|7)[0-9]{8}$/,
          "Phone number must have to be local number - either ethio telecom or safaricom"
        )
        .optional(),
      name: z.string().optional(),
      restaurantName: z.string().optional(),
    })
    .refine((data) => formData.get("type") !== "Sign Up" || data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    })
    .safeParseAsync({
      name: formData.get("name") || undefined,
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword") || undefined,
      location: formData.get("location") || undefined,
      phoneNumber: formData.get("phoneNumber") || undefined,
      restaurantName: formData.get("restaurantName") || undefined,
      // isAdmin: formData.get("isAdmin") || undefined,
    });

  // console.log("validatedFields", validatedFields, validatedFields.error.flatten()?.fieldErrors, validatedFields.error.flatten()?.formErrors);

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const {
    email,
    password,
    name = "",
    location = "",
    phoneNumber = "",
    restaurantName = "",
  } = validatedFields.data;

  if (formData.get("type") === "Sign Up") {
    console.log("validatedFields", validatedFields);
    const hashedPassword = await bcrypt.hash(password, 10);
    // const insertedUser = await sql<User>`
    //   INSERT INTO users (name, email, password, location, phoneNumber)
    //   VALUES (${name}, ${email}, ${hashedPassword}, ${location}, ${phoneNumber})
    //   ON CONFLICT (id) DO NOTHING;
    // `;

    const role = await prisma.role.findFirst({
      where: {
        name: formData.get("restaurant") === "on" ? "Super Admin" : "User",
      },
    });

    if (role === null) {
      return { message: "Error: Super Admin role not found!" };
    }

    let insertedRestaurant = null;
    if (formData.get("restaurant") === "on") {
      insertedRestaurant = await prisma.restaurant.create({
        data: {
          name: restaurantName,
          // admins: insertedUser.id,
        },
      });
    }

    const insertedUser = await prisma.user.create({
      data: {
        email: email,
        location: location,
        name: name,
        password: hashedPassword,
        phoneNumber: phoneNumber,
        isAdmin: formData.get("isAdmin") === "on",
        role: formData.get("isAdmin") === "on" ? "Admin" : "Owner",
        // Needs to be corrected
        roleId: role.id,
        restaurantId: insertedRestaurant?.id || null,
      },
    });

    console.log("insertedUser", insertedUser);
  }

  const user = await getUser(email);
  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  const passwordsMatch = await bcrypt.compare(password, user.password);

  if (!passwordsMatch) {
    return {
      message: "Invalid credentials!",
    };
  }
  await createSession(user.id, user.status, user.role, user.isAdmin);

  // console.log("hi there", temp)
  // const defineAbilityFor = useAbilityContext;

  // defineAbilityFor()(user);

  // const ability = defineAbilityFor(user);
  // console.log("ability", ability)
  // updateAbility(ability, user)
  // const ability = defineAbilityFor(user);
  // return user;
  redirect("/");
}

export async function getUserBySession() {
  const session = await getSession();

  if (session === null || session === undefined) return null;
  const user = await prisma.user.findFirst({
    where: {
      id: session.id,
    },
    include: {
      Role: true,
    },
  });

  return user || null;
}

export async function uploadBook(values: {
  book_name: string;
  author_name: string;
  category: string;
}) {
  const session = await getSession();

  if (session === null || session === undefined) return "Something went wrong.";
  // if (!session?.id) return "Something went wrong.";

  console.log("values", values, session);
  try {
    const insertedBook = await prisma.book.create({
      data: {
        author: values.author_name,
        bookName: values.book_name,
        category: values.category,
        owner: { connect: { id: session.id } },
      },
    });

    console.log("insertedBook", insertedBook);
    return "Success";
  } catch (error) {
    console.log("insertedBookError", error);
    return "Something went wrong.";
  }
}

export async function getBooks(
  params: { id: string; value: string }[] | null,
  search: string
) {
  console.log("Params", params, search);
  // let query = params !== null && params?.length > 0 ? { ["where"]: {} } : {};
  const query = { where: {} };

  params?.map((param) => {
    if (query.where !== undefined) {
      if (param.id === "name") {
        query.where = {
          ...query.where,
          owner: { [param.id]: { contains: param.value, mode: "insensitive" } },
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
          bookName: {
            search: search,
          },
        },
        {
          author: {
            search: search,
          },
        },
        {
          category: {
            search: search,
          },
        },
        {
          status: {
            search: search,
          },
        },
      ],
    };
    // body: {
    // search: search,
    // },
  }
  console.log("Params", query);

  return await prisma.book.findMany({
    ...query,
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    include: {
      owner: true,
    },
  });
}

export async function updateBook(
  id: string,
  values: {
    bookName: string;
    author: string;
    category: string;
    status: string;
  }
) {
  console.log("valuesOfBook", values);
  try {
    const updatedBook = await prisma.book.update({
      where: {
        id: id,
      },
      data: {
        ...values,
      },
    });
    // .then((res) => res)
    // .catch((err) => err);
    console.log("updatedBook", updatedBook);

    return updatedBook;
  } catch (error) {
    console.log("insertedBookError", error);
    return "Something went wrong.";
  }
}
