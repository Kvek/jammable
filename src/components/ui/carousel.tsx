"use client";

import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import type { PropsWithChildren } from "react";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

type CarouselApiType = UseEmblaCarouselType[1];

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;

type CarouselOptions = UseCarouselParameters[0];

type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApiType) => void;
}

type CarouselContextPropsType = CarouselProps & {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

interface UseDotButtonType {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    onDotButtonClick,
    scrollSnaps,
    selectedIndex,
  };
};

type PropType = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
>;

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
};

const CarouselContext = React.createContext<CarouselContextPropsType | null>(
  null,
);

const useCarousel = (): CarouselContextPropsType => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
};

const Carousel = React.forwardRef<
  HTMLDivElement,
  CarouselProps & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      children,
      className,
      opts,
      orientation = "horizontal",
      plugins,
      setApi,
      ...props
    },
    ref,
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApiType) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return (): void => {
        api.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          api: api,
          canScrollNext,
          canScrollPrev,
          carouselRef,
          opts,
          orientation,
          scrollNext,
          scrollPrev,
        }}
      >
        <div
          aria-roledescription="carousel"
          className={cn("relative", className)}
          onKeyDownCapture={handleKeyDown}
          ref={ref}
          role="region"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { api, carouselRef } = useCarousel();

  const { onDotButtonClick, scrollSnaps, selectedIndex } = useDotButton(api);

  return (
    <div className="flex h-full w-full flex-col">
      <div className="z-[2] order-2 flex h-10 w-full justify-center md:order-1 md:justify-end">
        <div className="text-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              aria-label={`card ${index}`}
              className={cn(
                "ml-1 h-[6px] w-[6px] rounded-full bg-foreground",
                index === selectedIndex ? "opacity-100" : "opacity-30",
              )}
              key={index}
              onClick={() => {
                onDotButtonClick(index);
              }}
            />
          ))}
        </div>
      </div>

      <div
        className="mt-4 h-full w-full md:order-2 md:ml-[50px]"
        ref={carouselRef}
      >
        <div className={cn("flex", className)} ref={ref} {...props} />
      </div>
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    aria-roledescription="slide"
    className={cn(
      "min-w-0 shrink-0 grow-0 basis-full md:basis-auto",
      className,
    )}
    ref={ref}
    role="group"
    {...props}
  />
));
CarouselItem.displayName = "CarouselItem";

const navButtonClass =
  "absolute -bottom-1 -top-1 z-[1] hidden w-[50px] items-center bg-background dark:opacity-65 dark:hover:opacity-90 md:flex";

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, size = "icon", variant = "outline", ...props }, ref) => {
  const { canScrollPrev, scrollPrev } = useCarousel();

  return (
    <div
      className={cn(navButtonClass, "left-0", !canScrollPrev && "md:hidden")}
    >
      <Button
        className={cn("h-8 w-8 rounded-full", className)}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        ref={ref}
        size={size}
        variant={variant}
        {...props}
      >
        <ArrowLeftIcon className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    </div>
  );
});

CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, size = "icon", variant = "outline", ...props }, ref) => {
  const { canScrollNext, scrollNext } = useCarousel();

  return (
    <div
      className={cn(navButtonClass, "right-0", !canScrollNext && "md:hidden")}
    >
      <Button
        className={cn("h-8 w-8 rounded-full", className)}
        disabled={!canScrollNext}
        onClick={scrollNext}
        ref={ref}
        size={size}
        variant={variant}
        {...props}
      >
        <ArrowRightIcon className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  type CarouselApiType,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
};
