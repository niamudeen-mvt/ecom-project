import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../services/api/products";
import { useQuery } from "@tanstack/react-query";
import Rating from "../components/shared/Rating";
import Skeleton from "../components/shared/Skeleton";
import { FaImage } from "react-icons/fa6";
import { addToCart } from "../utils/cart";
import useShowToast from "../hooks/useShowToast";
import Toast from "../components/shared/toast/Toast";

export default function ProuductPage() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const { showToast, showToastHandler } = useShowToast();
  const getProductsById = async () => {
    const { data } = await fetchProducts(
      `https://fakestoreapi.com/products/${productId}`
    );
    setProduct(data || {});
    return true;
  };

  const { isLoading: fetchingProduct } = useQuery({
    queryKey: ["products", productId],
    queryFn: getProductsById,
  });

  return (
    <>
      {showToast && (
        <Toast
          type="success"
          message="Proudct added to the cart successfully"
        />
      )}
      <section className="min-h-screen customContainer flexCenter">
        {product && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-full">
            {/* product image */}

            {fetchingProduct ? (
              <Skeleton className="!min-h-[60rem] max-w-[60rem]">
                <FaImage size={34} className="text-white" />
              </Skeleton>
            ) : (
              <div className="max-h-[60rem] max-w-[60rem]">
                <img
                  src={product.image}
                  alt="Product"
                  className="object-contain"
                />
              </div>
            )}

            {/* product details */}
            <div className="space-y-8">
              <h1 className="text-6xl font-normal">
                {fetchingProduct ? (
                  <Skeleton className="w-1/2" />
                ) : (
                  product.title
                )}
              </h1>
              {fetchingProduct ? (
                <Skeleton className="w-1/2" />
              ) : (
                <Rating count={product.rating?.rate} />
              )}

              <p>
                {fetchingProduct ? (
                  <Skeleton className="w-1/2" />
                ) : (
                  product.description
                )}
              </p>
              <p className="text-3xl !text-black font-semibold">
                {fetchingProduct ? (
                  <Skeleton className="w-1/2" />
                ) : (
                  `$${product.price}`
                )}
              </p>
              {!fetchingProduct && (
                <button
                  className="btn capitalize !py-5 !px-16"
                  onClick={() => {
                    if (!product) return;
                    const status = addToCart(product);

                    if (status === "ADDED") {
                      showToastHandler();
                    }
                  }}
                >
                  add to cart
                </button>
              )}
            </div>
          </section>
        )}
      </section>
    </>
  );
}
