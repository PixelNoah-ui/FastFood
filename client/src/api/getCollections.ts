export default async function getCollections() {
  const url = `${process.env.NEXT_PUBLIC_API}/dishes/collections`;
  const response = await fetch(url);

  if (!response.ok) {
    const erroText = await response.json();
    console.log(erroText);
    return [];
  }

  const result = await response.json();
  return result.data as string[];
}
