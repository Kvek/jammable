import type { RouteType } from "next/dist/lib/load-custom-routes";
import type { LinkProps } from "next/link";
import NextLink from "next/link";
import type { ComponentType } from "react";

import type { WrapperComponentType } from "@types";

import { cn } from "@lib/utils";

const Link: WrapperComponentType<LinkProps<RouteType>> = ({
  children,
  ...props
}) => (
  <NextLink
    {...props}
    className={cn(
      "flex w-full flex-col items-center justify-center opacity-70 md:flex-row md:font-semibold md:hover:opacity-100",
      props.className,
    )}
    href={props.href}
  >
    {children}
  </NextLink>
);

export const LinkItem: WrapperComponentType<
  LinkProps<RouteType> & {
    Icon: ComponentType<{
      className?: string;
    }>;
  }
> = ({ Icon, children, ...props }) => (
  <span className={cn("relative", props.className)}>
    <Link {...props}>
      <Icon className="flex h-6 min-h-5 w-6 min-w-5 md:hidden md:h-5 md:w-5" />
      <span className="text-[10px] md:text-[14px]">{children}</span>
    </Link>
  </span>
);
