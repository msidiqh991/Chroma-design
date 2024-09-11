import { motion } from "framer-motion";
import Brand1 from "../../assets/brand/brand1.png";
import Brand2 from "../../assets/brand/brand2.png";
import Brand3 from "../../assets/brand/brand3.png";
import Brand4 from "../../assets/brand/brand4.png";
import Brand5 from "../../assets/brand/brand5.png";
import { SlideLeft } from "../../animation/animate";

const Brands = () => {
  return (
    <div className="container py-20">
      <div className="flex flex-wrap justify-center lg:justify-between gap-4">
        <motion.img
        variants={SlideLeft(0.2)}
        initial="initial"
        whileInView={"animate"}
          src={Brand1}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
        <motion.img
        variants={SlideLeft(0.4)}
        initial="initial"
        whileInView={"animate"}
          src={Brand2}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
        <motion.img
        variants={SlideLeft(0.6)}
        initial="initial"
        whileInView={"animate"}
          src={Brand3}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
        <motion.img
        variants={SlideLeft(0.8)}
        initial="initial"
        whileInView={"animate"}
          src={Brand4}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
        <motion.img
        variants={SlideLeft(1.0)}
        initial="initial"
        whileInView={"animate"}
          src={Brand5}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
      </div>
    </div>
  );
};

export default Brands;
