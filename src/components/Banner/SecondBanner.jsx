import { motion } from "framer-motion";
import BannerImage from "../../assets/banner2.png";
import { SlideUp } from "../../animation/animate";

const StatisticItem = ({ value, label }) => (
  <div className="max-w-[80px] space-y-2">
    <p className="text-3xl font-bold font-poppins">{value}</p>
    <p className="text-gray-500 text-sm">{label}</p>
  </div>
);

const SecondBanner = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 text-center md:text-start md:grid-cols-2  gap-10">
        <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-4xl font-bold font-poppins"
          >
            Simple Way to Make Stylish Living Room
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm leading-7"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            cupiditate porro deleniti quia numquam est molestias?
          </motion.p>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="flex gap-4 justify-center md:justify-start items-center"
          >
            <StatisticItem value="12+" label="Years of Experience" />
            <StatisticItem value="300+" label="Satisfied Clients" />
            <StatisticItem value="15" label="Awards Gained" />
          </motion.div>
          <div>
            <motion.button
              variants={SlideUp(0.8)}
              initial="initial"
              whileInView="animate"
              className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Explore Here
            </motion.button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            src={BannerImage}
            alt="Banner Side"
            className="w-[95%] md:w-full mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
