import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCartProduct } from "../../store/features/cartSlice";
import QuantityInput from "../../components/shared/QuantityInput";
import {
  getItemsFromLocalStorage,
  setItemsIntoLocalStorage,
} from "../../utils/helper";

export default function CartContent() {
  const cart = useSelector((state) => state.cart?.data);
  const dispatch = useDispatch();

  const modifiedCart = cart?.map((product) => {
    return {
      ...product,
      price: Math.floor(product.price),
      total: Math.floor(product.price) * parseInt(product.qty),
    };
  });

  const handleDeleteCartProduct = (productId) => {
    dispatch(removeCartProduct(productId));

    const cartLC = getItemsFromLocalStorage("cart", true);
    if (cartLC) {
      const newCart = cartLC.filter((item) => item.id !== productId);
      setItemsIntoLocalStorage("cart", newCart, true);
    }
  };

  const SUBTOTAL = modifiedCart.reduce((result, product) => {
    result += product.total;
    return result;
  }, 0);
  return (
    <>
      <section className="min-h-screen">
        {modifiedCart && modifiedCart.length > 0 && (
          <>
            <div className="relative overflow-x-auto w-full max-h-[70rem]  space-y-10">
              {modifiedCart.map((product) => {
                return (
                  <div key={product.id} className="grid grid-cols-3">
                    <div className="w-40 h-40 p-5 bg-gray-100">
                      <img
                        src={product.thumbnail}
                        alt="Product"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="space-y-5 w-full col-span-2">
                      <h2 className="text-black text-xl ">{product.title}</h2>
                      <p className="text-black text-xl font-semibold">
                        ${product.price}
                      </p>
                      <div className="flex justify-between  items-center">
                        <QuantityInput
                          prouductId={product.id}
                          qty={product.qty}
                        />
                        <p
                          className="text-right !text-red-500 font-semibold text-base cursor-pointer"
                          onClick={() => handleDeleteCartProduct(product.id)}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-0 left-10  max-w-[350px] w-full py-10 space-y-4 z-50 bg-white border-t">
              <div className="flex justify-between w-full">
                <h4 className="text-black text-xl font-semibold">Subtotal:</h4>
                <h4 className="text-xl text-black  font-semibold">
                  ${SUBTOTAL}
                </h4>
              </div>
              <p>Shipping and taxes are calculated at checkout</p>

              <button className="btn w-full">Checkout</button>
              <p className="text-center">
                OR
                <Link to="/">
                  <span className="text-xl text-black  font-semibold ml-2">
                    Continue Shopping
                  </span>
                </Link>
              </p>
            </div>
          </>
        )}
      </section>
    </>
  );
}
