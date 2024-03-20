import Image from "next/image";
import type { FC } from "react";

export const Logo: FC = () => (
  <Image alt="logo" height={40} src="/image.webp" width={40} />
);
