import { AudioLinesIcon } from "lucide-react";
import Image from "next/image";

import { TileContent } from "@components/shared/Tile";
import { Button } from "@components/ui/Button";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { nameExtractor } from "@lib/utils";
import type { ListBlobResultBlob } from "@vercel/blob";
import { list } from "@vercel/blob";

export const Trending = async (): Promise<JSX.Element | null> => {
  let images: ListBlobResultBlob[] = [];

  try {
    const { blobs } = await list({
      mode: "folded",
      prefix: "trending/",
    });

    images = blobs.filter(({ size }) => !!size);
  } catch (error) {
    console.log(error);
  }

  if (!images.length) return null;

  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div className="hidden md:flex">
        <h1 className="mb-2 select-none text-lg font-semibold capitalize opacity-80 md:text-3xl">
          Trending
        </h1>
      </div>

      <div className="h-[475px] w-full">
        <Carousel
          className="relative flex h-full w-full items-center"
          opts={{ align: "start", loop: true }}
        >
          <CarouselPrevious className="mr-4" />

          <CarouselContent className="h-full w-full">
            {images.map(({ pathname, url }, index) => {
              const title = nameExtractor(pathname);

              return (
                <CarouselItem key={index}>
                  <Card className="relative flex h-full w-full overflow-hidden p-4 md:mx-1.5 md:w-[375px] md:p-6">
                    <div
                      className="absolute bottom-0 left-0 right-0 top-0 bg-cover blur-3xl brightness-200"
                      style={{ backgroundImage: `url('${url}')` }}
                    />

                    <CardContent className="z-[2] flex h-full w-full flex-col gap-2 p-0">
                      <div className="flex h-full w-full flex-[4] flex-col md:flex-1">
                        <div className="relative h-full w-full">
                          <Image
                            fill
                            priority
                            alt="img"
                            className="object-cover"
                            src={url}
                          />
                        </div>

                        <div className="w-full">
                          <TileContent title={title} />
                        </div>
                      </div>

                      <div className="flex-col items-start gap-2 bg-opacity-50">
                        <div className="flex w-full">
                          <Button
                            className="w-full bg-purple-800 p-3 font-semibold text-white hover:bg-purple-700"
                            variant={"shell"}
                          >
                            <AudioLinesIcon className="mr-1" />
                            Jam with
                            <span className="capitalize">&nbsp;{title}</span>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselNext className="ml-4" />
        </Carousel>
      </div>
    </div>
  );
};
