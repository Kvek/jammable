import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { forwardRef } from "react";

import type { WrapperComponentType } from "@types";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-9 px-4 py-2",
        icon: "h-9 w-9",
        lg: "h-10 rounded-md px-8",
        shell: "border-none",
        sm: "h-8 rounded-md px-3 text-xs",
      },
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        shell: "m-0 p-0",
      },
    },
  },
);

export interface ButtonPropsInterface
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonPropsInterface>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    );
  },
);

interface TooolTipButtonPropsType {
  tooltipContent: string;
  buttonProps?: ButtonPropsInterface;
}

const ToolTipButton: WrapperComponentType<TooolTipButtonPropsType> = ({
  buttonProps,
  children,
  tooltipContent,
}) => (
  <Tooltip delayDuration={0}>
    <TooltipTrigger asChild>
      <Button {...buttonProps}>{children}</Button>
    </TooltipTrigger>

    <TooltipContent>
      <p>{tooltipContent}</p>
      <TooltipArrow className="fill-foreground" />
    </TooltipContent>
  </Tooltip>
);

Button.displayName = "Button";

export { Button, buttonVariants, ToolTipButton };
