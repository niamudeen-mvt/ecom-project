import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../services/api/products";
import Category from "./Category";
import ProductCard from "./Card";
import SectionText from "../shared/SectionText";
import UnavailableContent from "../shared/UnavailableContent";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("mens-shirts");

  const getProductsByCategory = async () => {
    const {
      data: { products },
    } = await fetchProducts(`/products/category/${activeCategory}`);
    setProducts(products || []);
    return true;
  };

  const getCategories = async () => {
    const { data } = await fetchProducts("/products/category-list");
    setCategories(data || []);
    return data;
  };

  const { isLoading: fetchingProducts } = useQuery({
    queryKey: ["products", activeCategory],
    queryFn: getProductsByCategory,
  });

  useQuery({
    queryKey: ["products_categories"],
    queryFn: getCategories,
  });

  return (
    <>
      <section className="section customContainer space-y-10" id="newArrivals">
        {/* top section */}

        <div className="flexCenter">
          <SectionText
            title="New Arrivals"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem."
            textDirection="CENTER"
          />
        </div>

        {/* category section */}
        <div className="flex justify-center sm:justify-end">
          <Category
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* products section */}
        {products && products?.length ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24  py-14
          bg-gray-50/70
          "
          >
            {products.map((product) => (
              <ProductCard product={product} isLoading={fetchingProducts} />
            ))}
          </div>
        ) : (
          <UnavailableContent content="Products are currently unavailable" />
        )}
      </section>
    </>
  );
}
