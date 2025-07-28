import { DeliveryType } from "./delivery";
import { ProductValueType } from "./product-value";
import { SaleType } from "./sale";
import { SellerType } from "./seller";

export interface ProductType {
  id: string;
  name: string;
  imageUrl: string;
  isFavorite: boolean;
  unit: string;
  price: number;
  currency: string;
  available: boolean;
  sale?: SaleType;
  seller: SellerType;
  weights: ProductValueType[] | null;
  amounts: ProductValueType[] | null;
  delivery: DeliveryType;
}
