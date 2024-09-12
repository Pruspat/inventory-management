export interface CreateOrderType {
  customerId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}

export interface CreateProductType {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface RestockProductType {
  id: string;
  quantity: number;
}

export interface SellProductType {
  id: string;
  quantity: number;
}
