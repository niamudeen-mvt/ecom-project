import ScrollButtonImage from "../assets/images/scroll.png";
import { IoCartOutline } from "react-icons/io5";

export default function StaticButtons() {
  return (
    <div className="fixed top-[90%] right-[5%] flex items-center gap-4">
      <button className="bg-black text-white p-4 rounded-xl shadow-lg">
        <IoCartOutline size={20} />
      </button>
      <button className="h-16 w-16">
        <img src={ScrollButtonImage} alt="Scroll Button" />
      </button>
    </div>
  );
}
