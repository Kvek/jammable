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
      aria-label="theme toggle"
      onClick={() => {
        setTheme(theme === DARK ? LIGHT : DARK);
      }}
      size="icon"
      variant="shell"
    >
      <MoonIcon
        className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        height={18}
        width={18}
      />
      <SunIcon
        className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        height={18}
        width={18}
      />
    </Button>
  );
};
