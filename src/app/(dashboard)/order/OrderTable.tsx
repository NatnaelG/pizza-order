"use client";

import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  MRT_ColumnFiltersState,
  MRT_FilterOption,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";

import { Menu, Order } from "@prisma/client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

import moment from "moment";
import ToppingModal from "@/components/order/ToppingModal";
import Image from "next/image";

import OrderTablePizzaimage from "@/public/orderTablePizza.jpeg";
import StatusMenu from "./StatusMenu";

type OrderWithMenuAndCustomer = Order & {
  Menu: Menu;
  customer: {
    id: string;
    role: string;
    name: string;
    email: string;
    // password: string;
    location: string;
    phoneNumber: string;
    isAdmin: boolean;
    status: string;
    roleId: string;
    updated_at: Date;
    created_at: Date;
  };
};
const OrderTable = ({ orders }: { orders: OrderWithMenuAndCustomer[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  const [toppingDialog, setToppingDialog] = React.useState<{
    row:
      | ({
          id: string;
          customerId: string;
          quantity: number;
          menuId: string;
          toppings: string[];
          status: string;
          updatedAt: Date;
          createdAt: Date;
        } & {
          menuName: string;
          customerNo: string;
        })
      | null;
    value: string[] | null;
    open: boolean;
  }>({
    row: null,
    value: null,
    open: false,
  });

  const columns = React.useMemo<
    MRT_ColumnDef<Order & { menuName: string; customerNo: string }>[]
  >(
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
        Cell: ({ renderedCellValue, row }) => (
          <Stack key={row.original.id} direction={"row"} spacing={1}>
            <Box
              sx={{
                ">img": {
                  borderRadius: "100%",
                },
              }}
              width={"24px"}
            >
              <Image
                src={OrderTablePizzaimage}
                alt="Ordered Pizza"
                width={24}
                height={24}
                priority
              />
            </Box>
            <Typography>{renderedCellValue}</Typography>
          </Stack>
        ),
      },
      {
        accessorKey: "toppings", //access nested data with dot notation
        header: "Topping",
        size: 70,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
        Cell: ({ renderedCellValue, row }) => (
          // console.log("renderedCellValue", renderedCellValue);
          <Stack
            key={row.original.id}
            direction={"row"}
            spacing={1}
            sx={{ color: "#FF8100", cursor: "pointer" }}
            onClick={() =>
              setToppingDialog({
                open: true,
                row: row.original,
                value: renderedCellValue as string[],
              })
            }
          >
            <VisibilityIcon />

            <Typography>Toppings</Typography>
          </Stack>
        ),
      },
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
            {moment(row.original.createdAt).format("h:mm A MM/DD/YY")}
          </Typography>
        ),
      },
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
        Cell: ({ renderedCellValue, row }) => (
          <Stack
            key={row.original.id}
            direction={"row"}
            spacing={2}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {renderedCellValue === "DELIVERED" ? (
              <Stack direction={"row"} spacing={1} sx={{ color: "#008000" }}>
                <CheckIcon />
                <Typography>Delivered</Typography>
              </Stack>
            ) : (
              <>
                <StatusMenu
                  status={renderedCellValue as "PREPARING" | "READY"}
                  order={row.original}
                  setIsLoading={setIsLoading}
                />
              </>
            )}
          </Stack>
        ),
      },
    ],
    []
  );

  const handleClose = () =>
    setToppingDialog({
      open: false,
      row: null,
      value: null,
    });

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
      <ToppingModal handleClose={handleClose} toppingDialog={toppingDialog} />
    </>
  );
};

export default OrderTable;
