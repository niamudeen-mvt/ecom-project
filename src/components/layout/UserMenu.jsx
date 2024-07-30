import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function UserMenu() {
  const [show, setShow] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, setShow]);

  return (
    <div className="">
      <button
        id="dropdownUserAvatarButton"
        data-dropdown-toggle="dropdownAvatar"
        className="flex text-sm bg-gray-800 rounded-full md:me-0 "
        type="button"
        onClick={() => setShow(!show)}
      >
        <span className="sr-only">Open user menu</span>
        <span className="w-14 h-14 rounded-full bg-black text-white flexCenter text-xl">
          N
        </span>
      </button>

      {show && (
        <div
          ref={userMenuRef}
          id="dropdownAvatar"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44  absolute top-28 right-10 text-lg text-gray-900"
        >
          <div className="px-4 py-3">
            <p className="text-gray-900">Bonnie Green</p>
          </div>
          <ul
            className="py-2 text-lg text-gray-700 "
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <p className="text-gray-900">Dashboard</p>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <p className="text-gray-900">Settings</p>
              </Link>
            </li>
          </ul>
          <div className="py-2">
            <button className="block px-4 py-2 !text-lg">Sign out</button>
          </div>
        </div>
      )}
    </div>
  );
}
