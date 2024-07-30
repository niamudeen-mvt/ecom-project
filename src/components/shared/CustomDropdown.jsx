import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function CustomDropdown({
  categoryList,
  handleCategoryChange,
  activeCategory,
}) {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef = useRef(null);

  const handleActiveCategory = (category) => {
    if (!category) return;
    handleCategoryChange(category);
    setShowDropDown(false);
  };
  /**
   * Handle clicks outside the cart section
   */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };

    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [showDropDown, setShowDropDown]);

  return (
    <div className="relative" ref={dropDownRef}>
      <button
        className="btn w-full !h-full py-3 !px-8 text-lg capitalize text-left flexSbs !bg-gray-100 !text-black !shadow"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        {activeCategory}
        <MdOutlineKeyboardArrowDown size={18} />
      </button>
      {showDropDown && (
        <ul
          className="bg-white shadow-lg space-y-5 absolute top-[3.3rem] z-50 capitalize py-4 w-full transition-all duration-300
        max-h-[40rem] overflow-hidden overflow-y-auto hide-scrollbar
        "
        >
          {categoryList &&
            categoryList.length > 0 &&
            categoryList.map((category) => (
              <li
                key={category}
                value={category}
                className="hover:bg-gray-200 py-3 px-8 cursor-pointer"
                onClick={() => handleActiveCategory(category)}
              >
                {category}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
