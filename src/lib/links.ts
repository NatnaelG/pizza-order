// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

const Links = [
  // home
  {
    name: "Book Rent",
    path: "/",
    location: "home",
    icon: MenuIcon,
  },

  // upper
  {
    name: "Dashboard",
    path: "/dashboard",
    location: "upper",
    icon: SpaceDashboardRoundedIcon,
  },
  {
    name: "Books",
    path: "/books",
    location: "upper",
    icon: CollectionsBookmarkOutlinedIcon,
  },
  {
    name: "Owner",
    path: "/owners",
    location: "upper",
    icon: PersonOutlineOutlinedIcon,
  },
  {
    name: "Book Upload",
    path: "/book-upload",
    location: "upper",
    icon: CollectionsBookmarkOutlinedIcon,
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
