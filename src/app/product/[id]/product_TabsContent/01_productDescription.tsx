"use client";


export default function ProductDescription({ product }: { product: any }) {
  return (
    <div className="container px-0">
      <p>{product.description}</p>
    </div>
  );
}
