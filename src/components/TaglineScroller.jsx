import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

export default function TaglineScroller() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
      gsap.to(textRef.current, {
        xPercent: -88,
        scrollTrigger: {
          scroller: "body",
          trigger: containerRef.current,
          start: "top 0%",
          end: "+=3000", // Controls how long the scroll effect is
          scrub: 3,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
      });


    
  });
  
  return (
    <div
      ref={containerRef}
      className="cursor-hover-target relative w-full h-[100vh] overflow-hidden bg-feastdarker flex items-center px-10 border-t-10 border-b-10 border-feastyellow my-5"
      data-cursor-size="60"
    >
      <h1
        ref={textRef}
        className="whitespace-nowrap text-[40vw] font-medium uppercase italic text-feastyellow font-family-poppins"
      >
        Bite-Sized Bliss, Full-Sized Flavor.
      </h1>
    </div>
  );
}