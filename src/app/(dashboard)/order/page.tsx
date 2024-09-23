"use client";

import { useEffect, useState } from "react";

import DynamicTable from "@/components/order/dynamic-table";

import { getBooks, updateBook } from "@/lib/actions";
// import { Prisma } from "@prisma/client";

// type Person = {
//   number: number;
//   author: string;
//   name: string;
//   category: string;
//   bookName: string;
//   status: "ACTIVE" | "INACTIVE";
// };

export default function Books() {
  const [books, setBooks] = useState<
    {
      id: string;
      bookName: string;
      author: string;
      category: string;
      status: string;
      updatedAt: Date | string;
      createdAt: Date | string;
      owner: {
        id: string;
        name: string;
        email: string;
        // password: string;
        location: string;
        phoneNumber: string;
        status: string;
        updated_at: Date;
        created_at: Date;
      };
    }[]
  >([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchBooks = (
    params: { id: string; value: string }[] | null = null,
    search: string = ""
  ) =>
    getBooks(params, search).then((res) => {
      setBooks(res);
      setIsLoading(false);
      return res;
    });

  useEffect(() => {
    fetchBooks();
  }, []);

  console.log("Books", books);

  const updateBookRequest = (
    id: string,
    values: {
      bookName: string;
      author: string;
      category: string;
      status: string;
    }
  ) =>
    updateBook(id, values).then((res) => {
      // console.log("update says", res);
      fetchBooks();
      return res;
    });

  return (
    <DynamicTable
      books={books.map((book, index) => ({
        //   ...book,
        //   number: number,
        id: book.id,
        author: book.author,
        //   name: string,
        category: book.category,
        bookName: book.bookName,
        status: book.status as "ACTIVE" | "INACTIVE",
        name: book.owner.name,
        number: ++index,
      }))}
      fetchBooks={fetchBooks}
      updateBookRequest={updateBookRequest}
      setIsLoading={setIsLoading}
      isLoading={isLoading}
      isError={true}
    />
  );
}
