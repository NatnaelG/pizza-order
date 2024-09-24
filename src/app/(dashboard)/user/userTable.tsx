"use client";

import * as React from "react";
import Check from "@mui/icons-material/Check";
import { FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import {
  // MRT_ColumnFiltersState,
  // MRT_FilterOption,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
// import { Suspense } from "react";

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
      // {
      //   accessorKey: "id", //access nested data with dot notation
      //   header: "ID",
      //   size: 70,
      //   muiTableHeadCellProps: {
      //     sx: {
      //       "& .Mui-TableHeadCell-Content": {
      //         color: "#656575",
      //       },
      //     },
      //   },
      // },
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name.",
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
        header: "phoneNumber.",
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
        header: "email.",
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
        header: "Action",
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
          <FormControlLabel
            value="start"
            sx={{
              background:
                renderedCellValue === "ACTIVE" ? "#0080001A" : "#8000001A",
              borderRadius: "15px",
              p: 1,
              mx: 0,
            }}
            control={
              <Switch
                color={renderedCellValue === "ACTIVE" ? "success" : "error"}
                checked={renderedCellValue === "ACTIVE"}
                name={`status-${row.original.id}`}
                size="small"
                sx={{
                  width: "75px",
                  "& .MuiButtonBase-root": {
                    "& .MuiSwitch-thumb": {
                      ml: renderedCellValue === "ACTIVE" ? "35px" : 0,
                    },
                  },
                }}
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
                <Check
                  fontSize="small"
                  color={renderedCellValue === "ACTIVE" ? "success" : "error"}
                />
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
          // <Chip
          //   icon={
          //     <CheckIcon
          //       color={renderedCellValue === "ACTIVE" ? "success" : "error"}
          //     />
          //   }
          //   label={renderedCellValue}
          //   color={renderedCellValue === "ACTIVE" ? "success" : "error"}
          //   variant="outlined"
          // />
        ),
      },
    ],
    []
  );

  console.log("users", users);

  const table = useMaterialReactTable({
    columns,
    data: users,
    enableSorting: false,
    enablePagination: false,
    enableColumnActions: false,
    enableBottomToolbar: false,
    manualFiltering: true,
  });
  return (
    // <Suspense fallback={<>Suspensing</>}>
      <MaterialReactTable table={table} />
    // {/* </Suspense> */}
  );
};

export default UserTable;
