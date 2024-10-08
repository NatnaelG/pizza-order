import React from "react";
import { Suspense } from "react";
import OrderTable from "./OrderTable";
import { getOrders } from "@/lib/order/order-management";
import { getUserBySession } from "@/lib/actions";

export default async function Orders({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    filter?: string;
  };
}) {
  const search = searchParams?.search || "";
  const filter = JSON.parse(searchParams?.filter || "[]");

  const ordersData = getOrders(search, filter);
  const loggedUserData = getUserBySession();

  const [orders, loggedUser] = await Promise.all([ordersData, loggedUserData]);

  // console.log("orders As before passing ", orders);

  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <OrderTable
          loggedUser={loggedUser}
          orders={typeof orders === "string" ? [] : orders}
        />{" "}
      </Suspense>
    </>
  );
}
