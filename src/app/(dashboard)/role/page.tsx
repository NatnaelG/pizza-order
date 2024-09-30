import { Suspense } from "react";
import RoleTable from "./RoleTable";
import { getRoles } from "@/lib/role/role-management";

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

  const roles = await getRoles(search, filter);
  console.log("roles As before passing ", roles);

  return (
    <>
      <Suspense fallback={<p>Loading ...</p>}>
        <RoleTable roles={typeof roles === "string" ? [] : roles} />{" "}
      </Suspense>
    </>
  );
}
