import type { FC, ReactNode } from "react";

export type WrapperComponentType<T = object> = FC<T & { children: ReactNode }>;
export type OptionalWrapperComponentType<T = object> = FC<
  T & { children?: ReactNode }
>;
export type PromisedWrapperComponentType = FC<Promise<{ children: ReactNode }>>;

export enum ThemeEnum {
  DARK = "dark",
  LIGHT = "light",
}
