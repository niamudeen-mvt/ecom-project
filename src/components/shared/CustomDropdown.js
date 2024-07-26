import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function CustomDropdown({
  categoryList,
  handleCategoryChange,
  activeCategory,
}) {
  const [showDropDown, setShowDropDown] = useState(false);

  const handleActiveCategory = (category) => {
    if (!category) return;
    handleCategoryChange(category);
    setShowDropDown(false);
  };

  return (
    <div className="relative !max-w-[20rem] w-full">
      <button
        className="btn w-full py-3 !px-8 text-lg capitalize text-left flexSbs"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        {activeCategory}
        <MdOutlineKeyboardArrowDown size={18} />
      </button>
      {showDropDown && (
        <ul className="bg-white shadow-lg space-y-5 absolute top-[3.3rem] z-50 capitalize py-4 w-full transition-all duration-300">
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
