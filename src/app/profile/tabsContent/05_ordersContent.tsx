"use client";

import { iProduct } from "@/code/dataModels";
// import G from "@/code/globalData";
import ProductCard from "@/components/productCard";
import { useState, useEffect } from "react";
import Image from "next/image";
import noOrders from "/public/assets/noOrders.png";

export default function OrdersContent() {
  // const [currentUser, setCurrentUser] = useState(G.session.user);
  const [ordersList, setOrdersList] = useState<iProduct[]>([]);
  useEffect(() => {}, []);
  return (
    <div className="container px-0">
      {ordersList && ordersList.length ? (
        ordersList.map((product, index) => (
          <ProductCard key={index + 1} product={product}></ProductCard>
        ))
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-blackText mb-4">
            Order History
          </h2>
          <Image
            src={noOrders}
            className="mb-3 mx-auto"
            width={200}
            height={200}
            alt="no orders"
          />
          <p className="text-captionColor text-sm mb-6">
            You have not made any previous orders!
          </p>
          <button
            type="submit"
            className="text-white bg-primary rounded-md px-3 py-2 mt-3 min-w-[260px]"
          >
            Shop now
          </button>
        </div>
      )}
    </div>
  );
}
