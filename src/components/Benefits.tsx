import FXImage from "../assets/FX-App-Mobile-Pair 2.webp";
import SlideInSection from "./SlideInSection";
import { GraduationCap, BookOpen, Users } from "lucide-react";
const Benefits = () => {
  return (
    <div className="flex flex-col w-full min-h-[50vh] px-10 mb-36" id="about">
      <div className="flex flex-col items-start">
        <p className="uppercase text-[12px] tracking-widest xl:tracking-[10px] p-2 bg-[#04cc04] text-center text-white mb-5">
          Our plans for you
        </p>
        <h2 className="text-5xl text-left font-bold">Why Choose Us?</h2>
      </div>
      <div className="flex w-full xl:flex-row flex-col gap-12">
        <div className="flex flex-col xl:w-1/2 gap-10 mt-5">
          <SlideInSection direction="left">
            <div className="flex justify-start gap-2 items-start">
              <GraduationCap size={50} className="basis-1/8" />
              <div className="flex flex-col gap-1 basis-7/8">
                <h2 className="font-semibold text-xl">
                  Choosing the Right Forex Academy
                </h2>
                <p className="font-light">
                  As an aspiring trader, selecting the right academy is
                  essential to your success. A well-structured learning path
                  ensures you build a strong foundation in Forex trading.
                </p>
              </div>
            </div>
          </SlideInSection>

          <SlideInSection direction="left">
            <div className="flex justify-start gap-2 items-start">
              <BookOpen size={50} className="basis-1/8" />
              <div className="flex flex-col gap-1 basis-7/8">
                <h2 className="font-semibold text-xl">
                  Comprehensive Training & Mentorship
                </h2>
                <p className="font-light">
                  Ferd FX Academy provides top-tier training programs,
                  personalized mentorship, and expert guidance from Trader Ferd
                  and other successful mentors to accelerate your growth.
                </p>
              </div>
            </div>
          </SlideInSection>

          <SlideInSection direction="left">
            <div className="flex justify-start gap-2 items-start">
              <Users size={50} className="basis-1/8" />
              <div className="flex flex-col gap-1 basis-7/8">
                <h2 className="font-semibold text-xl">
                  A Thriving Trader Community
                </h2>
                <p className="font-light">
                  Join a community of like-minded traders, where you can
                  exchange insights, discuss strategies, and navigate the Forex
                  market with ease.
                </p>
              </div>
            </div>
          </SlideInSection>
        </div>

        <div className="xl:w-1/2">
          <SlideInSection direction="right">
            <img src={FXImage} alt="" className="w-full" />
          </SlideInSection>
        </div>
      </div>
    </div>
  );
};
export default Benefits;
