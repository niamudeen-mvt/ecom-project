import { IoCartOutline } from "react-icons/io5";
import { GoArrowUp } from "react-icons/go";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setItemsIntoLocalStorage } from "../utils/helper";
import CartSection from "./cart/CartSection";

export default function StaticButtons() {
  const cart = useSelector((state) => state.cart?.data);
  const cartProductCount = cart?.length || 0;
  const [showCart, setShowCart] = useState(false);
  useEffect(() => {
    if (cart?.length > 0) {
      setItemsIntoLocalStorage("cart", cart, true);
    }
  }, [cart, cartProductCount]);

  return (
    <div className="fixed top-[90%] right-[5%] flex items-center gap-4 z-50">
      <button
        onClick={() => {
          setShowCart(!showCart);
        }}
        className="bg-black text-white p-4 rounded-xl shadow-lg relative"
      >
        {cartProductCount > 0 && (
          <span className="absolute -top-4 -right-4 bg-red-500 h-8 w-8 rounded-full flexCenter text-white">
            {cartProductCount}
          </span>
        )}
        <IoCartOutline size={20} />
      </button>
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
      <CartSection show={showCart} setShow={setShowCart} />
    </div>
  );
}
