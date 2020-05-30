import React from "react";
import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

export const routes = [
  {
    path: "/add",
    name: "add",
    label: "Add Item",
    icon: <PlusIcon />,
    subMenu: [],
  },
  {
    path: "/notif",
    name: "notif",
    label: "Notification",
    icon: <BellIcon />,
    subMenu: [],
  },
  {
    path: "/inbox",
    name: "messages",
    label: "Messages",
    icon: <MessengerIcon />,
    subMenu: [],
  },
  {
    path: "#",
    name: "profile",
    label: "Profile",
    icon: <CaretIcon />,
    subMenu: [
      {
        name: "main",
        items: [
          {
            path: "/profile",
            name: "myprofile",
            label: "My Profile",
            leftIcon: <CogIcon />,
          },
          {
            path: "/settings",
            name: "main-settings",
            label: "Settings",
            leftIcon: <CogIcon />,
            rightIcon: <ChevronIcon />,
            goToMenu: "settings",
          },
          {
            path: "/others",
            name: "main-others",
            label: "Other Menu",
            leftIcon: <CogIcon />,
            rightIcon: <ChevronIcon />,
            goToMenu: "others",
          },
        ],
      },
      {
        name: "settings",
        items: [
          {
            path: "/settings",
            name: "settings",
            label: "Settings",
            goToMenu: "main",
            leftIcon: <ArrowIcon />,
          },
          {
            path: "/settings-1",
            name: "settings1",
            label: "Settings One",
            leftIcon: <BoltIcon />,
          },
          {
            path: "/settings-2",
            name: "settings2",
            label: "Settings Two",
            leftIcon: <BoltIcon />,
          },
        ],
      },
      {
        name: "others",
        items: [
          {
            path: "/others",
            name: "others",
            label: "Others",
            goToMenu: "main",
            leftIcon: <ArrowIcon />,
          },
          {
            path: "/others-1",
            name: "others1",
            label: "Other One",
            leftIcon: <BoltIcon />,
          },
          {
            path: "/others-2",
            name: "others2",
            label: "Other Two",
            leftIcon: <BoltIcon />,
          },
          {
            path: "/others-1",
            name: "others1",
            label: "Other 3",
            leftIcon: <BoltIcon />,
          },
          {
            path: "/others-2",
            name: "others2",
            label: "Other 4",
            leftIcon: <BoltIcon />,
          },
        ],
      },
    ],
  },
];
