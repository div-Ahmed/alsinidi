
import Header from "@/components/header";
import ProductHome from "@/components/productHome";
import photoDiscount from "/public/assets/discount.png";
import Image from "next/image";
import Categories from "@/components/categories";
import Kampa from "@/components/kampa";
import chair1 from "/public/assets/chair1.png";
import chair2 from "/public/assets/chair2.png";
import chair3 from "/public/assets/chair3.png";
import stars from "/public/assets/stars.png";
import { RiShoppingBasket2Line } from "react-icons/ri";
import Link from "next/link";
import MultiPurposeChair from "/public/assets/Multi-Purpose-Chair.png";
import MultiChair from "/public/assets/multiChair.png";
import specialOffer from "/public/assets/specialOffer.png";
import { FaHeart } from "react-icons/fa";

const DataMultiChairs = [
  {
    src: MultiPurposeChair,
    title: "Multi-Purpose Chair",
    newPrice: "220 SR",
    oldPrice: "250 SR",
  },
  {
    src: MultiPurposeChair,
    title: "Multi-Purpose Chair",
    newPrice: "220 SR",
    oldPrice: "250 SR",
  },
  {
    src: MultiPurposeChair,
    title: "Multi-Purpose Chair",
    newPrice: "220 SR",
    oldPrice: "250 SR",
  },
  {
    src: MultiPurposeChair,
    title: "Multi-Purpose Chair",
    newPrice: "220 SR",
    oldPrice: "250 SR",
  },
  {
    src: MultiPurposeChair,
    title: "Multi-Purpose Chair",
    newPrice: "220 SR",
    oldPrice: "250 SR",
  },
  {
    src: MultiPurposeChair,
    title: "Multi-Purpose Chair",
    newPrice: "220 SR",
    oldPrice: "250 SR",
  },
];
const arabicDataMultiChairs = [
  {
    src: MultiPurposeChair,
    title: "كرسي متعدد الأغراض",
    newPrice: "220 ريال سعودي",
    oldPrice: "250 ريال سعودي",
  },
  {
    src: MultiPurposeChair,
    title: "كرسي متعدد الأغراض",
    newPrice: "220 ريال سعودي",
    oldPrice: "250 ريال سعودي",
  },
  {
    src: MultiPurposeChair,
    title: "كرسي متعدد الأغراض",
    newPrice: "220 ريال سعودي",
    oldPrice: "250 ريال سعودي",
  },
  {
    src: MultiPurposeChair,
    title: "كرسي متعدد الأغراض",
    newPrice: "220 ريال سعودي",
    oldPrice: "250 ريال سعودي",
  },
  {
    src: MultiPurposeChair,
    title: "كرسي متعدد الأغراض",
    newPrice: "220 ريال سعودي",
    oldPrice: "250 ريال سعودي",
  },
  {
    src: MultiPurposeChair,
    title: "كرسي متعدد الأغراض",
    newPrice: "220 ريال سعودي",
    oldPrice: "250 ريال سعودي",
  },
];

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Header />
        {/* Section With Discount Image */}
        <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 flex items-center">
          <div className="photo-discount w-full h-full flex justify-center shadow-[0_1px_4px_1px] shadow-[#CAC9C9] rounded-2xl ">
            <Image
              src={photoDiscount}
              className="w-full"
              width={1200}
              height={270}
              alt="Discount"
            />
          </div>
        </div>
        <Categories />
        <Kampa />
        <ProductHome titleProductCategory="Gallons" swiperNum={0} />
        <ProductHome titleProductCategory="Mat" swiperNum={1} />
        <div className="lg:block hidden">
          <ProductHome titleProductCategory="Car refrigerators" swiperNum={2} />
        </div>
        {/* Section With Picnic chairs */}
        <div className="chair-section container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
          <div className="row-all w-full flex flex-wrap">
            <div className="col-item p-3 lg:max-w-[33%] lg:basis-1/3 max-w-full basis-full ">
              <div
                className="Charies flex bg-[#138AA826] rounded-md px-4 py-5"
                style={{
                  backgroundImage: `url(/assets/backgroundChair.png)`,
                  backgroundSize: "cover",
                }}
              >
                <div className="text-chair relative w-[50%] text-center">
                  <div className="absolute top-1/2 translate-y-[-50%]">
                    <p className="text-blackSubText text-sm my-3">
                      Picnic chairs
                    </p>
                    <h4 className="text-blackText font-bold">50% Sale</h4>
                    <div className="flex items-center justify-center my-3">
                      <span className="text-primary mx-1 cursor-pointer">
                        <RiShoppingBasket2Line />
                      </span>
                      <span className="text-primary text-sm font-bold mx-1 underline">
                        <Link href={"#"}>Buy Now</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="img-chair ">
                  <Image
                    src={chair1}
                    className="xl:min-h-[195px] xl:min-w-[210px] lg:min-h-[150px] lg:min-w-[160px]"
                    width={210}
                    height={190}
                    alt="chair"
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-item p-3 lg:max-w-[33%] lg:basis-1/3 max-w-full basis-full ">
              <div
                className="Charies flex bg-yellowLightColor rounded-md px-4 py-5"
                style={{
                  backgroundImage: `url(/assets/backgroundChair2.png)`,
                  backgroundSize: "cover",
                }}
              >
                <div className="text-chair relative w-[50%] text-center">
                  <div className="absolute top-1/2 translate-y-[-50%]">
                    <p className="text-blackSubText text-sm my-3">
                      Picnic chairs
                    </p>
                    <h4 className="text-blackText font-bold">New Release</h4>
                    <div className="flex items-center justify-center my-3">
                      <span className="text-primary mx-1 cursor-pointer">
                        <RiShoppingBasket2Line />
                      </span>
                      <span className="text-primary text-sm font-bold mx-1 underline">
                        <Link href={"#"}>Buy Now</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="img-chair ">
                  <Image
                    src={chair2}
                    className="xl:min-h-[195px] xl:min-w-[210px] lg:min-h-[150px] lg:min-w-[160px]"
                    width={210}
                    height={190}
                    alt="chair"
                  />
                </div>
              </div>
            </div>
            {/*  */}
            <div className="col-item p-3 lg:max-w-[33%] lg:basis-1/3 max-w-full basis-full ">
              <div
                className="Charies flex bg-pinkLightColor rounded-md px-4 py-5"
                style={{
                  backgroundImage: `url(/assets/backgroundChair3.png)`,
                  backgroundSize: "cover",
                }}
              >
                <div className="text-chair relative w-[50%] text-center">
                  <div className="absolute top-1/2 translate-y-[-50%]">
                    <p className="text-blackSubText text-sm my-3">
                      Picnic chairs
                    </p>
                    <h4 className="text-blackText font-bold">
                      Buy 2 Get 1 Free{" "}
                    </h4>
                    <div className="flex items-center justify-center my-3">
                      <span className="text-primary mx-1 cursor-pointer">
                        <RiShoppingBasket2Line />
                      </span>
                      <span className="text-primary text-sm font-bold mx-1 underline">
                        <Link href={"#"}>Buy Now</Link>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="img-chair ">
                  <Image
                    src={chair3}
                    className="xl:min-h-[195px] xl:min-w-[210px] lg:min-h-[150px] lg:min-w-[160px]"
                    width={210}
                    height={190}
                    alt="chair"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <Kampa />
        </div>
        {/* Section With Multi-Purpose Chair */}
        <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
          <div className="row-all w-full flex flex-wrap">
            <div className="col-item p-3 xl:max-w-[50%] xl:basis-1/2 max-w-full basis-full">
              <div className="multiChairOffer border border-solid border-[#E1E0E0] rounded-2xl">
                {/* Div With Image Section */}
                <div className="img-multiChair rounded-tl-2xl rounded-tr-2xl relative">
                  <Image
                    src={MultiChair}
                    className="w-full h-full"
                    width={625}
                    height={340}
                    alt="multi-chair"
                  />
                  <div className="absolute top-5 w-full flex items-center px-6">
                    <button className="text-white bg-secondary text-sm font-normal rounded-md px-6 py-2  cursor-pointer">
                      15% off
                    </button>
                    <span className="font-medium text-sm text-blackText absolute right-7">
                      <FaHeart className="text-[#F13A3A] text-3xl cursor-pointer" />
                    </span>
                  </div>
                </div>
                {/* Div With Text Section */}
                <div className="caption-multiChair px-4 py-3">
                  {/* Div With Texe & Stars Icon */}
                  <div className="caption-rate flex items-center">
                    <h3 className="xl:text-2xl md:text-base text-sm min-h-10">
                      ALSANIDI, Ground Camping and Garden Chair
                    </h3>
                    <div className="min-h-10 flex grow ">
                      <div className="rate-icon flex grow items-start lg:items-center justify-end xl:mb-6 mb-0 h-full">
                        <Image
                          src={stars}
                          className=""
                          width={130}
                          height={30}
                          alt="stars"
                        />
                        <span className="text-xs text-graySubText">(30)</span>
                      </div>
                    </div>
                  </div>
                  {/* Div With Price */}
                  <div className="my-2">
                    <span className="text-2xl text-secondary font-bold">
                      199 SR
                    </span>
                    <span className="text-base text-graySubText font-normal mx-3 line-through">
                      220 SR
                    </span>
                  </div>
                  {/* Div With Time Squries  */}
                  <div className="time-end justify-center flex my-6">
                    <div className="squre-time lg:p-1 p-0 mx-2 text-center lg:w-20 lg:h-20 w-16 h-16 rounded-md border-2 border-solid border-secondary">
                      <p className="text-primary lg:text-3xl text-xl">10</p>
                      <span className="text-blackSubText lg:text-sm text-xs">
                        Days
                      </span>
                    </div>
                    <div className="squre-time lg:p-1 p-0 mx-2 text-center lg:w-20 lg:h-20 w-16 h-16 rounded-md border-2 border-solid border-secondary">
                      <p className="text-primary lg:text-3xl text-xl">12</p>
                      <span className="text-blackSubText lg:text-sm text-xs">
                        Hrs
                      </span>
                    </div>
                    <div className="squre-time lg:p-1 p-0 mx-2 text-center lg:w-20 lg:h-20 w-16 h-16 rounded-md border-2 border-solid border-secondary">
                      <p className="text-primary lg:text-3xl text-xl">58</p>
                      <span className="text-blackSubText lg:text-sm text-xs">
                        Min
                      </span>
                    </div>
                    <div className="squre-time lg:p-1 p-0 mx-2 text-center lg:w-20 lg:h-20 w-16 h-16 rounded-md border-2 border-solid border-secondary">
                      <p className="text-primary lg:text-3xl text-xl">19</p>
                      <span className="text-blackSubText lg:text-sm text-xs">
                        Sec
                      </span>
                    </div>
                  </div>
                  {/* Div With Button Add To Cart  */}
                  <div className="stock-aviliable flex items-center relative my-4">
                    <p className="text-[#22C559] text-sm lg:text-xl flex grow cursor-pointer">
                      Stock Available (20)
                    </p>
                    <div className="">
                      <button className="text-primary text-base font-normal rounded-md lg:px-12 px-4 lg:py-3 py-1 border-2 border-solid border-primary hover:bg-primary hover:text-white transition-all duration-500 ease-in-out cursor-pointer">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-item p-3 xl:max-w-[50%] xl:basis-1/2 max-w-full basis-full">
              <div className="row-all w-full flex flex-wrap">
                <div className="col-item pr-3 xl:max-w-[50%] xl:basis-1/2 max-w-full basis-full">
                  {DataMultiChairs.map((item, index) => (
                    <div
                      key={index}
                      className="multi-chair flex cursor-pointer border border-solid border-[#E1E0E0] rounded-2xl p-3 mb-6"
                    >
                      <Image
                        src={item.src}
                        className=""
                        width={65}
                        height={60}
                        alt="multi-chair"
                      />
                      <div className="caption-multi-chair mx-4">
                        <h4 className={`text-base font-medium`}>
                          {item.title}
                        </h4>
                        <span className="text-lg text-secondary font-bold">
                          {item.newPrice}
                        </span>
                        <span className="text-xs text-graySubText font-normal mx-3 line-through">
                          {item.oldPrice}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-item pl-3 xl:max-w-[50%] xl:basis-1/2 max-w-full basis-full hidden xl:block">
                  {DataMultiChairs.map((item, index) => (
                    <div
                      key={index}
                      className="multi-chair flex cursor-pointer border border-solid border-[#E1E0E0] rounded-2xl p-3 mb-6"
                    >
                      <Image
                        src={item.src}
                        className=""
                        width={65}
                        height={60}
                        alt="multi-chair"
                      />
                      <div className="caption-multi-chair mx-4">
                        <h4 className={`text-base font-medium`}>
                          {item.title}
                        </h4>
                        <span className="text-lg text-secondary font-bold">
                          {item.newPrice}
                        </span>
                        <span className="text-xs text-graySubText font-normal mx-3 line-through">
                          {item.oldPrice}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <ProductHome titleProductCategory="Picnic chairs" swiperNum={3} />
        </div>
        {/* Section With Special Offer */}
        <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8 flex items-center">
          <div className="photo-discount w-full h-full flex justify-center shadow-[0_1px_4px_1px] shadow-[#CAC9C9]  rounded-2xl">
            <Image
              src={specialOffer}
              className="w-full"
              width={1200}
              height={420}
              alt="Special Offer"

            />
          </div>
        </div>
        <div className="lg:block hidden">
          <Kampa />
        </div>
        <div className="lg:block hidden">
          <ProductHome titleProductCategory="Mat" swiperNum={4} />
        </div>
        {/* new Kampa */}
        {/* <div className="kampa container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
          <div className="row-all w-full flex flex-wrap">
            <div className="col-item p-3 lg:max-w-[50%] lg:basis-1/2 max-w-full basis-full ">
              <div
                className="main-kampa  flex bg-primary overflow-hidden rounded-lg"
                style={{ backgroundImage: `url(${backgroundKampa})` }}
              >
                <div className="text-kampa xl:basis-1/3 basis-1/2 px-6 text-center">
                  <Image
                    src={logoKmpa1}
                    className="mx-auto max-h-[60px] mt-12"
                    height={60}
                    alt="kampa"
                  />
                  <p className="text-white text-xs my-5 leading-6">
                    Lorem Ipsum has been the industry standard dummy text ever
                    since the 1500s
                  </p>
                  <button className="text-sm bg-white text-primary font-normal rounded-md px-3 py-2 mb-12 cursor-pointer">
                    Shop Now
                  </button>
                </div>
                <div className="img-kampa xl:basis-2/3 basis-1/2">
                  <div className="overflow-hidden  h-[100%]">
                    <div className="h-[100%] relative">
                      <Image
                        src={modifyKampa1}
                        className="h-[100%]"
                        alt="kampa"
                      />
                    <Image src={line} className="h-[100%] absolute top-0" alt="kampa" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

    </main>
  );

}

