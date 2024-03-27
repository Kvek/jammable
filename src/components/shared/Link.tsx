"use client";

import type { RouteType } from "next/dist/lib/load-custom-routes";
import type { LinkProps } from "next/link";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import type { WrapperComponentType } from "@types";

import { cn } from "@lib/utils";

const Link: WrapperComponentType<LinkProps<RouteType>> = ({
  children,
  href,
  ...props
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NextLink
      {...props}
      className={cn(
        "flex w-full flex-col items-center justify-center opacity-70 md:flex-row md:font-semibold md:hover:opacity-100",
        props.className,
        isActive && "opacity-100",
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export { Link };
