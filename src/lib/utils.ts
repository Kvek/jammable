import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ImageBlobInterface } from "@types";

import { list } from "@vercel/blob";

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const nameExtractor = (url: string): string => {
  const match = url.toLowerCase().match(/\/([^/]+)\.(png|jpeg|jpg)$/);
  return match ? match[1].replace(/_/g, " ") : "";
};

export const getBlobFolders = async (): Promise<string[]> => {
  const { folders } = await list({ mode: "folded" });

  return folders.filter((f) => f !== "trending/");
};

export const getImagesByFolder = async (
  folder: string,
): Promise<ImageBlobInterface[]> => {
  const { blobs } = await list({ mode: "folded", prefix: folder });
  const filteredBlobs = blobs.filter(({ size }) => !!size);

  const mappedBlob = filteredBlobs.map(({ pathname, url }) => ({
    key: folder,
    src: url,
    title: nameExtractor(pathname),
  }));

  return mappedBlob;
};

export const getImages = async (): Promise<ImageBlobInterface[]> => {
  const folders = await getBlobFolders();

  const images: ImageBlobInterface[] = [];

  for (const folder of folders) {
    images.push(...(await getImagesByFolder(folder)));
  }

  return images;
};
