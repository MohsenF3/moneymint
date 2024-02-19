import { MdAlarmOff } from "react-icons/md";
import { LuArrowDownNarrowWide, LuArrowUpNarrowWide } from "react-icons/lu";
import { IconType } from "react-icons";

interface IInfoCard {
  title: string;
  icon: IconType;
  bodyText: string;
  id: number;
}

const infoCards: IInfoCard[] = [
  {
    title: "Increased Sales",
    bodyText:
      " Insightful's predictive analytics identify high-value prospects for targeted pitches, boosting conversion rates and sales by up to 20%.",
    icon: LuArrowUpNarrowWide,
    id: 1,
  },
  {
    title: "No Time Wasted",
    bodyText:
      "Insightful automates personalized content creation, freeing up sales reps' time for revenue-focused activities and increased productivity.",
    icon: MdAlarmOff,
    id: 2,
  },
  {
    title: "Decreased Churn",
    bodyText:
      " Insightful's AI lead engagement and renewal tools reduce customer churn by up to 30% through consistent outreach and retention opportunities.",
    icon: LuArrowDownNarrowWide,
    id: 3,
  },
];

export default infoCards;
