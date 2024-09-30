"use client";

import * as React from "react";
import {
  Button,
  FormControlLabel,
  IconButton,
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
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import RoleModal from "@/components/role/RoleModal";
import { Role } from "@prisma/client";
import moment from "moment";
import { updateRoleStatus } from "@/lib/role/role-management";

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   location: string;
//   phoneNumber: string;
//   role: string;
//   isAdmin: boolean;
//   status: string;
//   updated_at: Date;
//   created_at: Date;
// };

const RoleTable = ({
  roles,
}: {
  roles: {
    name: string;
    id: string;
    status: string;
    updated_at: Date;
    created_at: Date;
    permissions: string[];
  }[];
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);
  const columns = React.useMemo<MRT_ColumnDef<Role>[]>(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Role Name",
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
        accessorKey: "createdAt", //access nested data with dot notation
        header: "Created At",
        size: 70,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
        Cell: ({ row }) => (
          // console.log("renderedCellValue", renderedCellValue);
          <Typography key={row.original.id}>
            {moment(row.original.created_at).format("MM/DD/YY")}
          </Typography>
        ),
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
          <Stack
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <FormControlLabel
              sx={{
                background:
                  (typeof renderedCellValue === "object"
                    ? row.original.status
                    : renderedCellValue) === "ACTIVE"
                    ? "#0080001A"
                    : "#8000001A",
                borderRadius: "15px",
                p: "4px 14px",
                width: "120px",
                mx: 0,
              }}
              control={
                <Switch
                  color={
                    (typeof renderedCellValue === "object"
                      ? row.original.status
                      : renderedCellValue) === "ACTIVE"
                      ? "success"
                      : "error"
                  }
                  checked={
                    (typeof renderedCellValue === "object"
                      ? row.original.status
                      : renderedCellValue) === "ACTIVE"
                  }
                  name={`status-${row.original.id}`}
                  disabled={isLoading}
                  size="small"
                  onClick={() => {
                    setIsLoading(true);
                    const updatedRole = updateRoleStatus(
                      row.original.id,
                      (typeof renderedCellValue === "object"
                        ? row.original.status
                        : renderedCellValue) === "ACTIVE"
                        ? "INACTIVE"
                        : "ACTIVE"
                    );

                    updatedRole
                      .then((res) => {
                        console.log(res);
                        setIsLoading(false);
                      })
                      .catch((err) => {
                        console.log(err);
                        setIsLoading(false);
                      });
                  }}
                />
              }
              label={
                <Stack direction={"row"} spacing={1}>
                  <Typography
                    sx={{
                      color:
                        (typeof renderedCellValue === "object"
                          ? row.original.status
                          : renderedCellValue) === "ACTIVE"
                          ? "#2e7d32"
                          : "#d32f2f",
                      textTransform: "capitalize",
                    }}
                    variant="subtitle2"
                  >
                    {/* {console.log("renderedCellValue", renderedCellValue)} */}
                    {(typeof renderedCellValue === "object"
                      ? row.original.status
                      : renderedCellValue + ""
                    )?.toLowerCase()}
                  </Typography>
                </Stack>
              }
              labelPlacement="start"
            />
            <IconButton sx={{ color: "#000" }}>
              <VisibilityIcon fontSize="small" />
            </IconButton>
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

    console.log("in the effect columnFilter", JSON.stringify(columnFilters));

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

  const [openRoleModal, setOpenRoleModal] = React.useState<boolean>(false);

  const handleClose = () => setOpenRoleModal(false);

  const table = useMaterialReactTable({
    columns,
    data: roles,
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
      showSkeletons: roles.length === 0 && isLoading,
    },
    renderTopToolbarCustomActions: () => (
      <Button
        variant="contained"
        size="small"
        onClick={() => setOpenRoleModal(true)}
        sx={{ background: "#FF8100" }}
      >
        Add Role
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
      <RoleModal handleClose={handleClose} open={openRoleModal} />
    </>
  );
};

export default RoleTable;
