import { useState } from "react";
import { fetchProducts } from "../../services/api/products";
import { useQuery } from "@tanstack/react-query";
import Category from "./Category";
import ProductCard from "./Card";
import SectionText from "../shared/SectionText";

export default function ProductSection() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("men's clothing");

  const getProductsByCategory = async () => {
    const { data } = await fetchProducts(
      `https://fakestoreapi.com/products/category/${activeCategory}`
    );
    setProducts(data || []);
  };

  const getCategories = async () => {
    const { data } = await fetchProducts(
      "https://fakestoreapi.com/products/categories"
    );
    setCategories(data || []);
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

      <Category
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24  py-14">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isLoading={fetchingProducts}
          />
        ))}
      </div>
    </section>
  );
}
