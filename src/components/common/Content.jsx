import { GlobalPost, MyFriendPost, MyPost } from "./icon/icons";

export const SidebarContent = [
  {
    img: <MyFriendPost />,
    text: "Create Post",
    pathname: "/createpost",
  },
  {
    img: <MyPost />,
    text: "My Post",
    pathname: "/mypost",
  },
  {
    img: <GlobalPost />,
    text: "Global Post",
    pathname: "/globalpost",
  },
];
