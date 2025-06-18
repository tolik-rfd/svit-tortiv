import { Delivery } from "./delivery";
import { ProductWeight } from "./product-weight";
import { Sale } from "./sale";
import { Seller } from "./seller";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  // price?: number;
  currency?: string;
  isFavorite: boolean;
  sale?: Sale;
  seller: Seller;
  weights?: ProductWeight[];
  delivery: Delivery;
}
