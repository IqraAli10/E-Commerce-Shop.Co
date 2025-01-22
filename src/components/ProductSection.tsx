"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/Data";
export default function ProductGrid  ({Products}:{Products:Product[]})  {
  return (
    <motion.div
      className="w-full lg:w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 col-span-full">Shop</h2>
      {Products.map((product) => (
        <Link
         href={`/shop/${product._id}`} // Dynamic route
         key={product._id}
       
        >
          <motion.div
            className="border p-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={200}

height={200}  className="w-full h-64 object-cover"
            />
            <h3 className="mt-2 font-bold">{product.name}</h3>
            <p className="text-gray-600">
              {product.discountPercent ? (
                <span className="text-red-500">
                  {product.price} 
                </span>
              ) : (
                product.price
              )}
            </p>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
};
