import { useRef } from "react";
import { FaUsers, FaLeaf, FaHandsHelping, FaSmile } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <FaUsers size={28} />,
    label: "Farming Families Supported",
    value: "1,200+",
  },
  {
    icon: <FaLeaf size={28} />,
    label: "Sustainable Farms",
    value: "95%",
  },
  {
    icon: <FaHandsHelping size={28} />,
    label: "Revenue Shared",
    value: "35%",
  },
  {
    icon: <FaSmile size={28} />,
    label: "Happy Customers",
    value: "50K+",
  },
];

export default function OurImpact() {
  const headingref = useRef();
  const cardref = useRef([])
  const textRef = useRef();
  useGSAP(() => {
    gsap.from(headingref.current, {
      scrollTrigger: {
        // scroller:"body",
        trigger: headingref.current,
        start: "top 50%",
        end: "top 20%",
        scrub: 1,
        // markers: true,
      },
      opacity: 0,
      letterSpacing: "0.5em",
      duration: 2, 
      ease: "cubic-bezier(0.19, 1, 0.22, 1)"
    });

    gsap.from(cardref.current,{
      scrollTrigger: {
        // scroller:"body",
        trigger: cardref.current,
        start: "top 60%",
        end: "top 40%",
        scrub: 1,
        markers: true,
      },
      opacity: 0,
      letterSpacing: "0.5em",
      stagger:0.2,
      delay:2,
      duration: 2,
      ease: "cubic-bezier(0.19, 1, 0.22, 1)"
    })

  }, []);

  return (
    <section className="w-[full] bg-feastmint text-feastdark py-16 px-6 mt-4 border-feastgreen border-t-10 border-b-10 rounded-2xl">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2
          ref={headingref}
          className="text-3xl sm:text-4xl md:text-5xl font-family-bangers mb-12 text-center"
        >
          Our Impact
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full mb-14">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-feastoffwhite shadow-[0_0_30px_0px] shadow-feastdarker text-center"
              ref={el => (cardref.current[i] = el)}
            >
              <div className="text-feastpurple mb-2">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </div>

        <p ref={textRef} className="max-w-3xl text-center text-lg sm:text-xl text-feastdarker">
          Every chocolate bar you buy helps fund education, improve farming tools, and create sustainable income for cocoa farmers — while keeping it deliciously ethical for you 🍫❤️
        </p>
      </div>
    </section>
  );
}