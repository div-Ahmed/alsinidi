"use client";
// import products from "@/code/products_db";
import { useContext, useEffect, useState } from "react";
import ProductSkeleton from "./productSkeleton";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ProductPreview from "./productPreview";
import ProductTabs from "./productTabs";
import ProductsTabs from "./productsTabs";
import GlobalContext from "@/code/globalContext";

export default function Product({ params }: { params: { id: string } }) {
  // Access context data
  const { AllProducts } = useContext(GlobalContext);
  const [product, setProduct] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const allProducts = AllProducts ?? []; // Default to an empty array if AllProducts is null or undefined
  useEffect(() => {
    const findProduct = allProducts.find(
      (product) => product.id == parseInt(params.id)
    );
    if (findProduct) setProduct(findProduct);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [params.id]);

  return (
    <main dir="ltr">
      <div className="container mx-auto px-3 md:px-6 py-12">
        {/* fetching data*/}
        {isLoading && <ProductSkeleton />}
        {/* Product not found */}
        {!isLoading && !product && (
          <div className="text-center">
            <BsFillInfoCircleFill className="text-5xl text-captionColor mx-auto mb-3" />
            <p className="text-blackText text-2xl">Product not found!</p>
          </div>
        )}
        {/* Product found */}
        {!isLoading && product && (
          <>
            <ProductPreview product={product} />
            <div className="mt-6">
              <ProductTabs product={product} />
            </div>
            <div className="mt-6">
              <ProductsTabs product={product} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
