import type { ReactNode } from "react";

import type { WrapperComponentType } from "@types";

import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
} from "@components/ui/tooltip";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Popup: WrapperComponentType<{
  trigger: ReactNode;
  tooltipContent?: string;
}> = ({ children, tooltipContent, trigger }) => (
  <Drawer>
    <Tooltip>
      <TooltipTrigger asChild>
        <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      </TooltipTrigger>

      {tooltipContent && (
        <TooltipContent>
          <p>{tooltipContent}</p>
          <TooltipArrow className="fill-foreground" />
        </TooltipContent>
      )}

      <DrawerContent>{children}</DrawerContent>
    </Tooltip>
  </Drawer>
);

export { Popup };
