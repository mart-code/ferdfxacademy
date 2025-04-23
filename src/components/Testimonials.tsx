import { motion } from "framer-motion";

const Testimonials = () => {
  const localVideos = [
    "/videos/testimonial1.mp4",
    "/videos/testimonial2.mp4",
    "/videos/testimonial3.mp4",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8 px-6 py-12 mb-35">
      <p className="uppercase text-[12px] tracking-widest xl:tracking-[10px] p-2 bg-[#04cc04] text-white">
        Our Results
      </p>
      <h2 className="text-5xl font-semibold text-center overflow-hidden">
        We are Tested and Trusted by Many
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {localVideos.map((src, index) => (
          <motion.div
            key={index}
            className="relative w-full pt-[177.77%] rounded-2xl overflow-hidden shadow-xl bg-black" // 9:16 = 177.77%
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <video
              src={src}
              controls
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
