export default function Category({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  const handleCategoryChange = (category) => {
    if (!category) return;
    setActiveCategory(category);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10">
      {categories &&
        categories.length > 0 &&
        categories.map((category) => (
          <button
            key={category}
            className={`capitalize !text-lg ${
              activeCategory === category
                ? "btn"
                : "btn bg-gray-100 text-black shadow-none"
            }`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
    </div>
  );
}
