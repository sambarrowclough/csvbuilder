"use client";

import { Column } from "@/components/ui/column";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@atlaskit/code";
import { Check, Clipboard, Copy, Download, FileWarning } from "lucide-react";
import * as React from "react";
import { Span } from "./ui/typography";

type JSONDataCodeBlockProps = {
  completion: string;
};

export default function JSONDataCodeBlock({
  completion,
}: JSONDataCodeBlockProps) {
  const responseCodeBlockRef = React.useRef(null);
  const [copied, setCopied] = React.useState(false);
  const [downloaded, setDownloaded] = React.useState(false);

  const handleOnClick = async () => {
    await navigator.clipboard.writeText(completion);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  function downloadCSV() {
    const blob = new Blob([completion], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.setAttribute("hidden", "");
    a.setAttribute("href", url);
    a.setAttribute("download", "download.csv");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <Column className="w-full md:w-auto md:flex-1 overflow-hidden">
      {completion && (
        <div
          ref={responseCodeBlockRef}
          className="relative scrollbar-hide max-h-[400px] overflow-auto shadow-sm min-h-[350px] border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 w-full rounded-lg p-1"
        >
          <div className="absolute right-3 top-3 flex items-center justify-end">
            <button
              className="hover:bg-neutral-200/100 hover:text-neutral-700 p-1 rounded transition-all"
              onClick={handleOnClick}
            >
              {copied ? (
                <Check className="w-4 h-4 text-neutral-400 " />
              ) : (
                <Clipboard className="w-4 h-4 text-neutral-400" />
              )}
            </button>

            <button className="hover:bg-neutral-200/100 hover:text-neutral-700 p-1 rounded transition-all">
              {downloaded ? (
                <Check className="w-4 h-4 text-neutral-400 " />
              ) : (
                <Download
                  className="w-4 h-4 text-neutral-400"
                  onClick={() => {
                    downloadCSV();
                    setDownloaded(true);
                    setTimeout(() => {
                      setDownloaded(false);
                    }, 2000);
                  }}
                />
              )}
            </button>
          </div>
          <CodeBlock
            language="json"
            showLineNumbers={false}
            text={completion}
          />

          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className={"absolute bottom-3 right-3"}>
                  <FileWarning className="text-yellow-500 w-4 h-4 " />
                </TooltipTrigger>
                <TooltipContent>
                  <Span className="text-xs text-foreground ">
                    This data may not be accurate and should not be used for
                    research purposes.
                  </Span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      )}
    </Column>
  );
}
