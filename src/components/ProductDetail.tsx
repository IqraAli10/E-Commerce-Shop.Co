"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { OneProduct } from "@/sanity/lib/queries";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Product } from "@/types/Data";

function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();
  const { id } = params;
  

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const fetchedProduct: Product = await client.fetch(OneProduct, {
          id,
        });
      
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

 

  return (
    <div className="flex flex-col p-8 sm:px-14 sm:py-10 bg-gray-100 space-y-12">
    
        <div key={product._id} className="flex flex-col lg:flex-row items-start lg:space-x-8 mb-12">
          {/* Main Product Image */}
          <div className="lg:w-[400px] w-full">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={400}
              className="rounded-md"
            />
          </div>

          {/* Product Details Text */}
          <div className="flex flex-col lg:w-1/2 mt-8 lg:mt-0 items-center lg:items-start text-center lg:text-left">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-lg font-semibold mb-4">{product.price}</p>

            {/* Size Selection */}
            <div className="mb-4">
  <h3 className="font-semibold mb-2">Size:</h3>
  <div className="flex space-x-4 justify-center lg:justify-start">
    {product.sizes.map((size, index) => (
      <motion.button
        key={index}
        whileHover={{ scale: 1.05 }}
        className="px-4 py-2 border border-black rounded-full cursor-pointer"
      >
        {size}
      </motion.button>
    ))}
  </div>
</div>
            {/* Color Selection */}
            {
           <div className="mb-4">
           <h3 className="font-semibold mb-2">Color:</h3>
           <div className="flex space-x-4 justify-center lg:justify-start">
             {product.colors.map((color, index) => (
               <motion.div
                 key={index}
                 className="w-8 h-8 rounded-full border border-black cursor-pointer"
                 style={{ backgroundColor: color }} // Applying the color as the background
               ></motion.div>
             ))}
           </div>
         </div>
         
            }

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-4 mb-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gray-200 rounded-md"
                >
                  -
                </motion.button>
                <span className="text-lg">1</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gray-200 rounded-md"
                >
                  +
                </motion.button>
              </div>
              
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-black text-white px-8 py-2 rounded-full hover:bg-white hover:text-black border border-black"
                 
                >
                  Add to Cart
                </motion.button>
              
            </div>
          </div>
        </div>

    </div>
  );
}

export default ProductDetail;
