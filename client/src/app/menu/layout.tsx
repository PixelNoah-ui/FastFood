import getCollections from "../api/getCollections";
import SearchFilter from "./SearchFilter";
import { connection } from "next/server";

export default async function MenuLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  await connection();

  const collections = await getCollections();
  return <SearchFilter collections={collections}>{children}</SearchFilter>;
}
