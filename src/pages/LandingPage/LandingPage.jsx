import axios from "axios";
import ProductCard from "../../components/ProductCard";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Skeleton } from "../../components/ui/skeleton";
import Navbar from "../../components/Navbar";
import HeroSection from "./_components/HeroSection";
import { UserContext } from "../../context/AuthContext";

function LandingPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/item`
        );
        console.log(response);
        setProducts(response.data.payload.slice(0, 8));
      } catch (error) {
        console.error("Error fetching item:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();

    console.log("User data:", user);
  }, []);

  return (
    <main className="w-screen flex-1 bg-background">
      <HeroSection />
      <section className="w-full flex justify-center px-4 py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary text-background px-3 py-1 text-sm">
                Featured Products
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Our Best Sellers
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our most popular products loved by our customers
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
            {loading
              ? Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className="border rounded-xl p-4 flex flex-col"
                    >
                      <Skeleton className="h-48 w-full rounded-lg mb-4" />
                      <Skeleton className="h-6 w-3/4 mb-2" />
                      <Skeleton className="h-4 w-1/4 mb-4" />
                      <Skeleton className="h-8 w-full rounded-md mt-auto" />
                    </div>
                  ))
              : products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
          <div className="flex justify-center mt-10">
            <a href="/products">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default LandingPage;
