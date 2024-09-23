"use client";
import { iProductInCart } from "@/code/dataModels";
import GlobalContext from "@/code/globalContext";
import { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { MdOutlineMinimize } from "react-icons/md";
import { TbTrash } from "react-icons/tb";

export default function CartMenuItem({ product }: { product: iProductInCart }) {
    const { userCart, setUserCart } = useContext(GlobalContext);
    const removeItem = (id: number) => {
        const leftProductsList = userCart?.filter(x => x.id != id) || [];
        setUserCart(leftProductsList);
    };
    // const handleIncrement = (product: iProductInCart) => {
    //     if (product.quantity < product.stock) {
    //         const indix = userCart?.findIndex(x => x.id == product.id);
    //         const products = [...userCart];
    //         products[indix]?.quantity += 1;
    //         setUserCart(products);
    //     }
    // };

    // const handleDecrement = (product: iProductInCart) => {
    //     const count = product.quantity - 1;
    //     if (count > 0) {
    //         const indix = userCart?.findIndex(x => x.id == product.id);
    //         const products = [...userCart];
    //         products[indix].quantity = count;
    //         setUserCart(products);
    //     }
    // };
    return (
        <div className="flex justify-between py-3 border-b items-center">
            <div>
                <img src={product?.images ? product.images?.[0].image_path : ""} alt={product?.name} className="w-12 h-12" />
            </div>
            <div className="flex-grow mx-1">
                <h3 className="text-captionColor">{product?.name}</h3>
                <button
                    className="text-primary hover:text-white text-base font-normal justify-center items-center w-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out block"
                >
                    <span
                        className="h-full flex justify-center items-center mx-1 cursor-pointer"
                    // onClick={() => handleDecrement(product)}
                    >
                        <MdOutlineMinimize
                            className={`transition-all duration-500 ease-in-out text-lg mb-3`}
                        />
                    </span>
                    <span className="h-full flex grow justify-center items-center cursor-pointer">
                        <span className="text-lg font-bold">
                            {product.quantity}
                        </span>
                    </span>
                    <span
                        className="h-full flex justify-center items-center mx-1 cursor-pointer"
                    // onClick={() => handleIncrement(product)}
                    >
                        <GoPlus
                            className={`transition-all duration-500 ease-in-out text-lg`}
                        />
                    </span>
                </button>
                <p className="text-center mt-1">
                    <span className="text-blackText text-sm font-bold">
                        {product.discountPrice || product.price} {product.currency}
                    </span>
                    {
                        product.discountPrice ? <span className="text-captionColor line-through text-xs ltr:ml-1 rtl:mr-1">{product.price} {product.currency}</span> : ""
                    }
                </p>
            </div>
            <button>
                <TbTrash className="text-redColor text-2xl" onClick={() => removeItem(product.id)} />
            </button>
        </div>
    );
};