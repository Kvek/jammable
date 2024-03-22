import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Popular = (): JSX.Element => (
  <div className="my-5 aspect-video h-[350px] w-full">
    <Carousel className="flex h-full w-full items-center" opts={{ loop: true }}>
      <CarouselPrevious className="mr-4 hidden md:flex" />

      <CarouselContent className="h-full w-full">
        {[].map((_, index) => (
          <CarouselItem key={index}>
            <Card className="h-full w-full p-6">
              <CardContent />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselNext className="ml-4 hidden md:flex" />
    </Carousel>
  </div>
);
