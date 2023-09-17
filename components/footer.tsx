import Link from "next/link";
import { Row } from "@/components/ui/row";
import { H4, P, Span } from "@/components/ui/typography";
import { TwitterIcon } from "lucide-react";

export default async function Footer() {
  return (
    <footer className="flex items-center justify-between w-full p-4 border-t border-neutral-200 dark:border-neutral-800">
      <div className="w-full max-w-4xl mx-auto flex items-center justify-between my-24">
        <Row className="w-auto items-center gap-4">
          <Link href={"/"}>
            <H4>CSVBuilder</H4>
          </Link>
          <Span className="text-sm font-200 text-muted-foreground">
            Powered by <strong>ChatGPT</strong> and{" "}
            <strong>Vercel AI SDK</strong>
          </Span>
        </Row>
        <Row className="justify-end items-center w-auto gap-4">
          <Link href={"https://twitter.com/flatfilers"}>
            <TwitterIcon className="text-neutral-400 hover:stroke-foreground" />
          </Link>
        </Row>
      </div>
    </footer>
  );
}
