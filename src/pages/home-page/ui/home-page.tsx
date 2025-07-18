import { Lorem } from "@/shared/ui/lorem";
import { PageContainer } from "@/shared/ui/page-container";
import { ProductList } from "@/entities/product-list";
import products from "@/entities/product-list/products.json";
import { Button } from "@/shared/ui/button";
export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main>
      <PageContainer>
        <ProductList products={products} className="pt-10" />
        <Lorem count={70} />
      </PageContainer>
    </main>
  );
}
