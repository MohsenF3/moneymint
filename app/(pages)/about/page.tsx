import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full bg-transparent">
      <div className="relative lg:w-[30rem] max-lg:mx-auto  max-lg:mb-10 lg:h-[30rem] w-[15rem] h-[15rem]">
        <Image
          src="/about.svg"
          alt="Hero Image"
          fill
          className="rounded-full "
        />
      </div>
      <div className="me-auto max-w-2xl max-lg:w-full font-semibold">
        <h1 className="text-3xl max-md:text-2xl mb-5 text-info">
          About Agency
        </h1>
        <h1 className="text-7xl max-md:text-6xl leading-tight">
          We create ideas that make a difference.
        </h1>
        <p className="my-5 text-gray-200 text-lg">
          Welcome to MoneyMint! We're on a mission to revolutionize the way you
          earn. Our team is dedicated to sourcing and curating the most
          effective money-making strategies, ensuring you're always one step
          ahead in your financial journey.
        </p>
        <div>
          <div className="stats stats-vertical lg:stats-horizontal ">
            <div className="stat border-none">
              <div className="stat-value">5+</div>
              <div className="stat-desc text-info">Year of experience</div>
            </div>

            <div className="stat">
              <div className="stat-value">10K+</div>
              <div className="stat-desc text-info">People reached</div>
            </div>

            <div className="stat">
              <div className="stat-value">3K+</div>
              <div className="stat-desc text-info">Services and plugins</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
