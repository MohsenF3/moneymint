import { getDictionary } from "@/app/lib/dictionary";
import AboutTitle from "@/app/ui/about/AboutTitle";
import InfoCards from "@/app/ui/about/InfoCards";
import { Locale } from "@/i18n.config";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import img from "@/public/about.svg";

export const metadata: Metadata = {
  title: " About ",
  description: " About page",
};

export default async function About({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { AboutPage } = await getDictionary(lang);

  return (
    <div className=" w-full flex relative items-center justify-center  max-lg:my-5 max-md:text-center">
      <div className="absolute h-full w-full ">
        <Image
          src={img}
          fill
          priority={true}
          className="absolute object-cover w-full overflow-visible sm:rotate-90 "
          alt="Background Whirl"
        />
      </div>
      <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
        <AboutTitle title={AboutPage.title} />

        <div
          className={`text-center ${
            lang === "fa" ? "md:text-right" : "md:text-left"
          }`}
        >
          <InfoCards info={AboutPage.infoCards} />
        </div>
      </div>
    </div>
  );
}
