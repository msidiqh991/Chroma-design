import BannerImage from "../../assets/banner2.png";

const SecondBanner = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 text-center md:text-start md:grid-cols-2  gap-10">
        <div className="space-y-5 flex justify-center flex-col xl:max-w-[500px]">
          <h1 className="text-4xl font-bold font-poppins">
            Simple Way to Make Stylish Living Room
          </h1>
          <p className="text-gray-500 text-sm leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            cupiditate porro deleniti quia numquam est molestias?
          </p>
          <div className="flex gap-4 justify-center md:justify-start items-center">
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-poppins">12</p>
              <p className="text-gray-500 text-sm">Years of Experience</p>
            </div>
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-poppins">350+</p>
              <p className="text-gray-500 text-sm">Satisfied Clients</p>
            </div>
            <div className="max-w-[80px] space-y-2">
              <p className="text-3xl font-bold font-poppins">15</p>
              <p className="text-gray-500 text-sm">Awards Gained</p>
            </div>
          </div>
          <div>
            <button className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]">
              Explore Here
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img
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
