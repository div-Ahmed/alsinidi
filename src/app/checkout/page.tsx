"use client";
import Link from "next/link";
import Address from "./address";
import Payment from "./payment";
import Order from "./order";
import { useState } from "react";

export default function Checkout() {
    const [step, setStep] = useState<number>(1);
    return (
    <div className="container px-3 lg:px-12 mx-auto py-12">
        <h2 className="text-blackText mb-12 font-bold text-2xl text-center">Checkout</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-2">
                {
                    step === 1 ? 
                    <Address>
                        <button className="bg-primary text-white p-2 rounded-md block min-w-[200px] text-sm mb-3"
                        onClick={() => setStep(2)}>Next Step</button>
                    </Address> 
                    : step === 2 ? 
                    <Payment>
                        <button className="bg-primary text-white p-2 rounded-md block min-w-[200px] text-sm mb-3" 
                        onClick={() => setStep(3)}>Place order</button>
                    </Payment>
                    : 
                    <Order/>
                }
            </div>
            <div className="col-span-1">
                <div className="bg-bgBrimary p-3 rounded-md">
                    <h2 className="text-blackText mb-3">Order summary</h2>
                    <div className="text-sm text-blackSubText">
                        <div className="mb-3 flex justify-between">
                            <p>Total</p>
                            <span>54,947.09</span>
                        </div>
                        <div className="mb-3 flex justify-between">
                            <p>VAT</p>
                            <span>407.64</span>
                        </div>
                        <div className="mb-3 flex justify-between border-b border-captionColor pb-3">
                            <p>Delivery</p>
                            <span>100.00</span>
                        </div>
                        <div className="mb-3 flex justify-between pb-3">
                            <p>Grand total</p>
                            <span>55,847.43</span>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <Link className="bg-primary text-white py-2 block rounded-md" href="/checkout">Payment</Link>
                </div>
            </div>
        </div>
    </div>
    );
}