import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/api/products";
import Rating from "../components/shared/Rating";
import Skeleton from "../components/shared/Skeleton";
import { FaImage } from "react-icons/fa6";
import StaticButtons from "../components/StaticButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/features/cartSlice";
import { sendNotification } from "../utils/notifications";

export default function ProuductPage() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});
  const [activeImg, setActiveImg] = useState("");

  const cart = useSelector((state) => state.cart?.data);
  const dispatch = useDispatch();

  const getProductsById = async () => {
    const { data } = await fetchProducts(`/products/${productId}`);

    setProduct(data || {});
    return true;
  };

  const { isLoading: fetchingProduct } = useQuery({
    queryKey: ["products", productId],
    queryFn: getProductsById,
  });

  const handleCartProduct = (product) => {
    if (!product) return;
    if (cart && cart.find((item) => item.id === product.id)) {
      sendNotification("warning", "Proudct already exists in the cart");
      return;
    } else {
      dispatch(addToCart(product));
      sendNotification("success", "Proudct added to the cart successfully");
    }
  };

  return (
    <>
      <section className={`min-h-[60rem] customContainer flexCenter section `}>
        {product && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-80 lg:gap-20 w-full">
            {fetchingProduct ? (
              <Skeleton className="!min-h-[60rem] max-w-[60rem]">
                <FaImage size={34} className="text-white" />
              </Skeleton>
            ) : (
              <div className="max-h-[60rem] h-full max-w-[60rem] bg-gray-100/80 rounded-xl space-y-4">
                <img
                  src={activeImg ? activeImg : product.thumbnail}
                  alt="Product"
                  className="object-contain imgHover"
                />

                {/* images array */}
                <div className="grid grid-cols-4  gap-4">
                  {product?.images?.length &&
                    product.images.map((image) => (
                      <div
                        className="bg-gray-100/80 rounded-xl cursor-pointer"
                        onClick={() => setActiveImg(image)}
                      >
                        <img
                          key={image}
                          src={image}
                          alt="Product"
                          className="h-[10rem] w-[15rem] imgHover object-contain"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}

            <div className="flexCenter !justify-start">
              <div className="space-y-8">
                <h2 className="font-normal text-5xl sm:text-8xl">
                  {fetchingProduct ? (
                    <Skeleton className="w-1/2" />
                  ) : (
                    product.title
                  )}
                </h2>
                {fetchingProduct ? (
                  <Skeleton className="w-1/2" />
                ) : (
                  <span className="text-gray-400 flex gap-2 items-center text-xl">
                    <Rating count={1} />
                    {product.rating?.toFixed(1)}
                  </span>
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
                    `$${Math.floor(product.price)}`
                  )}
                </p>

                {!fetchingProduct && (
                  <button
                    className="btn capitalize !py-5 !px-16 w-full"
                    onClick={() => handleCartProduct(product)}
                  >
                    add to cart
                  </button>
                )}
              </div>
            </div>
          </section>
        )}
      </section>
      <StaticButtons />
    </>
  );
}
