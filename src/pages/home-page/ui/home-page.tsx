// import { productsService } from "@/shared/api/supabase/services/products/products-service";
import { InstagramIcon } from "@/shared/assets/icons/instagram-icon";
import { CustomButton } from "@/shared/ui/custom-button";
import { IconButton } from "@/shared/ui/icon-button";
import Link from "next/link";

export default async function HomePage() {
  // const products = await productsService.getProducts();

  return (
    <div className="bg-custom-cofe min-h-screen">
      <h2 className="text-white text-title-sm">Hello World!</h2>
      <CustomButton>Дивитися всі</CustomButton>
      <CustomButton asChild>
        <Link href="/about">Посилання</Link>
      </CustomButton>

      <IconButton variant="solid" asChild>
        <Link href="#">
          <InstagramIcon />
        </Link>
      </IconButton>
      {/* <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {products.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul> */}
    </div>
  );
}
