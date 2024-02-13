import Image from "next/image";
import Link from "next/link";
import TypeAnimation from "./ui/TypeAnimation";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full bg-transparent max-md:pb-2">
      <div className="relative lg:w-[30rem] max-lg:mx-auto  max-lg:mb-10 lg:h-[30rem] w-[15rem] h-[15rem]">
        <Image
          src="/idea.gif"
          alt="Home Image"
          fill
          className="rounded-full "
        />
      </div>
      <div className="me-auto max-w-2xl max-lg:w-full font-semibold">
        <h1 className="lg:text-7xl md:text-5xl  text-4xl leading-tight">
          Empowering Individuals with
          <span>
            <TypeAnimation />
          </span>
          Ideas
        </h1>
        <p className="my-5 text-gray-200 text-lg max-md:text-base">
          Welcome to MoneyMint! We're on a mission to revolutionize the way you
          earn. Our team is dedicated to sourcing and curating the most
          effective money-making strategies, ensuring you're always one step
          ahead in your financial journey.
        </p>
        <div className="flex items-center gap-2">
          <Link href="/about" className="btn btn-neutral">
            About Us
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline hover:border-neutral hover:bg-neutral hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
