"use client";

import { useTheme } from "next-themes";
import type { FC } from "react";

import { ThemeEnum } from "@types";

import { Button } from "@components/ui/Button";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const { DARK, LIGHT } = ThemeEnum;

export const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      onClick={() => {
        setTheme(theme === DARK ? LIGHT : DARK);
      }}
      size="icon"
      variant="shell"
    >
      <MoonIcon className=" h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <SunIcon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
