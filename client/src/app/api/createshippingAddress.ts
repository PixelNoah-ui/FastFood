export interface shippingAddressType {
  fullName: string;
  email?: string;
  phoneNumber: string;
  address: string;
  delveryInstructions?: string;
}
interface responseData {
  _id: string;
  fullName: string;
  email?: string;
  phoneNumber: string;
  address: string;
  delveryInstructions?: string;
}
export const createUSerShippingAddress = async (
  userData: shippingAddressType,
) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/address/}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    },
  );

  if (!response.ok) {
    throw new Error("Something went wrong,please try again");
  }

  const result: responseData = await response.json();
  return result;
};
