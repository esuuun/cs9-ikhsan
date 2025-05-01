import { useState, useMemo, useEffect } from "react";
import { ArrowLeft, Loader, Search, SlidersHorizontal } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import ProductCard from "../../components/ProductCard";
import { Badge } from "../../components/ui/badge";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import axios from "axios";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOption, setSortOption] = useState("featured");

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/item`
        );
        console.log(response);
        setProducts(response.data.payload);
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setSearchQuery("");
        setSelectedCategories([]);
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  // Extract unique categories from products
  const categories = useMemo(() => {
    const categorySet = new Set(products.map((product) => product.category));
    return Array.from(categorySet);
  }, []);

  // Filter products based on search query and selected categories
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Search filter
        const matchesSearch =
          searchQuery === "" ||
          product?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (product?.description &&
            product?.description
              ?.toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          product?.category?.toLowerCase().includes(searchQuery.toLowerCase());

        // Category filter
        const matchesCategory =
          selectedCategories.length === 0 ||
          selectedCategories.includes(product.category);

        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        // Sort products
        switch (sortOption) {
          case "price-low":
            return a.price - b.price;
          case "price-high":
            return b.price - a.price;
          case "newest":
            return new Date(b.id).getTime() - new Date(a.id).getTime();
          default:
            return b.reviews - a.reviews; // Featured - sort by popularity
        }
      });
  }, [searchQuery, selectedCategories, sortOption]);

  // Calculate total sum of filtered products
  const totalSum = useMemo(() => {
    return filteredProducts.reduce((sum, product) => sum + product.price, 0);
  }, [filteredProducts]);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50">
      <main className="flex-1 container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              All Products
            </h1>
            <p className="text-gray-600 mt-1">
              Browse our complete collection of products
            </p>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="md:hidden">
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Filter Products</SheetTitle>
                  <SheetDescription>
                    Narrow down products by category
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div
                          key={category}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={`mobile-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() =>
                              handleCategoryChange(category)
                            }
                          />
                          <Label
                            htmlFor={`mobile-${category}`}
                            className="font-normal"
                          >
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="relative flex-1 md:max-w-xs">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 pr-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select value={sortOption} onValueChange={setSortOption}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          {/* Sidebar filters - desktop only */}
          <div className="hidden md:block">
            {/* Summary card */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Products:</span>
                    <span className="font-medium">
                      {filteredProducts.length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Value:</span>
                    <span className="font-medium">${totalSum.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="space-y-6">
            {/* Active filters */}
            {(selectedCategories.length > 0 || searchQuery) && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-600">Active filters:</span>
                {searchQuery && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Search: {searchQuery}
                    <button
                      className="ml-1 hover:text-gray-900"
                      onClick={() => setSearchQuery("")}
                    >
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategories.map((category) => (
                  <Badge
                    key={category}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {category}
                    <button
                      className="ml-1 hover:text-gray-900"
                      onClick={() => handleCategoryChange(category)}
                    >
                      ×
                    </button>
                  </Badge>
                ))}
                {selectedCategories.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm h-7 px-2"
                    onClick={() => setSelectedCategories([])}
                  >
                    Clear all
                  </Button>
                )}
              </div>
            )}

            {/* Mobile summary */}
            <Card className="md:hidden">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Total Products</div>
                    <div className="font-medium">
                      {filteredProducts.length} items
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Total Value</div>
                    <div className="font-medium">${totalSum.toFixed(2)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Products grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : loading ? (
              <div className="flex flex-col w-full h-full items-center justify-center  text-center">
                <Loader className="h-8 w-8 text-primary animate-spin" />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Search className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  No products found
                </h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategories([]);
                  }}
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t bg-white py-6">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2024 ShopNow. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
