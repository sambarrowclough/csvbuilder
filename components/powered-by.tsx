import { Flatfile } from "@/components/icons";

const PoweredBy = ({ theme = "dark" }) => {
  return (
    <a
      href="https://flatfile.com"
      target={"_blank"}
      className={` ${
        theme === "dark"
          ? "border border-white/[.11] bg-white/10 text-white/60 shadow-lg hover:bg-white/[.15]"
          : "bg-white text-black shadow-md hover:bg-gray-50 border-[1px]"
      } fixed left-1/2 bottom-4 z-10 flex -translate-x-1/2  -translate-y-1/2  transform items-center rounded-lg p-2 px-4 text-sm backdrop-blur transition-all`}
    >
      <Flatfile />
      <span className="ml-2 text-neutral-800">Powered by Flatfile</span>
    </a>
  );
};

export default PoweredBy;
