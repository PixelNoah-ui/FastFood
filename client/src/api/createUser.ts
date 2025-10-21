interface CreateUserParams {
  name: string;
  email: string;
  avatar: string;
}
interface responseData {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  createdDate: string;
}
export async function createUser(userData: CreateUserParams) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }
  const data: responseData = await response.json();

  return data;
}
