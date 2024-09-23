"use client";
import React, { useState, useEffect } from "react";
import ProductCard from "@/components/productCard";
import { BiSolidTrash } from "react-icons/bi";
import { useContext } from "react";
import GlobalContext from "@/code/globalContext";
import Link from "next/link";
import { useAuthCheck } from "@/hooks/useAuthCheck";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export default function Cart() {
  const { userCart, setUserCart } = useContext(GlobalContext);
  const { session, status, isLoading } = useAuthCheck();
  const router = useRouter();


  // if (!session || status === "unauthenticated") {
  //   router.push("/auth/sign-in");
  // } else if (session.user) {
  //   console.log(session.user.name);
  //   console.log(session.user.email);
  // }
  useEffect(() => {
    if (!session || status !== "authenticated") {
      router.push("/auth/sign-in");
    }
  }, [session, status]);
  const [total, setTotal] = useState(0);
  const [totalWithTaxes, setTotalWithTaxes] = useState(0);

  const removeItem = async (id: any) => {
    const token = localStorage.getItem('userToken');
    if (!token) {
      return;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        console.log("Token is expired. Please log in again.");
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/items/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "X-LOCALE": "en",
          'Authorization': `Bearer ${token}`
        },
      });

    } catch (error) {
      console.log("Invalid token. Please log in.");

      return;
    }


  };

  useEffect(() => {
    const total = userCart?.map(x => (x.product.price || x.product.discountPrice) * x.quantity).reduce((a, b) => a + b, 0);
    // setTotal(total);
    // setTotalWithTaxes(total * 1.21);
  }, [userCart]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }
  console.log(userCart);
  return (
    <div className="container px-3 max-w-[700px] mx-auto py-12">
      <h2 className="text-2xl text-blackText font-bold mb-6 text-center">Cart</h2>
      {(userCart && userCart.length) || isLoading ? (
        userCart?.map((pro, index: any) => (
          <ProductCard key={index + 1} product={pro}>
            <div className="mt-3 flex justify-center lg:justify-end text-sm font-medium">
              <button id={`${pro.product.id}`} className="text-redColor mx-1 flex items-center" onClick={() => removeItem(pro.product.id)}>
                {" "}
                <BiSolidTrash className="mx-1 text-lg" /> <span> Remove </span>{" "}
              </button>
            </div>
          </ProductCard>
        ))
      ) : (
        <div className="text-sm text-captionColor text-center">
          No products found
        </div>
      )}
      <div className="flex flex-wrap lg:justify-between justify-center mt-3">
        <span className="text-captionColor">Total products:</span>
        {/* <span className="font-bold">{total.toFixed(2)} SAR</span> */}
      </div>
      {/* <div className="flex flex-wrap lg:justify-between justify-center mt-3">
        <span className="text-captionColor">Final total <span className="text-xs text-black">(Taxes included)</span>:</span>
        <span className="font-bold text-primary">{totalWithTaxes.toFixed(2)} SAR</span>
      </div> */}
      <div className="text-center mt-6">
        <Link className="bg-primary text-white py-2 inline-block rounded-md min-w-[260px]" href="/checkout">Check out</Link>
      </div>
    </div>
  );
}