import type { OptionalWrapperComponentType } from "@types";

import { LinkItem } from "@components/shared/LinkItem";

import {
  DashboardIcon,
  GlobeIcon,
  HomeIcon,
  IdCardIcon,
} from "@radix-ui/react-icons";

export const Navlinks: OptionalWrapperComponentType = ({ children }) => (
  <ul className="flex h-full w-full items-center justify-between">
    <li className="md:mr-4">
      <LinkItem Icon={HomeIcon} href={"/"}>
        <span className="md:ml-1">Home</span>
      </LinkItem>
    </li>

    <li className="md:mr-4">
      <LinkItem Icon={DashboardIcon} href={"/library"}>
        <span className="md:ml-1">My Library</span>
      </LinkItem>
    </li>

    <li className="md:mr-4">
      <LinkItem Icon={GlobeIcon} href={"/community"}>
        <span className="md:ml-1">Community</span>
      </LinkItem>
    </li>

    <li className="md:mr-4">
      <LinkItem Icon={IdCardIcon} href={"/contact"}>
        <span className="md:ml-1">Contact</span>
      </LinkItem>
    </li>

    {children}
  </ul>
);
