import React from "react";
import InfoCard from "./InfoCard";
import { MdAlarmOff } from "react-icons/md";
import { LuArrowDownNarrowWide, LuArrowUpNarrowWide } from "react-icons/lu";
import { InfoCardData, InfoCardsProps } from "@/app/lib/defenition";

export default function InfoCards({ info }: { info: InfoCardsProps }) {
  const infoCards: InfoCardData[] = [
    {
      title: info.item1.title,
      description: info.item1.description,
      icon: LuArrowUpNarrowWide,
      id: 1,
    },
    {
      title: info.item2.title,
      description: info.item2.description,
      icon: MdAlarmOff,
      id: 2,
    },
    {
      title: info.item3.title,
      description: info.item3.description,
      icon: LuArrowDownNarrowWide,
      id: 3,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
      {infoCards.map((infoCard) => {
        return (
          <InfoCard
            key={infoCard.id}
            Icon={infoCard.icon}
            title={infoCard.title}
            desc={infoCard.description}
          />
        );
      })}
    </div>
  );
}
