import { motion } from "framer-motion";
import { SlideUp, SlideLeft } from "../../animation/animate";

const TestimonialData = [
  {
    id: 1,
    name: "Anna",
    designation: "Lead Developer",
    img: "https://i.pravatar.cc/300?img=1",
    date: "January, 2024",
    delay: 0.2,
    text: "Anna's expertise in development is unmatched. She brings innovative ideas and meticulous attention to every project.",
  },
  {
    id: 2,
    name: "Joenathan",
    designation: "Designer",
    img: "https://i.pravatar.cc/300?img=2",
    date: "August, 2024",
    delay: 0.4,
    text: "Joenathan's design skills have transformed our brand's visual identity, making it more appealing, representative and user-friendly.",
  },
  {
    id: 3,
    name: "Alexander",
    designation: "Project Manager",
    img: "https://i.pravatar.cc/300?img=3",
    date: "October, 2024",
    delay: 0.6,
    text: "Alexander's leadership has been a key driver of our project's success, ensuring timely delivery and outstanding results.",
  },
];

const Testimonial = () => {
  return (
    <div className="container py-14">
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-poppins"
        >
          Words from our Customer
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </motion.p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        {TestimonialData.map((item) => {
          return (
            <motion.div
              key={item.id}
              variants={SlideLeft(item.delay)}
              initial="initial"
              whileInView="animate"
              className="rounded-md bg-gray-100 p-5 hover:bg-slate-800 group duration-300 hover:shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              <div className="flex flex-row items-center gap-5">
                <img
                  src={item.img}
                  alt="Image Testimonial"
                  className="w-[50px] rounded-full border-[2px] border-gray-400 group-hover:border-white"
                />
                <div>
                  <p className="text-sm font-bold text-slate-800 font-poppins group-hover:text-white">
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-xs italic group-hover:text-gray-300">
                    {item.designation}
                  </p>
                  <div className="text-xs mt-2">⭐⭐⭐⭐⭐</div>
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm text-slate-800 text-justify font-poppins group-hover:text-white duration-300 mb-2">
                  <q>{item.text}</q>
                </p>
                <span className="text-sm  text-gray-600 font-semibold block mt-4 group-hover:text-white">
                  {item.date}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonial;
