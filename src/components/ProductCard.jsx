import { useState } from "react";
import { ShoppingCart } from "lucide-react";

import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden transition-all duration-200 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={`https://placehold.co/400x400?text=${encodeURIComponent(
            product.name || "Product"
          )}`}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />

        <Badge className="absolute left-2 top-2 bg-primary text-primary-foreground">
          New
        </Badge>
        {/* {product.discount > 0 && (
          <Badge className="absolute right-2 top-2 bg-destructive text-destructive-foreground">
            {product.discount}% OFF
          </Badge>
        )} */}
      </div>
      <CardContent className="p-4">
        <div className="space-y-1">
          <h3 className="font-medium">{product.name}</h3>
          {/* <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p> */}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold">${product.price.toFixed(2)}</span>
            {/* {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.price.toFixed(2)}
              </span>
            )} */}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="ml-1">
              <span className="text-primary font-medium">{product.stock}</span>{" "}
              in stock
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="w-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" size="sm" asChild>
          <a href={`/product/${product.id}`}>View</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
