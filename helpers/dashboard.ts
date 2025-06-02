// type check for user data.
import { IoChatboxEllipses } from "react-icons/io5";
import { MdOutlineRoomPreferences } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { LuContact } from "react-icons/lu";

export const DASHBOARDHELPERS = [
  {
    title: "chats",
    Icon: IoChatboxEllipses,
    url: "chats",
  },
  {
    title: "groups",
    Icon: MdGroup,
    url: "groups",
  },
  {
    title: "contacts",
    Icon: LuContact,
    url: "contact",
  },
  {
    title: "preferences",
    Icon: MdOutlineRoomPreferences,
    url: "preferences",
  },
];
