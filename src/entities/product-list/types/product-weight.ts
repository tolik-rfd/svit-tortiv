export interface ProductWeight {
  id: string;
  value: number;
  unit: string;
  price: number;
  currency: string; // e.g. "₴"
  available: boolean;
}
