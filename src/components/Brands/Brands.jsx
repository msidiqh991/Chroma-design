import Brand1 from "../../assets/brand/brand1.png";
import Brand2 from "../../assets/brand/brand2.png";
import Brand3 from "../../assets/brand/brand3.png";
import Brand4 from "../../assets/brand/brand4.png";
import Brand5 from "../../assets/brand/brand5.png";

const Brands = () => {
  return (
    <div className="container py-20">
      <div className="flex flex-wrap justify-center lg:justify-between gap-4">
        <img
          src={Brand1}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
        <img
          src={Brand2}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
        <img
          src={Brand3}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
        <img
          src={Brand4}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
        <img
          src={Brand5}
          alt="Brand Image"
          className="w-[110px] md:w-[200px] grayscale hover:grayscale-0 duration-300"
        />
      </div>
    </div>
  );
};

export default Brands;
