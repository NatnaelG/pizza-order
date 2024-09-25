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
  MRT_ColumnFiltersState,
  MRT_FilterOption,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { Delete } from "@mui/icons-material";
import AddUserModal from "@/components/user/AdduserModal";
import { updateUserStatus } from "@/lib/user/user-management";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

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
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);
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
          <Stack direction={"row"} spacing={2} alignItems={"center"} justifyContent={"center"}>
            <FormControlLabel
              sx={{
                background:
                  renderedCellValue === "ACTIVE" ? "#0080001A" : "#8000001A",
                borderRadius: "15px",
                p: "4px 14px",
                width: "120px",
                mx: 0,
              }}
              control={
                <Switch
                  color={renderedCellValue === "ACTIVE" ? "success" : "error"}
                  checked={renderedCellValue === "ACTIVE"}
                  name={`status-${row.original.id}`}
                  disabled={isLoading}
                  size="small"
                  onClick={() => {
                    // console.log("clicked", row.original.id, renderedCellValue);

                    setIsLoading(true);
                    const updatedUser = updateUserStatus(
                      row.original.id,
                      renderedCellValue === "ACTIVE" ? "INACTIVE" : "ACTIVE"
                    );

                    updatedUser
                      .then((res) => {
                        console.log(res);
                        setIsLoading(false);
                      })
                      .catch((err) => {
                        console.log(err);
                        setIsLoading(false);
                      });

                    //   const { author, category, bookName, id } = row.original;
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
    [isLoading]
  );

  const [columnFilters, setColumnFilters] =
    React.useState<MRT_ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState<MRT_FilterOption>(
    // searchParams.get("search")?.toString() ||
    ""
  );

  console.log("columnFilter", globalFilter, columnFilters);

  React.useEffect(() => {
    // const fetchData = async () => {
    //   // send api requests when columnFilters state changes
    //   // const filteredData = await fetch();
    // };

    console.log(
      "in the effect columnFilter",
      JSON.stringify(columnFilters)
    );

    const params = new URLSearchParams(searchParams);
    if (globalFilter) {
      params.set("search", globalFilter);
    } else {
      params.delete("search");
    }

    if (columnFilters.length > 0) {
      params.set("filter", JSON.stringify(columnFilters));
    } else {
      params.delete("filter");
    }

    replace(`${pathname}?${params.toString()}`);

    // console.log("Book Search", globalFilter);
    // setIsLoading(true);
    // fetchBooks(columnFilters, globalFilter);
  }, [columnFilters, globalFilter, pathname, replace, searchParams]);

  const [openAddUserModal, setOpenAddUserModal] =
    React.useState<boolean>(false);

  const handleClose = () => setOpenAddUserModal(false);
  // console.log("users", users, openAddUserModal);

  const table = useMaterialReactTable({
    columns,
    data: users,
    enableSorting: false,
    enablePagination: false,
    enableColumnActions: false,
    enableBottomToolbar: false,
    enableGlobalFilter: true,
    manualFiltering: true,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnFilters,
      globalFilter: globalFilter,
      isLoading: isLoading,
      // showGlobalFilter: true,
      // showAlertBanner: isError,
      // showProgressBars: isLoading,
      showSkeletons: users.length === 0 && isLoading,
    },
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
    muiCircularProgressProps: {
      color: "secondary",
      thickness: 5,
      size: 55,
      // sx: {
      //   "& .MuiBox-root ": { height: "100%", background: "#000" },
      // },
    },
    muiSkeletonProps: {
      animation: "pulse",
      height: 28,
    },
  });
  return (
    <>
      <MaterialReactTable table={table} />
      <AddUserModal handleClose={handleClose} open={openAddUserModal} />
    </>
  );
};

export default UserTable;
