import { BiSolidDollarCircle } from "react-icons/bi";
import { FaVectorSquare } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Experience top-tier amenities like a private pool, state-of-the-art gym, and a rejuvenating spa for your utmost comfort.",
    icon: <FaVectorSquare />,
    link: "#",
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "We provide high-quality products sourced from trusted brands to ensure a superior experience.",
    icon: <FaPenToSquare />,
    link: "#",
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Enjoy premium services and products at a price that fits your budget, with no compromise on quality.",
    icon: <BiSolidDollarCircle />,
    link: "#",
  },
];

const Services = () => {
  return (
    <div className="container py-20">
      <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
        <h1 className="text-3xl font-bold font-poppins">What We Provide</h1>
        <p className="text-gray-500">
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ServiceCard.map((card) => {
          return (
            <div
              key={card.id}
              className="space-y-4 border-[1px] border-black/30 px-6 py-12 hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] group duration-300"
            >
              <div className="inline-block text-xl border-[1px] border-black rounded-full p-3 group-hover:border-white">
                {card.icon}
              </div>
              <p className="text-2xl font-bold font-poppins">{card.title}</p>
              <p className="text-gray-400 text-xs">{card.description}</p>
              <a
                href={card.link}
                className="inline-block border-b border-black"
              >
                Learn More
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
