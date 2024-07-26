import CustomDropdown from "../shared/CustomDropdown";
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
    <div className="relative !max-w-[20rem] w-full">
      <CustomDropdown
        categoryList={categories}
        handleCategoryChange={handleCategoryChange}
        activeCategory={activeCategory}
      />
    </div>
  );
}
