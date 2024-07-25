import { IoCartOutline } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function StaticButtons() {
  const cart = useSelector((state) => state.cart?.data?.length);

  return (
    <div className="fixed top-[90%] right-[5%] flex items-center gap-4 z-50">
      <Link to="/cart">
        <button className="bg-black text-white p-4 rounded-xl shadow-lg relative">
          {cart > 0 && (
            <span className="absolute -top-4 -right-4 bg-red-500 h-8 w-8 rounded-full flexCenter text-white">
              {cart}
            </span>
          )}
          <IoCartOutline size={20} />
        </button>
      </Link>
      <button
        className="roundBtn shadow-lg flexCenter "
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <GoArrowUp size={18} />
      </button>
    </div>
  );
}
