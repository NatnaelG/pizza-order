import { getusers } from "@/lib/user/user-management";
import { Box, Typography } from "@mui/material";

export default async function Users() {
    const users = await getusers();

    console.log("users", users)

    return (<><Box>Users</Box>
    {users.map(user => <Typography key={user.id}>{user.name}</Typography>)}
    </>)
}