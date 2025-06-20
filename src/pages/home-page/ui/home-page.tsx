// import { productsService } from "@/shared/api/supabase/services/products/products-service";
import { InstagramIcon } from "@/shared/assets/icons/instagram-icon";
import { ProductList } from "@/entities/product-list";
import { CustomButton } from "@/shared/ui/custom-button";
import { IconButton } from "@/shared/ui/icon-button";
import Link from "next/link";
import products from "@/entities/product-list/products.json";

export default async function HomePage() {
  // const products = await productsService.getProducts();

  return (
    <div className="min-h-screen bg-custom-cofe">
      <h2 className="text-title-sm text-white">Hello World!</h2>
      <CustomButton>Дивитися всі</CustomButton>
      <CustomButton asChild>
        <Link href="/about">Посилання</Link>
      </CustomButton>
      <IconButton variant="solid" asChild>
        <Link href="#">
          <InstagramIcon />
        </Link>
      </IconButton>
      <ProductList products={products} className="mt-7" />
      {/* <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {products.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul> */}
    </div>
  );
}
