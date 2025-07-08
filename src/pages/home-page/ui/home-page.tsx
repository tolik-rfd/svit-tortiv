// import { productsService } from "@/shared/api/supabase/services/products/products-service";
import { InstagramIcon } from "@/shared/assets/icons/instagram-icon";
import { CustomButton } from "@/shared/ui/custom-button";
import { IconButton } from "@/shared/ui/icon-button";
import { Lorem } from "@/shared/ui/lorem";
import { PageContainer } from "@/shared/ui/page-container";
import Link from "next/link";

export default async function HomePage() {
  return (
    <main>
      <PageContainer>
        <Lorem count={70} />
      </PageContainer>
    </main>
  );
}
