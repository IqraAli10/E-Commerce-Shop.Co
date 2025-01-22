"use client";
import React, { useState } from "react";
import ProductGrid from "./ProductSection";
import FilterSection from "./FilterSection";
import { Product } from "@/types/Data";

export default function ProductSections({ products }: { products: Product[] }) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div>
      <section className="flex flex-col lg:flex-row p-6 mb-16">
        {/* Filter Sidebar for Large Screens */}
        <div className="hidden lg:block w-1/5">
          <FilterSection onClose={() => setShowFilter(false)} />
        </div>

        {/* Filter Button for Mobile */}
        <div className="block lg:hidden mb-4">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="w-full py-2 rounded-full bg-black text-white"
          >
            {showFilter ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filter Sidebar for Mobile */}
        {showFilter && <FilterSection onClose={() => setShowFilter(false)} />}

        {/* Product Grid */}
     
          <ProductGrid Products={products}  />
   
      </section>
    </div>
  );
}
