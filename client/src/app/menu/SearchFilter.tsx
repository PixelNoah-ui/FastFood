import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFilterProps {
  children: React.ReactNode;
  collections: string[];
}

export default function SearchFilter({
  collections,
  children,
}: SearchFilterProps) {
  const sorting = [
    { slug: "price-asc", label: "Price: Low to High" },
    { slug: "price-desc", label: "Price: High to Low" },
    { slug: "name-asc", label: "A - Z" },
    { slug: "name-desc", label: "Z - A" },
    { slug: "popular", label: "Most Popular" },
    { slug: "newest", label: "Newest First" },
    { slug: "rating-desc", label: "Top Rated" },
  ];
  return (
    <div className="mx-auto flex max-w-[1580px] flex-col items-start gap-8 px-5 py-10 md:flex-row lg:justify-center">
      <aside className="top-10 flex h-fit w-full justify-center space-y-5 lg:sticky lg:w-64">
        <CollectionFilter collections={collections} />
      </aside>

      <div className="flex w-full basis-4/5 flex-col gap-6">
        <div className="flex items-center justify-center lg:justify-end">
          <SortFilter sort={sorting} />
        </div>
        {children}
      </div>
    </div>
  );
}

interface CollectionProps {
  collections: string[];
}

function CollectionFilter({ collections }: CollectionProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Collections</h1>
      <ul className="space-y-2">
        {collections.map((collection, index) => (
          <li key={index} className="flex items-center gap-2">
            <Checkbox className="text-chart-5" /> {collection}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SortingType {
  slug: string;
  label: string;
}

interface SortFilterProps {
  sort: SortingType[];
}

function SortFilter({ sort }: SortFilterProps) {
  return (
    <div>
      <Select value="">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by:" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {sort.map((option) => (
              <SelectItem key={option.slug} value={option.slug}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
