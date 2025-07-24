// import { productsService } from "@/shared/api/supabase/services/products/products-service";
import { Lorem } from "@/shared/ui/lorem";
import { PageContainer } from "@/shared/ui/page-container";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <PageContainer>
      <Lorem count={70} />
    </PageContainer>
  );
}
