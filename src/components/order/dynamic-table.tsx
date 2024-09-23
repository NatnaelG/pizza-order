import * as React from "react";
import {
  MRT_ColumnFiltersState,
  MRT_FilterOption,
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import {
  // Chip,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";

import CheckIcon from "@mui/icons-material/Check";

import Image from "next/image";
import DefaultAvatar from "@/public/Ellipse 8.png";

type Book = {
  id: string;
  number: number;
  author: string;
  name: string;
  category: string;
  bookName: string;
  status: "ACTIVE" | "INACTIVE";
};

const DynamicTable = ({
  books,
  fetchBooks,
  updateBookRequest,
  setIsLoading,
  isLoading,
  isError,
}: {
  books: Book[];
  fetchBooks: any;
  updateBookRequest: any;
  setIsLoading: any;
  isLoading: boolean;
  isError: boolean;
}) => {
  //should be memoized or stable
  const columns = React.useMemo<MRT_ColumnDef<Book>[]>(
    () => [
      {
        accessorKey: "number", //access nested data with dot notation
        header: "No.",
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
        accessorKey: "author", //access nested data with dot notation
        header: "Author",
        size: 100,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
      },
      {
        accessorKey: "name",
        header: "Owner",
        size: 200,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
        Cell: ({ renderedCellValue, row }) => (
          <Stack
            key={row.original.number}
            direction={"row"}
            spacing={1}
            sx={{
              ">img": {
                borderRadius: "50%",
              },
            }}
          >
            <Image
              src={DefaultAvatar}
              alt="Default Avatar"
              // className={styles.vercelLogo}
              width={24}
              height={24}
              priority
            />
            <Typography>{renderedCellValue}</Typography>
          </Stack>
        ),
      },
      {
        accessorKey: "category", //normal accessorKey
        header: "Category",
        size: 200,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
        Cell: ({ renderedCellValue, row }) => (
          <Typography key={row.original.number} color={"#656575"}>
            {renderedCellValue}
          </Typography>
        ),
      },
      {
        accessorKey: "bookName",
        header: "Book Name",
        size: 150,
        muiTableHeadCellProps: {
          sx: {
            "& .Mui-TableHeadCell-Content": {
              color: "#656575",
            },
          },
        },
        Cell: ({ renderedCellValue, row }) => (
          <Typography key={row.original.number} color={"#656575"}>
            {renderedCellValue}
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
                name={`status-${row.original.number}`}
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
                  const { author, category, bookName, id } = row.original;
                  setIsLoading(true);
                  updateBookRequest(id, {
                    bookName,
                    author,
                    category,
                    status:
                      renderedCellValue === "ACTIVE" ? "INACTIVE" : "ACTIVE",
                  });
                }}
              />
            }
            label={
              <Stack direction={"row"} spacing={1}>
                <CheckIcon
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

  const [columnFilters, setColumnFilters] =
    React.useState<MRT_ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState<MRT_FilterOption>("");
  const [data, setData] = React.useState(books);

  console.log("columnFilter", columnFilters);

  React.useEffect(() => {
    // const fetchData = async () => {
    //   // send api requests when columnFilters state changes
    //   // const filteredData = await fetch();
    // };

    console.log("Book Search", globalFilter);
    setIsLoading(true);
    fetchBooks(columnFilters, globalFilter);
  }, [columnFilters, globalFilter]);

  React.useEffect(() => {
    setData(books);
  }, [books]);

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableSorting: false,
    enablePagination: false,
    enableColumnActions: false,
    enableBottomToolbar: false,
    manualFiltering: true,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnFilters,
      isLoading: data.length === 0 || isLoading,
      showAlertBanner: isError,
      // showProgressBars: isLoading,
      showSkeletons: data.length === 0 && isLoading,
    },
    renderTopToolbarCustomActions: () => (
      <Typography variant="h6" fontWeight={600}>
        List of Owner
      </Typography>
    ),
    muiToolbarAlertBannerProps: isError
      ? {
          color: "error",
          children: "Error loading data",
        }
      : undefined,
    muiCircularProgressProps: {
      color: "secondary",
      thickness: 5,
      size: 55,
    },
    muiSkeletonProps: {
      animation: "pulse",
      height: 28,
    },
  });

  return <MaterialReactTable table={table} />;
};

export default DynamicTable;
