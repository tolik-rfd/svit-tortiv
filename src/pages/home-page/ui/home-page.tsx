// import { productsService } from "@/shared/api/supabase/services/products/products-service";
import { Lorem } from "@/shared/ui/lorem";
import { PageContainer } from "@/shared/ui/page-container";
import { SpinnerCircle } from "@/shared/ui/spinner";
import Link from "next/link";

export default async function HomePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <main>
      <PageContainer>
        <Lorem count={70} />
      </PageContainer>
    </main>
  );
}
