import Content from "./Content";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <section className="bg-hero w-full bg-center bg-cover bg-no-repeat h-fit bg-blue-100 font-poppins lg:h-screen">
      <div className="container mx-auto px-4 h-fit lg:h-full lg:relative  xl:max-w-[1280px]">
        <Navigation />
        {/* Hero Text */}
        <Content />
      </div>
    </section>
  );
};
export default Hero;
