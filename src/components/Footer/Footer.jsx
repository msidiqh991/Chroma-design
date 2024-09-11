import { motion } from "framer-motion";
import Logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { SlideLeft } from "../../animation/animate";

const Footer = () => {
  return (
    <motion.footer
      variants={SlideLeft(0.2)}
      initial="initial"
      whileInView="animate"
    >
      <div className="container py-11">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 font-semibold">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="" className="w-6 justify-center" />
              <p className="text-xl font-semibold">Chroma</p>
            </div>
            <p>Old Kebayoran, South Jakarta, Indonesia</p>
            <p>@ 2024 Muhammad Sidiq H. All rights reserved</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-4">
              <h1 className="text-xl font-semibold">About us</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">Our Story</a>
                </li>
                <li>
                  <a href="#">Designer</a>
                </li>
                <li>
                  <a href="#">Craftmanship</a>
                </li>
                <li>
                  <a href="#">Sustainability</a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h1 className="text-xl font-semibold">Support</h1>
              <ul className="text-sm space-y-4">
                <li>
                  <a href="#">FAQ`s</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Care Guide</a>
                </li>
                <li>
                  <a href="#">Guaranty</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl font-semibold">Contact us</h1>
            <ul className="text-base font-semibold space-y-4">
              <li className="flex items-center space-x-3 italic">
                <FaPhone />
                <a href="#">+62-888-1234-5678</a>
              </li>
              <li className="flex items-center space-x-3 italic">
                <LuMessageSquare />
                <a href="#">oursample@company.com</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-sm font-semibold  border-t-2 pt-5 mt-10">
          Copyright &copy; 2024 Muhammad Sidiq Hardiansyah All rights reserved
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
