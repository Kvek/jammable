import Image from "next/image";
import type { FC } from "react";

import { LinkItem } from "@components/shared/LinkItem";

import { cn } from "@lib/utils";

const AvatarIcon: FC<{ className?: string }> = ({ className }) => (
  <div className={cn(className, "relative md:h-8 md:w-8")}>
    <Image
      fill
      alt="profile image"
      className="rounded-[50%] bg-slate-400"
      src="/test.jpg"
    />
  </div>
);

const AvatarContent: FC = () => <span className="md:hidden">Profile</span>;

export const Avatar: FC = () => (
  <LinkItem Icon={AvatarIcon} href="/">
    <AvatarContent />
  </LinkItem>
);
