import React from "react";
import ScrollReveal from "./ScrollReveal";

const OurStory = () => {
  return (
    <section className="flex items-center justify-center w-full min-h-screen bg-feastgold border-t-10 border-b-10 border-feastdark rounded-2xl shadow-lg px-6 sm:px-10 py-16 mb-4">
      
      <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center gap-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-family-bangers italic text-feastdarker">
          Our Story
        </h1>

        <div className="flex flex-col gap-8">
          
          <div>
          <ScrollReveal
            classname="text-feastorange text-base sm:text-xl md:text-2xl lg:text-3xl font-family-poppins leading-relaxed"
            baseOpacity={0.8}
            enableBlur={true}
            baseRotation={0}
            blurStrength={10}
          >
            Feastables started with a simple mission — to make snacking fun,
            delicious, and better-for-you. Inspired by our love for bold flavors
            and real ingredients, we partnered with local farmers and ethical
            producers to bring chocolates and snacks that not only taste amazing
            but also support sustainable practices.
            What began as a small batch passion project has now grown into a
            movement to redefine treats for everyone — whether you're at home,
            on-the-go, or sharing with friends. With every bite, you're helping
            us sweeten lives from the ground up.
          </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;