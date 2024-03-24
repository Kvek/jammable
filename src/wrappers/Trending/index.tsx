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

const paths = [
  "/cartoon/image(1).webp",
  "/cartoon/image(2).webp",
  "/cartoon/image(3).webp",
  "/cartoon/image(4).webp",
  "/cartoon/image(5).webp",
  // "/cartoon/image(6).webp",
  // "/cartoon/image(7).webp",
  // "/cartoon/image(9).webp",
  // "/cartoon/image(10).webp",
  // "/cartoon/image.webp",
];

export const Trending = (): JSX.Element => (
  <div className="flex w-full flex-col overflow-hidden">
    <div>
      <h1 className="mb-2 select-none text-3xl font-semibold capitalize opacity-80">
        Trending
      </h1>
    </div>

    <div className="my-5 h-[425px] w-full">
      <Carousel
        className="relative flex h-full w-full items-center"
        opts={{ align: "start", loop: true }}
      >
        <CarouselPrevious className="mr-4" />

        <CarouselContent className="h-full w-full">
          {paths.map((_, index) => (
            <CarouselItem key={index}>
              <Card className="relative flex h-full w-full overflow-hidden bg-gray-400 p-4 md:mx-1.5 md:w-[375px] md:p-6">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[url('/goku.webp')] bg-cover blur-xl" />

                <CardContent className="z-[2] flex h-full w-full flex-col gap-2 p-0">
                  <div className="flex h-full w-full flex-[4] flex-col md:flex-1">
                    <div className="relative h-full w-full">
                      <Image
                        fill
                        alt="goku"
                        className="object-cover"
                        src="/goku.webp"
                      />
                    </div>
                    <div className="w-full">
                      <TileContent title={index.toString()} />
                    </div>
                  </div>

                  <div className="flex-col items-start gap-2 bg-opacity-50">
                    <div className="flex w-full">
                      <Button
                        className="w-full bg-purple-800 p-2 font-semibold text-white hover:bg-purple-700"
                        variant={"shell"}
                      >
                        <AudioLinesIcon className="mr-1" />
                        Jam with Goku
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselNext className="ml-4" />
      </Carousel>
    </div>
  </div>
);
