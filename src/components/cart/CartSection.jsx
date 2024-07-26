import { IoCartOutline, IoCloseOutline } from "react-icons/io5";
import CartPage from "../../pages/cart/CartPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CartSection({ show, setShow }) {
  const cart = useSelector((state) => state.cart?.data);
  const navigate = useNavigate();

  const handleGoToShop = () => {
    navigate("/");
    setShow(!show);
  };
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
        <div
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
                  <IoCartOutline size={100} />
                  <h1 className="text-4xl font-semibold capitalize">
                    your cart is empty
                  </h1>
                  <button className="btn" onClick={handleGoToShop}>
                    Continue shopping
                  </button>
                </div>
              ))}
            <CartPage />
          </div>
        </div>
      </section>
    </>
  );
}
