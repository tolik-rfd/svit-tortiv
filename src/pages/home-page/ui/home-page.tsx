import { productsService } from "@/shared/api/supabase/services/products/products-service";
import { CustomButton } from "@/shared/ui/CustomButton";
import { Button } from "@/shared/ui/shadcn-button-example/button";

export default async function HomePage() {
  // const products = await productsService.getProducts();

  return (
    <div className="bg-custom-cofe min-h-screen">
      <h2 className="text-white text-title-sm">Hello World!</h2>
      <CustomButton variant="orange">додати в кошик</CustomButton>
      {/* <ul className="list-disc pl-5 space-y-2 text-gray-700">
        {products.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul> */}
      <Button variant="destructive">I am button</Button>
    </div>
  );
}
