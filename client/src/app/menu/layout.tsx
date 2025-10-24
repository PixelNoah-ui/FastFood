import getCollections from "../api/getCollections";
import SearchFilter from "./SearchFilter";

export default async function MenuLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const collections = await getCollections();
  return <SearchFilter collections={collections}>{children}</SearchFilter>;
}
