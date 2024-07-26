import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartContent from "./Content";
import { IoCloseOutline } from "react-icons/io5";

import EmptyCartImage from "../../assets/images/empty-cart.jpg";

export default function CartSection({ show, setShow }) {
  const cart = useSelector((state) => state.cart?.data);
  const navigate = useNavigate();
  const cartRef = useRef(null);

  const handleGoToShop = () => {
    navigate("/");
    setShow(!show);
  };

  /**
   * Handle clicks outside the cart section
   */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, setShow]);
  return (
    <>
      <section
        className={`fixed top-0 right-0 h-full w-full flex justify-end -z-30 bg-black/50 transition-all duration-300
          ${
            show
              ? "opacity-100 pointer-events-auto visible"
              : "opacity-0 pointer-events-none invisible"
          }
          `}
      >
        {/* Cart Content Goes Here --------- */}
        <div
          ref={cartRef}
          className={`bg-white max-w-[40rem] w-full p-8 sm:p-12 space-y-8 transition-all duration-300
          ${show ? "-translate-x-0" : "translate-x-[100%]"} 
          `}
        >
          <IoCloseOutline
            size={22}
            className="ml-auto cursor-pointer"
            onClick={() => setShow(!show)}
          />

          <div>
            {!cart ||
              (cart?.length === 0 && (
                <div className="flex flex-col items-center gap-10">
                  <img src={EmptyCartImage} alt="" />
                  <h3 className="text-3xl sm:text-5xl font-semibold capitalize">
                    your cart is <span className="text-orange-600">empty</span>
                  </h3>
                  <button className="btn !text-lg" onClick={handleGoToShop}>
                    Continue shopping
                  </button>
                </div>
              ))}
            <CartContent />
          </div>
        </div>
      </section>
    </>
  );
}
