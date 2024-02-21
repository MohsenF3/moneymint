import infoCards from "@/app/lib/placeholder-data";
import AboutTitle from "@/app/ui/about/AboutTitle";
import InfoCard from "@/app/ui/about/InfoCard";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: " About ",
  description: " About page",
};

export default function About() {
  return (
    <div className=" w-full flex relative items-center justify-center  max-lg:my-5 max-md:text-center">
      <div className="absolute h-full w-full ">
        <Image
          src="/about.svg"
          fill
          className="absolute object-cover w-full overflow-visible sm:rotate-90"
          alt="Background Whirl"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
        <AboutTitle />
        <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
          {infoCards.map((infoCard) => {
            return (
              <InfoCard
                key={infoCard.id}
                Icon={infoCard.icon}
                title={infoCard.title}
                desc={infoCard.bodyText}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
