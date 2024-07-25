import { useEffect, useState } from "react";
import BrandImage from "../../assets/images/shopping-bag_3.png";
export default function Loader() {
  const [show, setshow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 2 * 1000);
  }, []);
  return (
    <>
      {show && (
        <section className="fixed inset-0 flexCenter bg-white  z-50">
          <div className="space-y-6">
            <img src={BrandImage} alt="Brand Logo" className="w-16" />
            <div className="flex space-x-2 customLoader">
              <div className="rounded-full p-2 bg-purple-600 animate-bounce"></div>
              <div className="rounded-full p-2 bg-red-500 animate-bounce"></div>
              <div className="rounded-full p-2  animate-bounce bg-green-500"></div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
