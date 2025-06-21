import { ProductList } from "@/entities/product-list";
import products from "@/entities/product-list/products.json";

export default async function HomePage() {
  return (
    <div className="min-h-screen bg-custom-cofe">
      <ProductList products={products} className="pt-10" />
    </div>
  );
}
