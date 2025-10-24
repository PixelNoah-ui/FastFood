export interface OrderItem {
  _id: string;
  dishId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  subtotal: number;
}

export interface ChapaResponse {
  first_name: string;
  last_name: string | null;
  email: string;
  phone_number: string | null;
  currency: string;
  amount: number;
  charge: number;
  mode: string;
  method: string;
  type: string;
  status: string;
  reference: string;
  tx_ref: string;
  customization: {
    title: string | null;
    description: string | null;
    logo: string | null;
  };
  meta: Record<string, string>;
  created_at: string;
  updated_at: string;
}

export interface OrderResponse {
  _id: string;
  user: string;
  items: OrderItem[];
  amount: number;
  tx_ref: string;
  isPaid: "pending" | "paid" | "failed" | string;
  orderStatus: "preparing" | "delivered" | "cancelled" | string;
  createdAt: string;
  amountPaid?: number;
  chapaResponse?: ChapaResponse;
  paidAt?: string;
  paymentMethod?: string | null;
  transactionId?: string | null;
  __v?: number;
}
