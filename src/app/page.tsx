import { type FC } from "react";

import { Banner, Trending } from "@wrappers";

const Home: FC = () => (
  <div className="flex flex-col overflow-x-hidden">
    <Banner />

    <Trending />
  </div>
);

export default Home;
