import { useDispatch, useSelector } from "react-redux";
import { _cartTableColumns } from "../../constants";
import { removeCartProduct } from "../../store/features/cartSlice";
import QuantityInput from "../../components/shared/QuantityInput";
import {
  getItemsFromLocalStorage,
  setItemsIntoLocalStorage,
} from "../../utils/helper";
import { MdDeleteOutline } from "react-icons/md";

export default function CartContent() {
  const cart = useSelector((state) => state.cart?.data);
  const dispatch = useDispatch();
  const modifiedCart = cart?.map((product) => {
    return {
      ...product,
      total: parseInt(product.price) * product.quantity,
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

  return (
    <>
      <section className="min-h-screen">
        {modifiedCart && modifiedCart.length > 0 && (
          <div className="relative overflow-x-auto w-full max-h-[70rem]  hide-scrollbar">
            <table className="text-sm text-left rtl:text-right overflow-x-auto max-w-[100%] w-full text-black">
              <thead className="text-sm bg-black text-white uppercase ">
                <tr>
                  {_cartTableColumns.map((column) => {
                    return (
                      <th
                        key={column}
                        scope="col"
                        className="px-6 py-8 w-1/2 capitalize text-base font-normal"
                      >
                        {column}
                      </th>
                    );
                  })}
                </tr>
              </thead>

              <tbody>
                {modifiedCart.map((product) => {
                  return (
                    <>
                      <tr key={product.id}>
                        <td className="px-6 py-4 relative">
                          <div className="w-40 h-40 p-5 ">
                            <img
                              src={product.thumbnail}
                              alt="Product"
                              className="w-full h-full"
                            />
                          </div>
                          <button
                            className="absolute top-5 left-0 btn !w-max p-2"
                            onClick={() => handleDeleteCartProduct(product.id)}
                          >
                            <MdDeleteOutline size={20} />
                          </button>
                        </td>
                        <td className="px-6 text-xl py-8">
                          <div className="space-y-4">
                            <p className="text-black text-xl font-semibold">
                              {product.title}
                            </p>
                            <p className="text-gray-500 text-xl">
                              Price: ${Math.floor(product.price)}
                            </p>
                            <p className="text-black text-2xl">
                              Total Price: $
                              {parseInt(product.price) * parseInt(product.qty)}
                            </p>
                            <QuantityInput
                              prouductId={product.id}
                              qty={product.qty}
                            />
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}
