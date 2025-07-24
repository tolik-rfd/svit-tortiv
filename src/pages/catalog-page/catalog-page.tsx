import React from "react";

export default async function CatalogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>CatalogPage</div>;
}
