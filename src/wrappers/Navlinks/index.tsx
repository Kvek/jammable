import type { RouteType } from "next/dist/lib/load-custom-routes";
import type { LinkProps } from "next/link";
import NextLink from "next/link";
import type { ComponentType, FC } from "react";

import type { WrapperComponentType } from "@types";

import { cn } from "@lib/utils";
import {
  DashboardIcon,
  GlobeIcon,
  HomeIcon,
  IdCardIcon,
} from "@radix-ui/react-icons";

const Link: WrapperComponentType<LinkProps<RouteType>> = ({
  children,
  ...props
}) => (
  <NextLink
    {...props}
    className={cn(
      "flex w-full flex-col items-center justify-center opacity-60 md:mr-4 md:flex-row md:font-semibold md:hover:opacity-100",
      props.className,
    )}
    href={props.href}
  >
    {children}
  </NextLink>
);

const LinkItem: FC<
  LinkProps<RouteType> & {
    Icon: ComponentType<{
      className?: string;
    }>;
    content: string;
  }
> = ({ Icon, content, ...props }) => (
  <li className="flex w-[25%] md:mr-2 md:w-auto">
    <Link {...props}>
      <Icon className="flex h-6 w-6 md:mr-1 md:h-5 md:w-5" />
      <span className="text-[10px] md:text-[14px]">{content}</span>
    </Link>
  </li>
);

export const Navlinks: FC = () => (
  <ul className="flex h-full w-full items-center justify-between">
    <LinkItem Icon={HomeIcon} content="Home" href={"/"} />
    <LinkItem Icon={DashboardIcon} content="My Library" href={"/library"} />
    <LinkItem Icon={GlobeIcon} content="Community" href={"/community"} />
    <LinkItem Icon={IdCardIcon} content="Contact" href={"/contact"} />
  </ul>
);
