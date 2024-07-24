import Skeleton from "../shared/Skeleton";
import Reviews from "./Reviews";
import { FaImage } from "react-icons/fa6";

export default function Card({ product, isLoading }) {
  return (
    <div
      key={product.id}
      className={`bg-white p-8 rounded-xl shadow-lg max-w-[30rem] ${
        isLoading ? "min-h-[34rem]" : "min-h-[38rem]"
      }  w-full mx-auto relative`}
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
            <h3 className="text-2xl">{product.title.substring(0, 20)}..more</h3>
            <div className="flexSbs">
              <h3 className="text-2xl">${product.price}</h3>
              <span className="text-red-500">
                <Reviews count={product.rating.rate} />
              </span>
            </div>
            <div className="flex justify-center">
              <button className="btn capitalize">Add to cart</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
