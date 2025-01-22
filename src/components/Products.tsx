"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { FourProducts } from '@/sanity/lib/queries';
import { Product } from '@/types/Data';


 function ProductSection() {
  const [product, SetProduct]=useState<Product[]>([])

useEffect(()=>{
  const fetchProducts = async () => {
    const fetchProducts : Product[] =await client.fetch(FourProducts)
    SetProduct(fetchProducts)
  }
  fetchProducts()
},[])

  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const section = document.getElementById('product-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      setIsInView(rect.top < window.innerHeight && rect.bottom > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const headingVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="product-section" className="flex flex-col items-center p-10">
      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-3xl xl:text-4xl 2xl:text-6xl font-extrabold mb-8 text-center mt-14"
      >
        NEW ARRIVALS
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {product.map((product) => (
          <Link
            href={`/shop/${product.name}`}
            key={product._id}
            className="text-center cursor-pointer"
          >
            <div className="w-[200px] h-[300px] overflow-hidden mx-auto">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
          </Link>
        ))}
      </motion.div>

      <Link href="/newArrivals">
        <button className="w-24 items-center justify-center mt-3 bg-black rounded-2xl text-white px-4 py-3 hover:bg-white border border-black transition-all ease-in-out duration-700 hover:text-black">
          View All
        </button>
      </Link>

      <motion.h2
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-3xl font-extrabold mt-28 mb-8 text-center xl:text-4xl 2xl:text-5xl"
      >
        TOP SELLING
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {product.map((product) => (
          <Link
            href={`/shop/${product.name}`}
            key={product._id}
            className="text-center cursor-pointer"
          >
            <div className="w-[200px] h-[300px] overflow-hidden mx-auto">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
          </Link>
        ))}
      </motion.div>

      <Link href="/onSale">
        <button className="w-24 items-center justify-center mt-3 bg-black rounded-2xl text-white px-4 py-3 hover:bg-white border border-black transition-all ease-in-out duration-700 hover:text-black">
          View All
        </button>
      </Link>
    </section>
  );
};

export default ProductSection;
