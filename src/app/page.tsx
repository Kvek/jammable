import type { FC } from "react";

import { Banner, FilterBadges } from "@wrappers";
import { Cartoons } from "@wrappers/Tiles/Cartoons";

const Home: FC = () => (
  <div className="flex flex-col">
    <Banner />
    <FilterBadges />
    <Cartoons />
  </div>
);

export default Home;
