import { motion } from "framer-motion";
import BannerImage from "../../assets/banner.png";
import { SlideUp } from "../../animation/animate";

const Banner = () => {
  return (
    <div id="project" className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={BannerImage}
            alt="Banner Side"
            className="w-[95%] md:w-full mx-auto"
          />
        </div>

        <div className="space-y-5 flex justify-center text-center md:text-start flex-col xl:max-w-[500px]">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-poppins"
          >
            We Believe that a Team Makes any Project Better
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-7"
          >
            We are a team of passionate individuals who are dedicated to
            delivering high-quality projects that exceed our clients
          </motion.p>
          <div>
            <motion.button
              variants={SlideUp(0.6)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Discover Now
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
