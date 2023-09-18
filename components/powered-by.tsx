import { Flatfile } from "@/components/icons";
import { cn } from "@/lib/utils";

const PoweredBy = ({ theme = "dark" }) => {
  return (
    <a
      href="https://flatfile.com"
      target={"_blank"}
      className={cn(
        `bg-white text-black shadow-md hover:bg-gray-50 border-[1px] fixed left-1/2 bottom-4 z-10 flex -translate-x-1/2  -translate-y-1/2  transform items-center rounded-md p-2 px-4 text-sm backdrop-blur transition-all dark:border-transparent dark:bg-neutral-900 dark:text-neutral-600`
      )}
    >
      <Flatfile />
      <span className="ml-2">Powered by Flatfile & OpenAI</span>
    </a>
  );
};

export default PoweredBy;
