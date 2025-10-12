"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import React, {
  useEffect,
  useOptimistic,
  useState,
  useTransition,
} from "react";

interface SearchFilterProps {
  children: React.ReactNode;
  collections: string[];
}

export default function SearchFilter({
  collections,
  children,
}: SearchFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [optimisticFilter, setOptimisticFilter] = useOptimistic({
    collections: searchParams.getAll("collections"),
    priceMin: searchParams.get("priceMin") || "",
    priceMax: searchParams.get("priceMax") || "",
  });

  const [isPending, startTransition] = useTransition();

  const sorting = [
    { slug: "price-asc", label: "Price: Low to High" },
    { slug: "price-desc", label: "Price: High to Low" },
    { slug: "name-asc", label: "A - Z" },
    { slug: "name-desc", label: "Z - A" },
    { slug: "popular", label: "Most Popular" },
    { slug: "newest", label: "Newest First" },
    { slug: "rating-desc", label: "Top Rated" },
  ];

  function updateFilter(updates: Partial<typeof optimisticFilter>) {
    const newState = { ...optimisticFilter, ...updates };
    const newSearchParams = new URLSearchParams(searchParams);
    console.log(newState);

    Object.entries(newState).forEach(([key, value]) => {
      newSearchParams.delete(key);
      if (Array.isArray(value)) {
        value.forEach((v) => newSearchParams.append(key, v));
      } else if (typeof value === "string" && value.trim() !== "") {
        newSearchParams.set(key, value);
      }
    });

    newSearchParams.delete("page");

    startTransition(() => {
      setOptimisticFilter(newState);
      router.push(`?${newSearchParams.toString()}`);
    });
  }

  return (
    <div className="mx-auto flex max-w-[1580px] flex-col items-start gap-8 px-5 py-10 md:flex-row lg:justify-center">
      <aside className="top-10 flex h-fit w-full flex-col items-center justify-center space-y-5 lg:sticky lg:w-64 lg:items-start">
        <CollectionFilter
          collections={collections}
          selectedCollections={optimisticFilter.collections}
          updateCollections={(collections) =>
            updateFilter({ collections: collections })
          }
        />
        <PriceFilter
          minDefaultPrice={optimisticFilter.priceMin}
          maxDefaultPrice={optimisticFilter.priceMax}
          updateFilterPrice={(priceMin, priceMax) =>
            updateFilter({ priceMin: priceMin, priceMax: priceMax })
          }
        />
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
  selectedCollections: string[];
  updateCollections: (collections: string[]) => void;
}

function CollectionFilter({
  collections,
  selectedCollections,
  updateCollections,
}: CollectionProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Collections</h1>
      <ul className="space-y-2">
        {collections.map((collection, index) => (
          <li key={index}>
            <label className="flex cursor-pointer items-center gap-2">
              <Checkbox
                className="text-chart-5"
                checked={selectedCollections.includes(collection)}
                onCheckedChange={(checked) => {
                  updateCollections(
                    checked
                      ? [...selectedCollections, collection]
                      : selectedCollections.filter((col) => col !== collection),
                  );
                }}
              />
              {collection}
            </label>
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

interface PriceFilterProps {
  minDefaultPrice: string | undefined;
  maxDefaultPrice: string | undefined;
  updateFilterPrice: (min: string | undefined, max: string | undefined) => void;
}

function PriceFilter({
  minDefaultPrice,
  maxDefaultPrice,
  updateFilterPrice,
}: PriceFilterProps) {
  const [minPrice, setminPrice] = useState(minDefaultPrice);
  const [maxPrice, setmaxPrice] = useState(maxDefaultPrice);

  useEffect(() => {
    setminPrice(minDefaultPrice);
    setmaxPrice(maxDefaultPrice);
  }, [minDefaultPrice, maxDefaultPrice]);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateFilterPrice(minPrice, maxPrice);
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Price</h1>
      <form className="flex items-center gap-2" onSubmit={onSubmit}>
        <Input
          placeholder="min"
          className="w-20"
          value={minPrice}
          onChange={(e) => setminPrice(e.target.value)}
        />
        <span>-</span>
        <Input
          className="w-20"
          placeholder="max"
          value={maxPrice}
          onChange={(e) => setmaxPrice(e.target.value)}
        />
        <Button type="submit" className="rounded-none px-10">
          Go
        </Button>
      </form>
    </div>
  );
}
