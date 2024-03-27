import { type FC } from "react";

import { Banner, Tiles, Trending } from "@wrappers";

import { getBlobFolders } from "@lib/utils";

const Home: FC = async () => {
  const folders = await getBlobFolders();

  return (
    <div className="flex flex-col overflow-x-hidden">
      <Banner />

      <Trending />

      {folders.map((f) => (
        <Tiles id={f} key={f} />
      ))}
    </div>
  );
};

export default Home;
