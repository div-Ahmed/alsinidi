// "use client";

// import { iProduct } from "@/code/dataModels";
// import { useState } from "react";
// import {
//   BiLogoFacebook,
//   BiLogoTelegram,
//   BiLogoTwitter,
//   BiLogoWhatsapp,
//   BiShoppingBag,
//   BiSolidHeart,
//   BiSolidStar,
// } from "react-icons/bi";
// import tabby from "/public/assets/tabby.png";
// import tamara from "/public/assets/tamara.png";
// import Image from "next/image";
// import Link from "next/link";
// import { BsArrowLeftRight } from "react-icons/bs";

// export default function ProductPreview({ product }: { product: iProduct }) {
//   const [activeImg, setActiveImg] = useState(product.imagesUrl[0]);
//   return (
//     <div className="flex flex-wrap">
//       <div className="basis-full lg:basis-1/4 mb-6">
//         <div className="product-img border text-center rounded-lg p-3">
//           <Image
//             loader={() => activeImg.url}
//             src={activeImg.url}
//             alt={product.name}
//             width={260}
//             height={260}
//             className="mx-auto"
//           />
//         </div>
//         <div className="product-imgs text-center flex mt-3 justify-between">
//           {product.imagesUrl.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => setActiveImg(item)}
//               className={`border rounded-lg p-3 cursor-pointer ${
//                 activeImg.id === item.id ? "border-primary" : ""
//               }`}
//             >
//               <Image
//                 loader={() => item.url}
//                 src={item.url}
//                 alt={product.name}
//                 width={60}
//                 height={60}
//                 className="mx-auto"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="product-info basis-full lg:basis-3/4 ltr:lg:pl-4 rtl:lg:pr-4">
//         <h1 className="text-3xl font-bold text-blackText mb-3">
//           {product.name}
//         </h1>
//         {/* Div With Price and Reviews */}
//         <div className="flex flex-wrap items-center justify-between">
//           <div className="flex items-center">
//             <span className="text-3xl font-bold text-primary">
//               {product.price}
//             </span>
//             <span className="text-sm text-captionColor mx-3 font-medium">
//               {" "}
//               Including VAT{" "}
//             </span>
//           </div>
//           <div className="flex items-center">
//             <div className="text-3xl font-bold text-primary flex">
//               {[1, 2, 3, 4, 5].map((item, index) => (
//                 <BiSolidStar
//                   key={index}
//                   className={`${
//                     product.rating >= item
//                       ? "text-yellow-400"
//                       : "text-graySubText"
//                   } text-lg`}
//                 />
//               ))}
//             </div>
//             <span className="text-sm text-captionColor mx-3 font-medium underline">
//               {" "}
//               {product.reviews.length} Review{" "}
//             </span>
//           </div>
//         </div>
//         {/* Div With 4 interest-free payments tabby image */}
//         <div className="flex flex-wrap justify-between rounded-lg bg-bgBrimary my-6 p-3 text-blackText">
//           <p>
//             4 interest-free payments of SAR 24.50. No fees. Shariah-compliant.
//             <Link href="/" className="text-primary underline mx-1">
//               Learn more{" "}
//             </Link>
//           </p>
//           <Image src={tabby} className="" width={47} alt="tabby" />
//         </div>
//         {/* Div With Information About The Product Model & Sku & Size & Color & Material */}
//         <div>
//           <div className="mb-3">
//             <span className="text-blackText font-bold">Model:</span>
//             <span className="text-graySubText mx-3">{product.model}</span>
//           </div>
//           <div className="mb-3">
//             <span className="text-blackText font-bold">SKU:</span>
//             <span className="text-graySubText mx-3">{product.SKU}</span>
//           </div>
//           <div className="mb-3">
//             <span className="text-blackText font-bold">Size:</span>
//             <span className="text-graySubText mx-3">{product.size}</span>
//           </div>
//           <div className="mb-3">
//             <span className="text-blackText font-bold">Color:</span>
//             <span className="text-graySubText mx-3">{product.color}</span>
//           </div>
//           <div className="mb-3">
//             <span className="text-blackText font-bold">Material:</span>
//             <span className="text-graySubText mx-3">{product.matrial}</span>
//           </div>
//           <div className="mb-3">
//             <span className="text-blackText font-bold">Warranty:</span>
//             <span className="text-graySubText mx-3">{product.warranty}</span>
//           </div>
//         </div>
//         {/* Div With Button Add To Cart, Add To Wishlist, Compare */}
//         <div className="actions grid gap-4 lg:grid-cols-3 grid-cols-1 mt-6  font-medium">
//           <button className="bg-primary text-white p-3 rounded-lg">
//             <BiShoppingBag className="inline text-xl" />
//             <span className="mx-2"> Add to cart </span>
//           </button>
//           <button className="btn-transparent text-primary p-3 border-2 border-primary rounded-lg">
//             <BiSolidHeart className="inline text-xl" />
//             <span className="mx-2">Add to wishlist</span>
//           </button>
//           <button className="btn-transparent text-primary p-3 border-2 border-primary rounded-lg">
//             <BsArrowLeftRight className="inline text-xl" />
//             <span className="mx-2">Compare</span>
//           </button>
//         </div>
//         {/* Div With Estimated Delivery */}
//         <div className="flex flex-wrap items-center justify-between mt-6">
//           <p className="font-bold">Estimated delivery date to :</p>
//           <div className="flex flex-wrap items-center">
//             <select
//               id="country"
//               name="country"
//               autoComplete="country-name"
//               className="block rounded-md border-0 py-2 px-3 mx-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
//             >
//               <option>Saudi Arabia</option>
//               <option>United States</option>
//               <option>Canada</option>
//               <option>Mexico</option>
//             </select>
//             <span className="text-secondary font-bold text-sm">
//               Tue 13-02-2024
//             </span>
//           </div>
//         </div>
//         {/* Div With 4 interest-free payments tamara image */}
//         <div className="flex flex-wrap justify-between rounded-lg bg-bgBrimary my-6 p-3 text-blackText">
//           <p>
//             4 interest-free payments of SAR 24.50. No fees. Shariah-compliant.
//             <Link href="/" className="text-primary underline mx-1">
//               Learn more{" "}
//             </Link>
//           </p>
//           <Image src={tamara} className="" width={47} alt="tamara" />
//         </div>
//         {/* Div With Share this product Icon */}
//         <div className="flex flex-wrap items-center justify-between mt-6">
//           <p className="font-bold">Share this product : </p>
//           <div className="flex justify-center lg:justify-end">
//             <Link
//               href="/"
//               className="text-xl text-captionColor hover:text-primary mx-1"
//             >
//               <BiLogoWhatsapp />
//             </Link>
//             <Link
//               href="/"
//               className="text-xl text-captionColor hover:text-primary mx-1"
//             >
//               <BiLogoFacebook />
//             </Link>
//             <Link
//               href="/"
//               className="text-xl text-captionColor hover:text-primary mx-1"
//             >
//               <BiLogoTwitter />
//             </Link>
//             <Link
//               href="/"
//               className="text-xl text-captionColor hover:text-primary mx-1"
//             >
//               <BiLogoTelegram />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import {
  BiLogoFacebook,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
  BiShoppingBag,
  BiSolidHeart,
  BiSolidStar,
} from "react-icons/bi";
import tabby from "/public/assets/tabby.png";
import tamara from "/public/assets/tamara.png";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftRight } from "react-icons/bs";

