"use client";

import * as React from "react";
import {
  // FormControlLabel,
  // Stack,
  // Switch,
  Typography,
} from "@mui/material";
import {
  MRT_ColumnFiltersState,
  MRT_FilterOption,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
// import { Delete } from "@mui/icons-material";
// import AddUserModal from "@/components/user/AdduserModal";
// import { updateUserStatus } from "@/lib/user/user-management";

// import { Order } from "@prisma/client";
// import { Menu } from "@prisma/client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

type Order = {
  id: string;
  customerId: string;
  quantity: number;
  menuId: string;
  status: string;
  toppings: { list: [string] };
  updated_at: Date;
  created_at: Date;
  customer: {
    id: string;
    name: string;
    email: string;
    location: string;
    phoneNumber: string;
    role: string;
    isAdmin: boolean;
    status: string;
    roleId: string;
    updated_at: Date;
    created_at: Date;
  };
  Menu: {
    name: string;
    id: string;
    toppings: { list: [string] };
    updatedAt: Date;
    createdAt: Date;
    price: number;
  };
};

const OrderTable = ({
  orders,
}: {
  orders: {
    id: string;
    customerId: string;
    quantity: number;
    menuId: string;
    status: string;
    toppings: { list: [string] };
    updated_at: Date;
    created_at: Date;
    customer: {
      id: string;
      name: string;
      email: string;
      location: string;
      phoneNumber: string;
      role: string;
      isAdmin: boolean;
      status: string;
      roleId: string;
      updated_at: Date;
      created_at: Date;
    };
    Menu: {
      name: string;
      id: string;
      toppings: { list: [string] };
      updatedAt: Date;
      createdAt: Date;
      price: number;
    };
  }[];
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // const [isLoading, setIsLoading] = React.useState(false);
  const isLoading = false;
  const columns = React.useMemo<MRT_ColumnDef<Order>[]>(
    () => [
      {
        accessorKey: "menuName", //access nested data with dot notation
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
      // {
      //   accessorKey: "toppings", //access nested data with dot notation
      //   header: "Topping",
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
        accessorKey: "quantity", //access nested data with dot notation
        header: "Quantity",
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
        accessorKey: "customerNo", //access nested data with dot notation
        header: "Customer No",
        size: 70,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
      },
      // {
      //   accessorKey: "createdAt", //access nested data with dot notation
      //   header: "Created At",
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
        accessorKey: "status",
        header: "Status",
        size: 150,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              justifyContent: "center",
              color: "#656575",
            },
          },
        },
        // Cell: ({ renderedCellValue, row }) => (
        //   <Stack
        //     direction={"row"}
        //     spacing={2}
        //     alignItems={"center"}
        //     justifyContent={"center"}
        //   >
        //     <FormControlLabel
        //       sx={{
        //         background:
        //           renderedCellValue === "ACTIVE" ? "#0080001A" : "#8000001A",
        //         borderRadius: "15px",
        //         p: "4px 14px",
        //         width: "120px",
        //         mx: 0,
        //       }}
        //       control={
        //         <Switch
        //           color={renderedCellValue === "ACTIVE" ? "success" : "error"}
        //           checked={renderedCellValue === "ACTIVE"}
        //           name={`status-${row.original.id}`}
        //           disabled={isLoading}
        //           size="small"
        //           // onClick={() => {
        //           //   // console.log("clicked", row.original.id, renderedCellValue);

        //           //   setIsLoading(true);
        //           //   const updatedUser = updateUserStatus(
        //           //     row.original.id,
        //           //     renderedCellValue === "ACTIVE" ? "INACTIVE" : "ACTIVE"
        //           //   );

        //           //   updatedUser
        //           //     .then((res) => {
        //           //       console.log(res);
        //           //       setIsLoading(false);
        //           //     })
        //           //     .catch((err) => {
        //           //       console.log(err);
        //           //       setIsLoading(false);
        //           //     });

        //           //   //   const { author, category, bookName, id } = row.original;
        //           //   //   updateBookRequest(id, {
        //           //   //     bookName,
        //           //   //     author,
        //           //   //     category,
        //           //   //     status:
        //           //   //       renderedCellValue === "ACTIVE" ? "INACTIVE" : "ACTIVE",
        //           //   //   });
        //           // }}
        //         />
        //       }
        //       label={
        //         <Stack direction={"row"} spacing={1}>
        //           <Typography
        //             sx={{
        //               color:
        //                 renderedCellValue === "ACTIVE" ? "#2e7d32" : "#d32f2f",
        //               textTransform: "capitalize",
        //             }}
        //             variant="subtitle2"
        //           >
        //             {(renderedCellValue + "")?.toLowerCase()}
        //           </Typography>
        //         </Stack>
        //       }
        //       labelPlacement="start"
        //     />
        //     <Delete fontSize="small" />
        //   </Stack>
        // ),
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

  // const [openAddUserModal, setOpenAddUserModal] =
  //   React.useState<boolean>(false);

  // const handleClose = () => setOpenAddUserModal(false);
  console.log("orders", orders);

  const table = useMaterialReactTable({
    columns,
    data: orders.map((order) => ({
      ...order,
      menuName: order.Menu.name,
      customerNo: order.customer.phoneNumber,
    })),
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
      showSkeletons: orders.length === 0 && isLoading,
    },
    renderTopToolbarCustomActions: () => (
      // <Button
      //   variant="contained"
      //   size="small"
      //   onClick={() => setOpenAddUserModal(true)}
      //   sx={{ background: "#FF8100" }}
      // >
      //   Add User
      // </Button>
      <Typography variant="h6" fontWeight={600}>
        Packages
      </Typography>
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
      {/* <AddUserModal handleClose={handleClose} open={openAddUserModal} /> */}
    </>
  );
};

export default OrderTable;
