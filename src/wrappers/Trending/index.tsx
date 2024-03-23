import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
  "/cartoon/image(6).webp",
  "/cartoon/image(7).webp",
  "/cartoon/image(9).webp",
  "/cartoon/image(10).webp",
  "/cartoon/image.webp",
];

export const Trending = (): JSX.Element => (
  <div className="my-5 aspect-video h-[425px] w-full">
    <Carousel className="flex h-full w-full items-center" opts={{ loop: true }}>
      <CarouselPrevious className="mr-4 hidden md:flex" />

      <CarouselContent className="h-full">
        {paths.map((_, index) => (
          <CarouselItem key={index}>
            <Card className="h-full w-full bg-gray-400 p-6">
              <CardTitle>
                <h1 className="mb-2 select-none text-3xl font-semibold capitalize opacity-80">
                  Goku
                </h1>
              </CardTitle>
              <CardContent />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="ml-4 hidden md:flex" />
    </Carousel>
  </div>
);
