import { getusers } from "@/lib/user/user-management";
// import { Box } from "@mui/material";
import UserTable from "./userTable";

import { Suspense } from "react";
// import dynamic from 'next/dynamic'

// const UserTable = dynamic(() => import('./userTable'), { ssr: false })

export default async function Users({
  searchParams,
}: {
  searchParams?: {
    search?: string;
    filter?: string;
  };
}) {

  const search = searchParams?.search || '';
  const filter = JSON.parse(searchParams?.filter || "[]");

  const users = await getusers(search, filter);
  // console.log("users", users);

  return (
    <>
      {/* <Box>Users</Box> */}
      {/* {users.map((user) => (
        // <Typography key={user.id}>{user.name}</Typography>
        "hi"
      ))} */}
      <Suspense fallback={<p>Loading ...</p>}>
        <UserTable users={typeof users === "string" ? [] : users} />{" "}
      </Suspense>
    </>
  );
}
