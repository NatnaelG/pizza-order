"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListItems from "./list-items";

import { signout } from "@/lib/actions";

interface Props {
  drawerWidth: number;
}

export default function ResponsiveDrawer(props: Props) {
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

  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );

  const [mounted, SetMounted] = React.useState("false");

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    if (hasWindow) {
      SetMounted("true");
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  // console.log("hasWindow", hasWindow, windowDimensions.height);

  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <List disablePadding>
        <ListItems location="home" />
      </List>
      <Divider variant="middle" color="#fff" />
      <List>
        <ListItems location="upper" />
      </List>
      <Divider variant="middle" color="#fff" />
      <List>
        <ListItems location="lower" />
      </List>

      <Divider variant="middle" color="#fff" />
      <Box
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
      >
        <List>
          <form action={signout}>
            <ListItems location="logout" />
            {/* <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button> */}
          </form>
        </List>
      </Box>
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
          width: { sm: `calc(100% - ${drawerWidth + 50}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#fff",
          borderRadius: "10px",
          mr: "25px",
          mt: "10px",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Order/Dashboard
          </Typography>
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
              p: "10px",
              color: "#fff",
              m: "5px",
              borderRadius: "10px",
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
