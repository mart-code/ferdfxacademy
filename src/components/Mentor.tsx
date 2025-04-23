import TraderFerd from "../assets/trader-ferd.jpg";
import SlideInSection from "./SlideInSection";
const Mentor = () => {
  return (
    <div
      id="mentor"
      className="flex xl:flex-row flex-col justify-center items-stretch gap-4 w-full px-10 mb-36"
    >
      <div className="xl:basis-[40%]">
        <SlideInSection direction="left">
          <img
            src={TraderFerd}
            className=""
            alt="Ferdinand Okafor - Trader Ferd"
          />
        </SlideInSection>
      </div>
      <div className="xl:basis-[60%] ">
        <SlideInSection direction="right">
          <div className="flex flex-col items-start">
            <p className="uppercase text-[12px] tracking-widest xl:tracking-[10px] py-2 px-2 bg-[#04cc04] text-white mb-5">
              Meet Your Mentor
            </p>
            <h1 className="text-5xl font-semibold my-5">Ferdinand Okafor</h1>
            <p className="font-light leading-7">
            <b className="font-semibold">Trader Ferd</b> is a renowned forex trader, mentor, and founder of Ferd FX Academy. With years of experience in the financial markets, he has developed a unique trading style that emphasizes risk management, technical analysis, and mental preparation. Trader Ferd is passionate about sharing his knowledge and expertise with aspiring traders, helping them navigate the complexities of the forex market and achieve their financial goals. Having mentored over 50 millionaires in the forex market with proofs of testimonials from different students who went from zero to Millionaires, he decided to share this secret with the world.
            </p>
          </div>
        </SlideInSection>
      </div>
    </div>
  );
};
export default Mentor;
