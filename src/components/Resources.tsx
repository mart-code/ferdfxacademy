import MillionDollarsDream from "../assets/the-million-dollars-dream.png";
const Resources = () => {
  return (
    <div
      id="resources"
      className="flex xl:flex-row flex-col-reverse justify-center align-center bg-gray-100 p-20 mb-35"
    >
      <div className="flex flex-col items-start justify-center basis-1/2">
        <p className="uppercase tracking-[10px]">Gain Financial Freedom</p>
        <h2 className="my-5 text-5xl font-semibold">
          The Million Dollars Dream
        </h2>
        <p className="leading-7 mb-5">
          The Million Dollars Dream by Okafor Ferdinand is a thought-provoking
          guide to achieving financial freedom. With inspiring stories,
          practical advice, and valuable insights, this book shows readers how
          to turn their financial dreams into reality. Ferdinand shares his own
          experiences, successes, and setbacks, offering a unique perspective on
          overcoming obstacles and staying focused on one's goals. A must-read
          for anyone looking to transform their financial life.
        </p>
        <a
          href="https://selar.com/m/ferdinand-okafor955801"
          target="_blank"
          className="btn btn-primary"
        >
          Get your Copy
        </a>
      </div>
      <img src={MillionDollarsDream} alt="" className="xl:basis-1/2 xl:w-1/2" />
    </div>
  );
};
export default Resources;
