import { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import useWindowSize from "../hooks/useWindowSize";
import { _routes } from "../constants";
import BrandImage from "../assets/images/shopping-bag_3.png";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const windowSize = useWindowSize();

  const toggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    if (windowSize.width > 1280) {
      setIsNavOpen(false);
    }
  }, [windowSize.width]);
  return (
    <header className="w-full flex justify-between items-center py-20">
      <Link to={"/"}>
        <img src={BrandImage} alt="Brand Logo" className="w-16" />
      </Link>
      <nav
        className={
          isNavOpen
            ? "bg-white absolute top-0 left-0 h-full w-full  flex justify-center items-center z-50"
            : "hidden xl:block"
        }
      >
        <ul
          className={
            isNavOpen
              ? "flex flex-col justify-center items-center gap-14 capitalize"
              : "flex justify-between items-center gap-14 capitalize"
          }
        >
          {_routes.map((route) => (
            <li
              key={route.name}
              className={` ${
                route.isButton
                  ? "btn"
                  : "hover:bg-gray-100 py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
              }`}
              onClick={() => setIsNavOpen(false)}
            >
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      {isNavOpen ? (
        <IoCloseOutline className="text-4xl xl:hidden z-50" onClick={toggle} />
      ) : (
        <HiBars3BottomRight className="text-4xl xl:hidden" onClick={toggle} />
      )}
    </header>
  );
}
