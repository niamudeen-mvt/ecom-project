import { useNavigate } from "react-router-dom";
import Rating from "../shared/Rating";
import Skeleton from "../shared/Skeleton";
import { FaImage } from "react-icons/fa6";
import Toast from "../shared/toast/Toast";
import useShowToast from "../../hooks/useShowToast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";

export default function ProductCard({ product, isLoading }) {
  const navigate = useNavigate();
  const { showToast, showToastHandler } = useShowToast();
  const cart = useSelector((state) => state.cart?.data);
  const dispatch = useDispatch();

  const goToProduct = (productId) => {
    if (!productId) return;
    navigate(`/product/${product.id}`);
  };

  const handleCartProduct = (event, product) => {
    event.stopPropagation();
    if (!product) return;

    if (cart && cart.find((item) => item.id === product.id)) {
      return;
    } else {
      dispatch(addToCart(product));
      showToastHandler();
    }
  };
  return (
    <>
      {showToast && (
        <Toast
          type="success"
          message="Proudct added to the cart successfully"
        />
      )}
      <div
        key={product.id}
        className={`bg-white p-8 rounded-xl shadow-lg max-w-[30rem] ${
          isLoading ? "min-h-[34rem]" : "min-h-[38rem]"
        }  w-full mx-auto relative`}
        onClick={() => goToProduct(product.id)}
      >
        {isLoading ? (
          <>
            <Skeleton className="!h-[20rem]">
              <FaImage size={22} className="text-white" />
            </Skeleton>
            <div className="p-8 space-y-8 capitalize absolute left-0 bottom-0 w-full">
              <Skeleton className="w-full" />
              <div className="flexSbs">
                <Skeleton className="w-1/3" />
                <Skeleton className="w-1/3" />
              </div>
            </div>
          </>
        ) : (
          <>
            {/* top section */}
            <img
              src={product.image}
              alt="Product"
              className="h-[20rem] object-contain"
              loading="lazy"
            />
            {/* content section  */}
            <div className="p-8 space-y-8 capitalize absolute left-0 bottom-0 w-full">
              <h3 className="text-2xl">
                {product.title.substring(0, 20)}..more
              </h3>
              <div className="flexSbs">
                <h3 className="text-2xl">${product.price}</h3>
                <span className="text-red-500">
                  <Rating count={product.rating.rate} />
                </span>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="btn capitalize"
                  onClick={(event) => handleCartProduct(event, product)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
