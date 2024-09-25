"use client";


export default function ProductTags({ product }: { product: any }) {
  return (
    <div className="container px-0">
      {product.tags.map((tag: any) => (
        <span key={tag} className="text-primary bg-bgBrimary py-1 px-3 rounded-md mx-1 text-sm font-medium">
          {tag}
        </span>
      ))}
    </div>
  );
}
