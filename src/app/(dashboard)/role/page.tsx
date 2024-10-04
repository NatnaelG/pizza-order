import React from "react";
import RoleTable from "./RoleTable";
import { getRoles } from "@/lib/role/role-management";
import { getUserBySession } from "@/lib/actions";

export default async function Roles({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    filter?: string;
  };
}) {
  const search = searchParams?.search || "";
  const filter = JSON.parse(searchParams?.filter || "[]");

  const rolesData = getRoles(search, filter);
  const loggedUserData = getUserBySession();

  const [loggedUser, roles] = await Promise.all([
    loggedUserData,
    rolesData,
  ]);

  console.log("roles As before passing ", roles);

  return (
    <>
      <React.Suspense fallback={<p>Loading ...</p>}>
          <RoleTable roles={typeof roles === "string" ? [] : roles} loggedUser={loggedUser} />{" "}
      </React.Suspense>
    </>
  );
}
