"use client";

// import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the MapComponent to avoid SSR issues
// const MapComponent = dynamic(() => import('../../../components/maps'), {
//   ssr: false
// });

export default function FristLocation() {
  // const apiKey = "AIzaSyCTtI3pIzjcJGvRJFOGIKY_k32tIUlnaCw";
  return (
    <div className="">
      {/* <h1 className="text-2xl font-bold mb-4">Google Maps with Address</h1> */}
      {/* <MapComponent apiKey={apiKey} /> */}
      <iframe className='rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463879.63815414155!2d47.15218811545341!3d24.724831543441592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1719100246995!5m2!1sar!2seg" width="100%" height="470"  loading="lazy"></iframe>
    </div>
  );
}
