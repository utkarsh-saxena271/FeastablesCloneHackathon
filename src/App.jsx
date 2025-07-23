import React, { useEffect } from "react";
import MainRoutes from "./routes/MainRoutes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

// Lenis + GSAP
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Optional: optimize ScrollTrigger behavior
ScrollTrigger.config({
  ignoreMobileResize: true,
  autoRefreshEvents: "DOMContentLoaded,load,visibilitychange",
});

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Slower = smoother scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      smooth: true,
      smoothTouch: false, // Optional: disables smooth on mobile
    });

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Animate Lenis with GSAP ticker
    const raf = (time) => {
      lenis.raf(time * 1000); // Convert GSAP time (s) to Lenis (ms)
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0); // Prevent delay in animation
    ScrollTrigger.refresh(); // Recalculate trigger positions

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-feastoffwhite text-black">
      <CustomCursor color="#ff9900" />
      <Nav />
      <main className="flex-1">
        <MainRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;