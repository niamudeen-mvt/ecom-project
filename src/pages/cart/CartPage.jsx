import React from "react";
import { _cartTableColumns } from "../../constants";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// const QuantityInput = (productId) => {
//   const { count, handleIncrement, handleDecrement } = useCounter();
//   return (
//     <div className="flex gap-4" key={productId}>
//       <button className="btn !py-2 !px-8" onClick={handleDecrement}>
//         -
//       </button>
//       <button>{count}</button>
//       <button className="btn !py-2 !px-8" onClick={handleIncrement}>
//         +
//       </button>
//     </div>
//   );
// };

export default function CartPage() {
  const cart = useSelector((state) => state.cart?.data);

  const modifiedCart = cart?.map((product) => {
    return {
      ...product,
      total: parseInt(product.price) * product.quantity,
    };
  });

  return (
    <>
      <section className="customContainer min-h-screen flexCenter">
        {modifiedCart && modifiedCart.length > 0 && (
          <div className="relative overflow-x-auto w-full max-h-[60rem]  hide-scrollbar">
            <table
              className="text-sm text-left rtl:text-right 0 overflow-x-auto max-w-[100%] w-full text-black
  "
            >
              <thead className="text-sm bg-black text-white  uppercase">
                <tr>
                  {_cartTableColumns.map((column) => {
                    return (
                      <th key={column} scope="col" className="px-6 py-8">
                        {column}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              {/* table content goes here */}

              <tbody>
                {modifiedCart.map((product, index) => {
                  return (
                    <>
                      <tr key={product.id}>
                        <td className="px-6 py-4 text-xl"> {index + 1}</td>
                        <td className="px-6 py-4">
                          <div className="w-40 h-40 p-5">
                            <img
                              src={product.image}
                              alt="Product"
                              className="w-full h-full"
                            />
                          </div>
                        </td>
                        {/* <td className="px-6 py-4 text-xl">
                        <QuantityInput productId={product.id} />
                      </td> */}

                        <td className="px-6 py-4 text-xl">${product.price}</td>
                        <td className="px-6 py-4 text-xl">
                          ${parseInt(product.price) * parseInt(product.qty)}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
            {/* <div className="text-right">
          <button className="btn uppercase">Subtotal</button>
        </div> */}
          </div>
        )}

        {!modifiedCart ||
          (modifiedCart?.length === 0 && (
            <div className="flex flex-col items-center gap-10">
              <IoCartOutline size={100} />
              <h1 className="text-6xl font-semibold capitalize">
                your cart is empty
              </h1>
              <Link to="/">
                <button className="btn capitalize">continue shopping</button>
              </Link>
            </div>
          ))}
      </section>
    </>
  );
}
