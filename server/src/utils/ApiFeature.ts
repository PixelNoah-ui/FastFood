import { Document, Query } from "mongoose";

interface queryStringProps {
  page?: string;
  sort?: string;
  price_max?: string;
  price_min?: string;
  category?: string | string[];
  [key: string]: any;
}
export default class ApiFeature<T extends Document> {
  public query: Query<T[], T>;
  public queryString: queryStringProps;
  constructor(query: Query<T[], T>, queryString: queryStringProps) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj: Record<string, any> = { ...this.queryString };
    const excludeQuery = ["page", "sort", "price_max", "price_min"];
    excludeQuery.forEach((key) => delete queryObj[key]);

    for (const key in queryObj) {
      if (key === "category") {
        if (Array.isArray(queryObj[key])) {
          queryObj["category"] = { $in: queryObj[key] };
        } else {
          queryObj["category"] = queryObj[key];
        }
        delete queryObj[key];
      } else if (Array.isArray(queryObj[key])) {
        queryObj[key] = { $in: queryObj[key] };
      }
    }

    if (this.queryString.price_max || this.queryString.price_min) {
      const filterPrice: Record<string, number> = {};

      if (this.queryString.price_max) {
        filterPrice.$gte = Number(this.queryString.price_max);
      }
      if (this.queryString.price_min) {
        filterPrice.$lte = Number(this.queryString.price_min);
      }

      this.query = this.query.find({ price: filterPrice });
    }

    this.query = this.query.find(queryObj);
    return this;
  }

  sort() {
    const sortSlug = this.queryString.sort || "newest";
    const sortMap: Record<string, any> = {
      "price-asc": { price: 1 },
      "price-desc": { price: -1 },
      "name-asc": { name: 1 },
      "name-desc": { name: -1 },
      popular: { rating: -1, createdAt: -1 },
      newest: { createdAt: -1 },
      "rating-desc": { rating: -1, createdAt: -1 },
    };

    const sortOption = sortMap[sortSlug];
    this.query = this.query.sort(sortOption);
    return this;
  }

  pagination() {
    const limit = 9;
    const page = Number(this.queryString.page || 1);
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}
