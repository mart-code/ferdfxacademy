import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image1 from "../assets/bannerferd.png";
import image2 from "../assets/bannerferd2.png";
const images = [image1, image2];
export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative w-full 2xl:h-[50vh] md:h-screen h-[100vh] overflow-hidden mb-36">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Hero Slide"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>
      {}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl md:text-5xl font-bold 2xl:mt-[10vh] lg:mt-[30vh] mt-[10vh] px-2">
          Master Forex Trading with FerdFX Academy
        </h1>
        <p className="xl:text-base text-sm max-w-2xl mt-4 w-3/4 mx-auto">
          Kickstart your journey from beginner to expert with Ferdinard Okafor,
          a world-class Forex trader. Gain the skills you need with high-quality
          courses designed to guide you every step of the way.
        </p>
        <div className="mt-4 flex justify-between gap-4">
          <a className="btn btn-primary" href="#Community">
            Get Started <ArrowRight className="arrow w-5 h-5" />
          </a>
          <a className="btn btn-outline" href="#mentor">
            Learn More <ArrowRight className="arrow w-5 h-5" />
          </a>
        </div>
      </motion.div>
      {}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60"
      >
        {}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-3 rounded-full text-white hover:bg-black/60"
      >
        {}
      </button>
      {}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
