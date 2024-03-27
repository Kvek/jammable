import { Hero } from "@wrappers";

import { getImagesByFolder } from "@lib/utils";

interface TilesPropsType {
  id: string;
}

export const Tiles = async ({ id }: TilesPropsType): Promise<JSX.Element> => {
  const title = id.replace(/\/$/, "");
  const data = await getImagesByFolder(id);

  return (
    <div className="my-5" id={id}>
      <Hero paths={data} title={title} />
    </div>
  );
};
