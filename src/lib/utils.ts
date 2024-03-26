import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const nameExtractor = (url: string): string => {
  const match = url.toLowerCase().match(/\/([^/]+)\.png$/);
  return match ? match[1].replace(/_/g, " ") : "";
};
