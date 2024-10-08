import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Link from "next/link";
import Links from "@/lib/links";

import Image from "next/image";
import PizzaSlice from "@/public/emojione_pizza.png";

import { usePathname } from "next/navigation";
import { Button, Stack } from "@mui/material";
import {
  // Can,
  useAbilityContext,
} from "@/lib/AbilityContext";
import { Ability, AbilityBuilder } from "@casl/ability";
import { Role } from "@prisma/client";
// import { User } from "@/lib/actions";
// import defineAbilityFor from "@/lib/ability";

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

export default function ListItems({
  location,
  loggedUser,
}: {
  location: string;
  loggedUser: (User & { Role: Role }) | null;
}) {
  const pathname = usePathname();

  console.log("the loggin user ", loggedUser);

  const ability = useAbilityContext();

  const { can, rules } = new AbilityBuilder(Ability);

  loggedUser?.Role.permissions.map((permission) => {
    const [caslAction, caslModel] = permission.split(" | ");
    can(caslAction, caslModel);
    return permission;
  });

  ability.update(rules);

  // const user: User = JSON.parse(localStorage.getItem("user") || "{}");
  // if (user !== null) {
  // }

  // const ability = defineAbilityFor(user);
  // console.log("location OHHHO", location)
  // console.log("pathName", pathname);
  return (
    <>
      {Links.filter((tempLink) => tempLink.location === location).map(
        (link, index) => {
          const LinkIcon = link.icon;
          // console.log("ability.can", ability.can("read", link.path) )
          return location === "logout" ? (
            <Button
              type="submit"
              key={`${link.name}-${index}-logout`}
              sx={{
                width: "-webkit-fill-available",
              }}
            >
              <ListItem disablePadding>
                <ListItemButton
                  // autoFocus={pathname === link.path}
                  alignItems="center"
                  sx={{
                    background:
                      pathname === link.path
                        ? "#00ABFF"
                        : link.name === "Log Out"
                        ? "#ffffff20"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: "#b2947566",
                      // cursor: "pointer",
                      borderRadius: "8px",
                    },
                    borderRadius:
                      pathname === link.path || link.name === "Log Out"
                        ? "8px"
                        : "0px",
                    mr:
                      link.name === "LogIn as Book Owner"
                        ? "0px"
                        : link.name === "Log Out"
                        ? "40px"
                        : "20px",
                    justifyContent:
                      link.name === "Log Out" ? "center" : "start",
                  }}
                >
                  <Stack direction="row" alignItems={"center"}>
                    <ListItemIcon sx={{ minWidth: "35px" }}>
                      {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                      <LinkIcon sx={{ color: "#f00" }} />
                    </ListItemIcon>

                    <ListItemText
                      primary={link.name}
                      sx={{
                        textDecoration: "none",
                        color: "#f00",
                      }}
                    />
                  </Stack>
                </ListItemButton>
              </ListItem>
            </Button>
          ) : location === "home" ? (
            // ability.can("read", link.path) && (
            <ListItem
              key={`${link.name}-${index}-home`}
              disablePadding
              sx={{
                height: "113px",
                width: "100%",
                background: "#FF81000D",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link href={link.path} className={`link ${"home-link"}`}>
                <ListItemButton
                  // autoFocus={pathname === link.path}
                  alignItems="center"
                  sx={{
                    justifyContent: "center",
                  }}
                >
                  <Stack direction="row" alignItems={"center"}>
                    <Image
                      src={PizzaSlice}
                      alt="Pizza Slice"
                      // className={styles.vercelLogo}
                      width={50}
                      height={50}
                      priority
                    />
                  </Stack>
                </ListItemButton>
              </Link>
            </ListItem>
          ) : (
            //  : link.name === "Role" ? (
            //   // )
            //   // ability.can("read", link.path) && (
            //   <Can I="manage" a={"all"}>
            //     <ListItem
            //       key={`${link.name}-${index}-others`}
            //       disablePadding
            //       sx={{ width: "100%", my: 1 }}
            //     >
            //       <Link
            //         href={link.path}
            //         className={`link ${
            //           location === "home" ? "home-link" : "other-link"
            //         }`}
            //         style={{ width: "100%" }}
            //       >
            //         <ListItemButton
            //           // autoFocus={pathname === link.path}
            //           alignItems="center"
            //           sx={{
            //             width: "100%",
            //             pl: "40px",
            //             background:
            //               pathname === link.path ? "#FF810066" : "transparent",
            //             "&:hover": {
            //               backgroundColor: "#b2947566",
            //               // cursor: "pointer",
            //               borderRadius: "8px",
            //             },
            //             borderRadius:
            //               // pathname === link.path || link.name === "Log Out"
            //               // ? "8px"
            //               // :
            //               "0px",
            //             mr: "20px",
            //             justifyContent: "start",
            //           }}
            //         >
            //           <Stack direction="row" alignItems={"center"}>
            //             {location !== "home" && (
            //               <ListItemIcon sx={{ minWidth: "35px" }}>
            //                 {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
            //                 <LinkIcon sx={{ color: "#000000BF" }} />
            //               </ListItemIcon>
            //             )}
            //             {location === "home" && (
            //               <Image
            //                 src={PizzaSlice}
            //                 alt="Pizza Slice"
            //                 // className={styles.vercelLogo}
            //                 width={50}
            //                 height={50}
            //                 priority
            //               />
            //             )}
            //             {location !== "home" && (
            //               <ListItemText
            //                 primary={
            //                   // link.name === "LogIn as Book Owner"
            //                   // ? // &&
            //                   // user.role === "Admin"
            //                   // "LogIn as Admin"
            //                   // :
            //                   link.name
            //                 }
            //                 sx={{
            //                   textDecoration: "none",
            //                   color: "#000000BF",
            //                 }}
            //               />
            //             )}
            //           </Stack>
            //         </ListItemButton>
            //       </Link>
            //     </ListItem>
            //   </Can>
            // )
            // )
            <ListItem
              key={`${link.name}-${index}-others`}
              disablePadding
              sx={{ width: "100%", my: 1 }}
            >
              <Link
                href={link.path}
                className={`link ${
                  location === "home" ? "home-link" : "other-link"
                }`}
                style={{ width: "100%" }}
              >
                <ListItemButton
                  // autoFocus={pathname === link.path}
                  alignItems="center"
                  sx={{
                    width: "100%",
                    pl: "40px",
                    background:
                      pathname === link.path
                        ? "#FF810066"
                        : link.name === "Log Out"
                        ? "#ffffff20"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: "#b2947566",
                      // cursor: "pointer",
                      borderRadius: "8px",
                    },
                    borderRadius:
                      pathname === link.path || link.name === "Log Out"
                        ? "8px"
                        : "0px",
                    mr:
                      link.name === "LogIn as Book Owner"
                        ? "0px"
                        : link.name === "Log Out"
                        ? "40px"
                        : "20px",
                    justifyContent:
                      link.name === "Log Out" ? "center" : "start",
                  }}
                >
                  <Stack direction="row" alignItems={"center"}>
                    {location !== "home" && (
                      <ListItemIcon sx={{ minWidth: "35px" }}>
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        <LinkIcon sx={{ color: "#000000BF" }} />
                      </ListItemIcon>
                    )}
                    {location === "home" && (
                      <Image
                        src={PizzaSlice}
                        alt="Pizza Slice"
                        // className={styles.vercelLogo}
                        width={50}
                        height={50}
                        priority
                      />
                    )}
                    {location !== "home" && (
                      <ListItemText
                        primary={
                          link.name === "LogIn as Book Owner"
                            ? // &&
                              // user.role === "Admin"
                              "LogIn as Admin"
                            : link.name
                        }
                        sx={{
                          textDecoration: "none",
                          color: "#000000BF",
                        }}
                      />
                    )}
                  </Stack>
                </ListItemButton>
              </Link>
            </ListItem>
          );
        }
      )}
    </>
  );
}
