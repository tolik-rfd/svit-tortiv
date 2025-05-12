import { httpSupabaseRestApi } from "../../http/http-supabase-rest-api";
import { ProductsPaths } from "./products-paths";

// Placed there just for test
interface Product {
  id: string;
  title: string;
  price: number;
}

class Products {
  public getProducts = async () => {
    const res = await httpSupabaseRestApi.get<Product[]>(
      ProductsPaths.PRODUCTS,
      {
        cache: "force-cache",
      }
    );

    const products = await res.json();

    return products;
  };
}

export const productsService = new Products();
