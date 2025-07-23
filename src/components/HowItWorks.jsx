// HowItWorks.jsx
import { FaSeedling, FaTools, FaBoxOpen, FaHeart } from "react-icons/fa";

const steps = [
  {
    icon: <FaSeedling size={30} />,
    title: "Fair Sourcing",
    description:
      "We partner directly with cocoa farmers to ensure fair trade and quality beans.",
  },
  {
    icon: <FaTools size={30} />,
    title: "Crafted with Care",
    description:
      "Our artisans turn raw cocoa into rich, delicious chocolate using sustainable methods.",
  },
  {
    icon: <FaBoxOpen size={30} />,
    title: "Eco-Friendly Packaging",
    description:
      "Our chocolates are packed with love and 100% recyclable materials.",
  },
  {
    icon: <FaHeart size={30} />,
    title: "Community Impact",
    description:
      "A part of every purchase goes back to empower farming communities.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HowItWorks() {


  return (
    <section
      className="mt-1 h-[150vh] sm:h-[90vh] md:h-[80vh] w-full px-4 py-16 bg-feastsky rounded-2xl text-feastdarker border-b-10 border-t-10 border-feastblue flex flex-col justify-center gap-20 mb-2"
    >
      <h2
        initial="hidden"
        className="text-3xl sm:text-4xl md:text-5xl font-family-bangers text-center mb-12"
      >
        How It Works 🍫
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-feastyellow rounded-xl p-6 text-center shadow-[0px_0px_80px_0px] shadow-feastdarker hover:scale-105 transition-all duration-300"
            
          >
            <div className="text-feastpurple mb-4">{step.icon}</div>
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-feastdark">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}