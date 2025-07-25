import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import Hero from "./components/Hero";
import ScrollVelocity from "./components/ScrollVelocity";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TaglineScroller from "./components/TaglineScroller";
import OurStory from "./components/OurStory";
import OurProducts from "./components/OurProducts";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger configuration
ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: "DOMContentLoaded,load,visibilitychange",
});

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-screen bg-feastrose text-black">
      <CustomCursor color="#ff9900" />
      <Nav />

      <section id="hero">
        <Hero />
      </section>

      <div>
        <TaglineScroller />
      </div>

      <section id="ourstory">
        <OurStory />
      </section>

      <section className="py-1 bg-feastmint border-y-8 rounded-2xl border-feastorange overflow-hidden">
  <ScrollVelocity
    texts={[
      "Dive into the Feast",
      "Scroll to discover our boldest flavors yet"
    ]}
    velocity={100}
    className="text-5xl sm:text-6xl md:text-7xl font-bold text-feastorange uppercase tracking-wider whitespace-nowrap py-2"
  />
</section>

      <section id="products">
        <OurProducts />
      </section>

      <Footer />
    </div>
  );
};

export default App;