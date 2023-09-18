import * as React from "react";

import { Column } from "@/components/ui/column";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Span } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  title?: string;
  description?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      containerClassName,
      description,
      title,
      type,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <Column className={cn(containerClassName, "relative flex")}>
        {title && (
          <Span className="text-xs mb-1 font-medium text-muted-foreground">
            {title}
          </Span>
        )}
        <input
          {...props}
          type={type}
          className={cn(
            `flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`,
            error ? "border-destructive" : "border-input",
            className
          )}
          ref={ref}
        />

        {error && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger
                className={cn(
                  `absolute right-[7px]`,
                  title ? "top-[34px]" : "top-[14px]"
                )}
              >
                <Info className="w-[14px] h-[14px] text-destructive" />
              </TooltipTrigger>
              <TooltipContent>
                <Span className="text-sm text-destructive">{error}</Span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </Column>
    );
  }
);
Input.displayName = "Input";

export { Input };
