"use client";
import Link from "next/link";
import notFound from "/public/assets/404.png";
import Image from "next/image";
const NotFound = () => {
  return (
    <div className="py-12 px-3 text-center">
      <Image src={notFound} alt="not found" className="mx-auto"/>
      <h3 className="text-2xl font-bold text-blackText mt-6 mb-3">Page not found...</h3>
      <p className="text-sm text-captionColor">Something went wrong. It looks that your requested could not be found.</p>
      <p className="text-sm text-captionColor mb-6">It looks like the link is broken or the page is removed.</p>
      <Link href="/" className="block mx-auto max-w-[260px] px-3 py-2 rounded-md bg-primary text-white">Back to home</Link>
    </div>
  )
};

export default NotFound;
