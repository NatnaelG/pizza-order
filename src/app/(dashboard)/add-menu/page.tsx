import React from "react";
import AddMenuForm from "@/components/add-menu/AddMenuForm";
import { getUserBySession } from "@/lib/actions";

export default async function AddMenu() {
  const loggedUser = await getUserBySession();
  return (
    <React.Fragment>
      <AddMenuForm loggedUser={loggedUser} />
    </React.Fragment>
  );
}
