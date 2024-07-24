export default function Category({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10">
      {categories.map((category) => (
        <button
          key={category}
          className={`capitalize ${
            activeCategory === category
              ? "btn"
              : "btn bg-gray-100 text-black shadow-none"
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
