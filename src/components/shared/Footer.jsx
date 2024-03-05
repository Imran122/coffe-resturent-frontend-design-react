import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/images/bg/unlocklive.png";

export default function Footer() {
  return (
    <div className="w-full footer-bg bg-no-repeat ">
      <div className="container mx-auto md:grid md:grid-cols-9 gap-4 md:py-4 py-6 px-2">
        <div className="col-span-3 md:mt-0 mt-4">
          <img src={logo} />
        </div>
        <div className="col-span-3 flex gap-4 md:mt-0 mt-4">
          <h2 className="text-white">Terms</h2>
          <h2 className="text-white">Privacy</h2>
          <h2 className="text-white">Cookies</h2>
        </div>
        <div className="col-span-3 flex gap-4 md:mt-0 mt-4">
          <span className="w-12 h-12 border border-gray-400 rounded-full p-2 flex justify-center items-center">
            <FaLinkedin className="text-2xl text-white" />
          </span>
          <span className="w-12 h-12 border border-gray-400 rounded-full p-2 flex justify-center items-center">
            <FaFacebook className="text-2xl text-white" />
          </span>
          <span className="w-12 h-12 border border-gray-400 rounded-full p-2 flex justify-center items-center">
            <FaLinkedin className="text-2xl text-white" />
          </span>
        </div>
      </div>
    </div>
  );
}
