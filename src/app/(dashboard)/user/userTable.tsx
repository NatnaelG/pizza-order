"use client";

import * as React from "react";
import {
  Button,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import {
  // MRT_ColumnFiltersState,
  // MRT_FilterOption,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Delete } from "@mui/icons-material";
import AddUserModal from "@/components/user/AdduserModal";

type User = {
  id: string;
  name: string;
  email: string;
  location: string;
  phoneNumber: string;
  role: string;
  isAdmin: boolean;
  status: string;
  updated_at: Date;
  created_at: Date;
};

const UserTable = ({
  users,
}: {
  users: {
    id: string;
    name: string;
    email: string;
    location: string;
    phoneNumber: string;
    role: string;
    isAdmin: boolean;
    status: string;
    updated_at: Date;
    created_at: Date;
  }[];
}) => {
  const columns = React.useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 70,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
      },
      {
        accessorKey: "phoneNumber", //access nested data with dot notation
        header: "Phone No",
        size: 70,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
      },
      {
        accessorKey: "email", //access nested data with dot notation
        header: "Email",
        size: 70,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
      },
      {
        accessorKey: "status",
        header: "Actions",
        size: 150,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              justifyContent: "center",
              color: "#656575",
            },
          },
        },
        Cell: ({ renderedCellValue, row }) => (
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <FormControlLabel
              sx={{
                background:
                  renderedCellValue === "ACTIVE" ? "#0080001A" : "#8000001A",
                borderRadius: "15px",
                p: "4px 14px 4px 25px",
                mx: 0,
              }}
              control={
                <Switch
                  color={renderedCellValue === "ACTIVE" ? "success" : "error"}
                  checked={renderedCellValue === "ACTIVE"}
                  name={`status-${row.original.id}`}
                  size="small"
                  onClick={() => {
                    console.log("clicked", row.original.id, renderedCellValue);
                    //   const { author, category, bookName, id } = row.original;
                    //   setIsLoading(true);
                    //   updateBookRequest(id, {
                    //     bookName,
                    //     author,
                    //     category,
                    //     status:
                    //       renderedCellValue === "ACTIVE" ? "INACTIVE" : "ACTIVE",
                    //   });
                  }}
                />
              }
              label={
                <Stack direction={"row"} spacing={1}>
                  <Typography
                    sx={{
                      color:
                        renderedCellValue === "ACTIVE" ? "#2e7d32" : "#d32f2f",
                      textTransform: "capitalize",
                    }}
                    variant="subtitle2"
                  >
                    {(renderedCellValue + "")?.toLowerCase()}
                  </Typography>
                </Stack>
              }
              labelPlacement="start"
            />
            <Delete fontSize="small" />
          </Stack>
        ),
      },
    ],
    []
  );

  const [openAddUserModal, setOpenAddUserModal] =
    React.useState<boolean>(false);

  const handleClose = () => setOpenAddUserModal(false);
  console.log("users", users);

  const table = useMaterialReactTable({
    columns,
    data: users,
    enableSorting: false,
    enablePagination: false,
    enableColumnActions: false,
    enableBottomToolbar: false,
    manualFiltering: true,
    renderTopToolbarCustomActions: () => (
      <Button
        variant="contained"
        size="small"
        onClick={() => setOpenAddUserModal(true)}
        sx={{ background: "#FF8100" }}
      >
        Add User
      </Button>
    ),
  });
  return (
    <>
      <MaterialReactTable table={table} />
      <AddUserModal handleClose={handleClose} open={openAddUserModal} />
    </>
  );
};

export default UserTable;
