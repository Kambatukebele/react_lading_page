import { Card } from "./Card";
import cardData from "../../../cardData";
export const SectionCard = () => {
  return (
    <section className="w-full h-fit mb-10 font-poppins">
      <div className="container mx-auto px-4 md:grid md:gap-4 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 xl:max-w-[1280px]">
        {cardData.map((data) => {
          return <Card {...data} key={data.id} />;
        })}
      </div>
    </section>
  );
};
