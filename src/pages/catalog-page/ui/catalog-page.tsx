import React from "react";
import { CatalogList } from "./catalog-list/catalog-list";
import products from "./catalog-list/products.json";
import { PageContainer } from "@/shared/ui/page-container";

export default function CatalogPage() {
  return (
    <main>
      <PageContainer>
        <CatalogList products={products} className="pt-10" />
      </PageContainer>
    </main>
  );
}
