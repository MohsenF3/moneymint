import { IconType } from "react-icons";

interface IInfoCardProps {
  title: string;
  desc: string;
  Icon: IconType;
}

export default function InfoCard({ title, desc, Icon }: IInfoCardProps) {
  return (
    <div className="w-full h-80 flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20">
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
      </div>
      <p className="text-sm sm:text-base text-center md:text-left">{desc}</p>
    </div>
  );
}
