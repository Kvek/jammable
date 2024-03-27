import type { FC } from "react";

import { LinkItem } from "@components/shared/LinkItem";

import { cn } from "@lib/utils";
import { PersonIcon } from "@radix-ui/react-icons";

export const AvatarIcon: FC<{ className?: string }> = ({ className }) => (
  <div className={cn(className, "relative cursor-pointer md:h-8 md:w-8")}>
    <PersonIcon className="flex h-full w-full rounded-[50%] border bg-foreground p-1 text-background" />
  </div>
);

const AvatarContent: FC = () => <span className="md:hidden">Profile</span>;

export const Avatar: FC = () => (
  <LinkItem Icon={AvatarIcon} href="/">
    <AvatarContent />
  </LinkItem>
);
