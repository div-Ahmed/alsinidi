"use client";

import { useState } from "react";
export default function Payment({children}: {children?: React.ReactNode}) {
    const [paymentMethod, setPaymentMethod] = useState('cash');
    return (
    <div className="container px-3 mx-auto">
        <div className="pb-6 border-b border-captionColor mb-3">
            <h2 className="text-2xl text-blackText font-bold">Promocode</h2>
            <p className="text-xs text-blackSubText mb-3 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <input
            type="text"
            name="promocode"
            id="promocode"
            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            />
        </div>
        <div className="mb-3">
            <h2 className="text-2xl text-blackText font-bold">Payment method</h2>
            <p className="text-xs text-blackSubText mb-3 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <div className={`flex items-center gap-x-3 rounded-md border px-3 py-3 mb-3
            ${paymentMethod === 'cash' ? "bg-bgBrimary border-primary" : "bg-white"}`}>
                <input
                id="cash"
                name="paymentMethod"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                defaultChecked={paymentMethod === 'cash'}
                />
                <label htmlFor='cash' className="font-medium text-xs text-blackText cursor-pointer">
                    Cash on delivery (COD)
                </label>
            </div>
            <div className={`flex items-center gap-x-3 rounded-md border px-3 py-3 mb-3
            ${paymentMethod === 'credit' ? "bg-bgBrimary border-primary" : "bg-white"}`}>
                <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                defaultChecked={paymentMethod === 'credit'}
                />
                <label htmlFor='credit' className="font-medium text-xs text-blackText cursor-pointer">
                    Credit/debit card on delivery
                </label>
            </div>
        </div>
        <div className="flex lg:justify-end justify-center">
            {children}
        </div>
    </div>
    );
}