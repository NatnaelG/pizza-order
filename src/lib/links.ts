// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Links = [
  // home
  {
    name: "Pizza",
    path: "/",
    location: "home",
    icon: MenuIcon,
  },

  // upper
  {
    name: "Orders",
    path: "/order",
    location: "upper",
    icon: TakeoutDiningIcon,
  },
  {
    name: "Add menu",
    path: "/add-menu",
    location: "upper",
    icon: LocalPizzaIcon,
  },
  {
    name: "Role",
    path: "/role",
    location: "upper",
    icon: PersonOutlineOutlinedIcon,
  },
  {
    name: "User",
    path: "/user",
    location: "upper",
    icon: AccountCircleIcon,
  },
  // {
  //   name: "Other",
  //   path: "/",
  //   location: "upper",
  //   icon: AddBoxOutlinedIcon,
  // },
  // {
  //   name: "Other",
  //   path: "/",
  //   location: "upper",
  //   icon: AddBoxOutlinedIcon,
  // },

  // // lower
  // {
  //   name: "Notification",
  //   path: "/",
  //   location: "lower",
  //   icon: NotificationsNoneIcon,
  // },
  // {
  //   name: "Setting",
  //   path: "/",
  //   location: "lower",
  //   icon: SettingsOutlinedIcon,
  // },
  // {
  //   name: "LogIn as Book Owner",
  //   path: "/",
  //   location: "lower",
  //   icon: AccountCircleOutlinedIcon,
  // },

  // logout
  {
    name: "Log Out",
    path: "/",
    location: "logout",
    icon: LoginOutlinedIcon,
  },
];

export default Links;
