export async function getUser(email: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${email}`,
  );
  const result = await response.json();
  return result.data;
}
