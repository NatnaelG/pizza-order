"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";

// import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItems from "./list-items";

import { signout } from "@/lib/actions";

import { usePathname } from "next/navigation";
import { Badge, Stack } from "@mui/material";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Role } from "@prisma/client";

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
interface Props {
  drawerWidth: number;
  loggedUser: (User & { Role: Role }) | null;
}

export default function ResponsiveDrawer(props: Props) {
  const pathname = usePathname();

  //   const user: User = JSON.parse(localStorage.getItem("user") || "{}");
  //   if (user !== null) {
  //   }

  const { drawerWidth } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // const hasWindow = typeof window !== "undefined";

  // function getWindowDimensions() {
  //   const width = hasWindow ? window.innerWidth : null;
  //   const height = hasWindow ? window.innerHeight : null;
  //   return {
  //     width,
  //     height,
  //   };
  // }

  // const [windowDimensions, setWindowDimensions] = React.useState(
  //   getWindowDimensions()
  // );

  // const [mounted, SetMounted] = React.useState("false");

  // React.useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions(getWindowDimensions());
  //   }
  //   if (hasWindow) {
  //     SetMounted("true");
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }
  // }, [hasWindow]);

  // console.log("hasWindow", hasWindow, windowDimensions.height);

  const drawer = (
    <div>
      <Toolbar
        sx={{
          color: "#000",
          justifyContent: "space-between",
          p: "0px !important",
          minHeight: "50px !important",
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontWeight: 500, fontSize: "14px" }}
        >
          {"PIZZA"}
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          // sx={{ display: { sm: "none" } }}
        >
          <MenuOpenIcon />
        </IconButton>
      </Toolbar>
      <List disablePadding>
        <ListItems loggedUser={props.loggedUser} location="home" />
      </List>
      {/* <Divider variant="middle" color="#fff" /> */}
      <List>
        <ListItems loggedUser={props.loggedUser} location="upper" />
      </List>
      {/* <Divider variant="middle" color="#fff" />
      <List>
        <ListItems location="lower" />
      </List> */}

      <Divider variant="middle" color="#fff" />
      {/* <Box
        key={windowDimensions.height + mounted}
        sx={{
          position:
            windowDimensions.height === null
              ? "inherit"
              : windowDimensions.height > 750
              ? "absolute"
              : "inherit",
          bottom: 0,
          width: "100%",
        }}
      > */}
      <List>
        <form action={signout}>
          <ListItems loggedUser={props.loggedUser} location="logout" />
          {/* <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button> */}
        </form>
      </List>
      {/* </Box> */}
    </div>
  );

  return (
    // <Box sx={{ display: "flex" }}>
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          width: {
            xs: `calc(100% - ${0}px)`,
            sm: `calc(100% - ${drawerWidth + 0}px)`,
          },
          ml: { sm: `${drawerWidth}px` },
          background: "#fff",
          borderRadius: "0px",
          mr: "0px",
          mt: "0px",
          left: 0,
          boxShadow: "1px 1px 1px -1px",
          pl: "10px !important",
        }}
      >
        <Toolbar
          sx={{
            color: "#000",
            justifyContent: "space-between",
            p: "0px !important",
            minHeight: "50px !important",
          }}
        >
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuOpenIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                textTransform: "capitalize",
                fontWeight: 500,
                fontSize: "22px",
              }}
            >
              {pathname.slice(1).replace("-", " ")}
            </Typography>
          </Box>

          <Stack spacing={5} pr={3} direction={"row"}>
            <Badge badgeContent={1} color="primary">
              <NotificationsNoneOutlinedIcon color="action" />
            </Badge>

            <AccountCircleOutlinedIcon color="action" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          //   container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              //   background: "#171B36",
              // p: "10px",
              color: "#fff",
              overflowX: "hidden",
              "::-webkit-scrollbar-track": {
                backgroundColor: "rgba(255, 255, 255, 0)",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "8px",
              },
              "::-webkit-scrollbar": {
                width: "8px",
              },
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              //   background: "#171B36",
              p: "5px",
              color: "#fff",
              // m: "5px",
              // borderRadius: "10px",
              overflowX: "hidden",
              height: "-webkit-fill-available",
              "::-webkit-scrollbar-track": {
                backgroundColor: "rgba(255, 255, 255, 0)",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderRadius: "8px",
              },
              "::-webkit-scrollbar": {
                width: "8px",
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
