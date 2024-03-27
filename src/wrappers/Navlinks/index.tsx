import type { OptionalWrapperComponentType } from "@types";

import { LinkItem } from "@components/shared/LinkItem";

import {
  DashboardIcon,
  GlobeIcon,
  HomeIcon,
  IdCardIcon,
} from "@radix-ui/react-icons";

export const Navlinks: OptionalWrapperComponentType = ({ children }) => (
  <ul className="flex w-full items-center justify-between md:justify-end md:gap-7">
    <li>
      <LinkItem Icon={HomeIcon} href={"/"}>
        <span>Home</span>
      </LinkItem>
    </li>

    <li>
      <LinkItem Icon={GlobeIcon} href={"/community"}>
        <span>Community</span>
      </LinkItem>
    </li>

    <li>
      <LinkItem Icon={DashboardIcon} href={"/library"}>
        <span>My Library</span>
      </LinkItem>
    </li>

    <li>
      <LinkItem Icon={IdCardIcon} href={"/contact"}>
        <span>Contact</span>
      </LinkItem>
    </li>

    <li>{children}</li>
  </ul>
);
