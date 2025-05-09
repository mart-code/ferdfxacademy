import Logo from "../assets/ferdfx logo transparent.png";
import Modal from "./Modal";
import RiskCalculator from "./RiskCalculator";
import { useState } from "react";
import { MenuIcon } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-between items-center z-100 text-black py-2 px-10 bg-white fixed top-0 w-full max-w-[1500px] mx-auto min-h-20">
      <a href="#" className="w-30 flex justify-start">
        <img
          src={Logo}
          className=" hover:opacity-80 transition-all w-full object-fill block"
        />
      </a>
      <ul className="hidden xl:flex items-center gap-8 text-base h-full">
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <RiskCalculator />
        </Modal>
        <li className="p-3 hover:bg-green-600 hover:text-white rounded-md transition-all">
          <a href="#about" className="block">
            About
          </a>
        </li>
        <li className="p-3 hover:bg-green-600 hover:text-white rounded-md transition-all">
          <a href="#mentor">Mentorship</a>
        </li>
        <li className="p-3 hover:bg-green-600 hover:text-white rounded-md transition-all">
          <a href="#resources">Resources</a>
        </li>
        <li className="p-3 hover:bg-green-600 hover:text-white rounded-md transition-all">
          <a
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Risk Calculator
          </a>
        </li>
        <li className="p-3 hover:bg-green-600 hover:text-white rounded-md transition-all">
          <a href="#support">Support</a>
        </li>
      </ul>
      <MenuIcon
        className="xl:hidden block size-8 cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div
        className={`absolute xl:hidden top-20 left-0 h-screen w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${
          isMenuOpen ? "opacity-100 block" : "opacity-0 hidden"
        } `}
        style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
      >
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <RiskCalculator />
        </Modal>
        <li className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer">
          <a href="#about" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            About
          </a>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer">
          <a href="#mentor" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Mentorship
          </a>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer">
          <a href="#resources" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Resources
          </a>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer">
          <a
            className="cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              setIsModalOpen(true);
            }}
          >
            Risk Calculator
          </a>
        </li>
        <li className="list-none w-full text-center p-4 hover:bg-green-600 hover:text-white transition-all cursor-pointer">
          <a href="#support" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Support
          </a>
        </li>
      </div>
    </div>
  );
};
export default Navbar;
