import BannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="container py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <img
            src={BannerImage}
            alt="Banner Side"
            className="w-[95%] md:w-full mx-auto"
          />
        </div>
        <div className="space-y-5 flex justify-center text-center md:text-start flex-col xl:max-w-[500px]">
          <h1 className="text-4xl font-bold font-poppins">
            We Believe that a Team Makes any Project Better
          </h1>
          <p className="text-gray-500 text-sm leading-7">
            We are a team of passionate individuals who are dedicated to
            delivering high-quality projects that exceed our clients
          </p>
          <div>
            <button className="primary-btn bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]">
              Discover Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
