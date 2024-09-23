"use client";

export default function Order() {
    return (
    <div className="container px-3 mx-auto">
        <div className="border-b border-captionColor mb-3 pb-3">
            <div className="flex justify-between mb-3">
                <h2 className="text-xl text-blackText font-bold">Shipping address</h2>
                <button className="text-primary bg-transparent border-none text-sm">
                    Edit
                </button>
            </div>
            <div className="text-sm text-blackSubText">
                <span>Default address</span>
                <p className="mt-3">stresst name, building 01, floor 01, apartment 01 | city name, country name | phone number 010 199865586</p>
            </div>
        </div>
        <div className="border-b border-captionColor mb-3 pb-3">
            <div className="flex justify-between mb-3">
                <h2 className="text-xl text-blackText font-bold">Promocode</h2>
                <button className="text-primary bg-transparent border-none text-sm">
                    Edit
                </button>
            </div>
            <div className="text-sm text-blackSubText">
                <span>JHYO87H</span>
            </div>
        </div>
        <div className="border-b border-captionColor mb-3 pb-3">
            <div className="flex justify-between mb-3">
                <h2 className="text-xl text-blackText font-bold">Payment method</h2>
                <button className="text-primary bg-transparent border-none text-sm">
                    Edit
                </button>
            </div>
            <div className="text-sm text-blackSubText">
                <span>Cash on delivery (COD)</span>
            </div>
        </div>
        <p className="text-blackText text-sm">
            <span className="font-bold">Notes :</span> simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the 
        </p>
    </div>
    );
}