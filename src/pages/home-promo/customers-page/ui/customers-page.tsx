import React from "react";

export default async function CustomersPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <h1>Customers Page</h1>
      <p>This is the customers page.</p>
    </>
  );
}
