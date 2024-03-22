import React from "react";

import { Hero } from "../Hero";

const paths = [
  "/cartoon/image(1).webp",
  "/cartoon/image(2).webp",
  "/cartoon/image(3).webp",
  "/cartoon/image(4).webp",
  "/cartoon/image(5).webp",
  "/cartoon/image(6).webp",
  "/cartoon/image(7).webp",
  "/cartoon/image(9).webp",
  "/cartoon/image(10).webp",
  "/cartoon/image.webp",
];

export const Cartoons = (): JSX.Element => (
  <div className="my-5">
    <Hero paths={paths} title="Cartoons" />
  </div>
);