export default function ProductPreview({ product }: { product: any }) {
  // Mapping imagesUrl to match the format from iProduct's images
  const imagesUrl = product.images.map((img: any) => ({ id: img.id, url: img.image_path }));

  const [activeImg, setActiveImg] = useState(imagesUrl[0]);
  return (
    <div className="flex flex-wrap">
      <div className="basis-full lg:basis-1/4 mb-6">
        <div className="product-img border text-center rounded-lg p-3">
          <Image
            loader={() => activeImg.url}
            src={activeImg.url}
            alt={product.name}
            width={260}
            height={260}
            className="mx-auto"
          />
        </div>
        <div className="product-imgs text-center flex mt-3 justify-between">
          {imagesUrl.map((item: any, index: number) => (
            <div
              key={index}
              onClick={() => setActiveImg(item)}
              className={`border rounded-lg p-3 cursor-pointer ${activeImg.id === item.id ? "border-primary" : ""
                }`}
            >
              <Image
                loader={() => item.url}
                src={item.url}
                alt={product.name}
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="product-info basis-full lg:basis-3/4 ltr:lg:pl-4 rtl:lg:pr-4">
        <h1 className="text-3xl font-bold text-blackText mb-3">
          {product.name}
        </h1>
        {/* Div With Price and Reviews */}
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-primary">
              {product.price}
            </span>
            <span className="text-sm text-captionColor mx-3 font-medium">
              Including VAT
            </span>
          </div>
          <div className="flex items-center">
            <div className="text-3xl font-bold text-primary flex">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <BiSolidStar
                  key={index}
                  className={`${product.rating >= item
                    ? "text-yellow-400"
                    : "text-graySubText"
                    } text-lg`}
                />
              ))}
            </div>
            {/* <span className="text-sm text-captionColor mx-3 font-medium underline">
              {product.reviews.length} Review
            </span> */}
            <span className="text-sm text-captionColor mx-3 font-medium underline">
              {product.reviews ? product.reviews.length : 0} Review
            </span>
          </div>
        </div>
        {/* Interest-free payments tabby image */}
        <div className="flex flex-wrap justify-between rounded-lg bg-bgBrimary my-6 p-3 text-blackText">
          <p>
            4 interest-free payments of SAR 24.50. No fees. Shariah-compliant.
            <Link href="/" className="text-primary underline mx-1">
              Learn more
            </Link>
          </p>
          <Image src={tabby} width={47} alt="tabby" />
        </div>
        {/* Product Details */}
        <div>
          <div className="mb-3">
            <span className="text-blackText font-bold">Model:</span>
            <span className="text-graySubText mx-3">{product.model}</span>
          </div>
          <div className="mb-3">
            <span className="text-blackText font-bold">SKU:</span>
            <span className="text-graySubText mx-3">{product.SKU}</span>
          </div>
          <div className="mb-3">
            <span className="text-blackText font-bold">Size:</span>
            <span className="text-graySubText mx-3">{product.size}</span>
          </div>
          <div className="mb-3">
            <span className="text-blackText font-bold">Color:</span>
            <span className="text-graySubText mx-3">{product.color.name}</span>
          </div>
          <div className="mb-3">
            <span className="text-blackText font-bold">Material:</span>
            <span className="text-graySubText mx-3">{product.matrial}</span>
          </div>
          <div className="mb-3">
            <span className="text-blackText font-bold">Warranty:</span>
            <span className="text-graySubText mx-3">{product.warranty}</span>
          </div>
        </div>
        {/* Add to Cart, Wishlist, Compare */}
        <div className="actions grid gap-4 lg:grid-cols-3 grid-cols-1 mt-6  font-medium">
          <button className="bg-primary text-white p-3 rounded-lg">
            <BiShoppingBag className="inline text-xl" />
            <span className="mx-2"> Add to cart </span>
          </button>
          <button className="btn-transparent text-primary p-3 border-2 border-primary rounded-lg">
            <BiSolidHeart className="inline text-xl" />
            <span className="mx-2">Add to wishlist</span>
          </button>
          <button className="btn-transparent text-primary p-3 border-2 border-primary rounded-lg">
            <BsArrowLeftRight className="inline text-xl" />
            <span className="mx-2">Compare</span>
          </button>
        </div>
        {/* Estimated Delivery */}
        <div className="flex flex-wrap items-center justify-between mt-6">
          <p className="font-bold">Estimated delivery date to:</p>
          <div className="flex flex-wrap items-center">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block rounded-md border-0 py-2 px-3 mx-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            >
              <option>Saudi Arabia</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            <span className="text-secondary font-bold text-sm">
              Tue 13-02-2024
            </span>
          </div>
        </div>
        {/* Interest-free payments tamara image */}
        <div className="flex flex-wrap justify-between rounded-lg bg-bgBrimary my-6 p-3 text-blackText">
          <p>
            Interest-free payments starting from SAR 50.00 with
            <Link href="/" className="text-primary underline mx-1">
              Learn more
            </Link>
          </p>
          <Image src={tamara} width={47} alt="tamara" />
        </div>
      </div>
    </div>
  );
}
