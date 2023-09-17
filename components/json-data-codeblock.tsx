"use client";

import * as React from "react";
import { Column } from "@/components/ui/column";
import { CodeBlock } from "@atlaskit/code";
import { Badge } from "@/components/ui/badge";
import { Check, Copy } from "lucide-react";

type JSONDataCodeBlockProps = {
  completion: string;
};

export default function JSONDataCodeBlock({
  completion,
}: JSONDataCodeBlockProps) {
  const responseCodeBlockRef = React.useRef(null);
  const [copied, setCopied] = React.useState(false);

  const handleOnClick = async () => {
    await navigator.clipboard.writeText(completion);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

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
                <Copy className="w-4 h-4 text-neutral-400" />
              )}
            </button>
          </div>
          <CodeBlock
            language="json"
            showLineNumbers={false}
            text={completion}
          />
        </div>
      )}
    </Column>
  );
}
