import React from "react";
import { Suspense } from "react";
import OrderTable from "./OrderTable";
import { getOrders } from "@/lib/order/order-management";

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

  const orders = await getOrders(search, filter);
  console.log("orders As before passing ", orders);

  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <OrderTable orders={typeof orders === "string" ? [] : orders} />{" "}
      </Suspense>
    </>
  );
}
