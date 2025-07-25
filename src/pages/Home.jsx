import React from "react";
import ScrollVelocity from "../components/ScrollVelocity";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OurImpact from "../components/OurImpact";
import TaglineScroller from "../components/TaglineScroller";




const Home = () => {
  return (
    <div className="pt-22">
      <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-feastoffwhite text-black px-2  overflow-x-hidden">
        <Hero />
        <ScrollVelocity
          texts={["On a mission to sweeten lives — from farmers to your table"]}
          velocity={100}
          className="text-6xl font-family-bangers tracking-widest font-thin bg-feastmint text-feastorange border-t-5 border-b-5 border-feastorange sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
        />
        <HowItWorks />
      </div>
       <TaglineScroller/> 
       <div className="flex flex-col justify-center min-h-screen w-screen bg-feastoffwhite text-black px-2  overflow-x-hidden">
      <OurImpact />
      
      </div>

    </div>
  );
};

export default Home;
