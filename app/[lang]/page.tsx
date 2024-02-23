import React from "react";
import { TextGenerateEffect } from "../ui/home/text-generate-effect";
import WavyBackground from "../ui/home/WavyBackground";
import HomeLinks from "../ui/home/HomeLinks";
import { Locale } from "@/i18n.config";
import { getDictionary } from "../lib/dictionary";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { IndexPage } = await getDictionary(lang);
  return (
    <div>
      {/* wavy background */}
      <WavyBackground />

      <div className="w-full h-full flex flex-col text-center items-center justify-center">
        {/* title with animation*/}

        <TextGenerateEffect title={IndexPage.title} />

        {/* buttons */}

        <HomeLinks buttons={IndexPage.buttons} lang={lang} />
      </div>
    </div>
  );
}
