import SearchFilter from "./SearchFilter";

export default function MenuLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const collections = [
    "Burgers",
    "Pizza",
    "Chicken",
    "Sandwiches",
    "Fries & Sides",
    "Drinks",
    "Desserts",
    "Salads",
    "Snacks",
  ];
  return <SearchFilter collections={collections}>{children}</SearchFilter>;
}
