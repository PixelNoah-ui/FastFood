export async function getUser(email: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${email}`,
  );
  const data = await response.json();
  return data;
}
