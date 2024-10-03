import Link from "next/link";
import Image from "next/image";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { title } = service;

  return (
    <div className="rounded-lg p-5 px-10 w-full bg-[#453C8852]">
      <div>
        <h3 className="mb-2 text-lg font-bold text-black dark:text-white">
          {title}
        </h3>
        <Link
          href="#"
          className="flex items-center gap-1 pb-2 text-base text-primary duration-300 ease-in-out hover:bg-primary/80"
        >
          Learn More{" "}
          <Image src="/images/arrow.svg" alt="logo" width={15} height={15} />
        </Link>
      </div>
    </div>
  );
};

export default SingleService;
