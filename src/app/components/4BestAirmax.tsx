
"use client"

import { client } from "@/sanity/lib/client";
import { url } from "inspector";
import { urlFor } from "@/sanity/lib/image";
import Image  from "next/image";
import React, { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { allProductsQuery } from "@/sanity/lib/query";

const BestAirMax = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function  fetchproducts() {
      const fetchedProduct : Product[] =await client.fetch(allProductsQuery)
     setProduct(fetchedProduct)
    }
    fetchproducts();
  }, []);

 return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold mb-6 text-center'>
            Our Latest Shoes 
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'></div>

      {product.map((product) => 
      <div key={product._id}
      className='border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200'>
       
        {product.image && (
        <Image 
        src={urlFor(product.image).url()}
        alt={product.productName}
        width={200}
        height={200}
        className='w-25 h-50 object-cover rounded-md'
        />
        )}
        <h2 className='text-lg font-semibold mt-4'>{product.productName}</h2>
        <p className='text-gray-500 mt-2'>
         {product.price ? `$${product.price}` : "Price not available"}
        </p>
      </div>

      )}
    </div>
  );
};

export default BestAirMax
