import { IconCard } from "./IconCard";
import { TitleCard } from "./TitleCard";
import { DescriptionCard } from "./DescriptionCard";
export const Card = (data) => {
  const { icon, title, description } = data;
  return (
    <div className="flex flex-col justify-center items-center shadow-xl py-5 px-4 h-fit rounded-2xl w-full sm:max-w-[600px] mx-auto md:h-[280px]">
      <IconCard icon={icon} title={title} />
      <TitleCard title={title} />
      <DescriptionCard description={description} />
    </div>
  );
};
