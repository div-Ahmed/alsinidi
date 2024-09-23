import Image from "next/image";
import Link from "next/link";
import imgOffer1 from "/public/assets/offer1.png";
import imgOffer2 from "/public/assets/offer2.png";
import imgOffer3 from "/public/assets/offer3.png";
import imgOffer4 from "/public/assets/offer4.png";
import imgOffer5 from "/public/assets/offer5.png";
import imgOffer6 from "/public/assets/offer6.png";
import imgOffer7 from "/public/assets/offer7.png";
import shopHeader from "/public/assets/shop-header.png";
import photoHeader1 from "/public/assets/header-photo1.png";
import photoHeader2 from "/public/assets/header-photo2.png";

const DataOffers = [
  {
    src: imgOffer1,
    title: "DPT, Foldable",
    num: "15 items left",
  },
  {
    src: imgOffer2,
    title: "Towing Rope/Cable",
    num: "18 items left",
  },
  {
    src: imgOffer3,
    title: "Trailler Big",
    num: "20 items left",
  },
  {
    src: imgOffer4,
    title: "DOMETIC, Ice box",
    num: "5 items left",
    active: true,
  },
  {
    src: imgOffer5,
    title: "Camping bag, Sandy",
    num: "6 items left",
  },
  {
    src: imgOffer6,
    title: "DOMETIC, Ice box ",
    num: "20 items left",
    active: true,
  },
  {
    src: imgOffer7,
    title: "Trailler Big",
    num: "15 items left",
  },
];

const Header = () => {
  return (
    <div className="header container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
      <div className="row-all w-full flex flex-wrap">
        <div className="col-item p-3 lg:max-w-[25%] lg:basis-1/4 hidden xl:block ">
          <div
            style={{ scrollbarWidth: "thin", scrollbarColor: "#138AA8" }}
            className="offers-header max-h-[620px] overflow-auto bg-white shadow-[0_1px_4px_1px] shadow-[#CAC9C9] rounded-md px-3 py-4"
          >
            <div className="relative flex items-center">
              <span className="font-medium text-lg text-blackText">
                Best Offers
              </span>
              <button className="text-secondary text-sm absolute right-0 cursor-pointer">
                See All
              </button>
            </div>
            {DataOffers.map((item, index) => (
              <div
                key={index}
                className="product-offer flex mt-4 cursor-pointer"
              >
                <Image
                  src={item.src}
                  className=""
                  width={60}
                  height={60}
                  alt="logo"
                />
                <div className="caption-offer mx-4">
                  <p
                    className={`text-base font-medium ${
                      item.active ? "text-primary" : "text-blackText"
                    }`}
                  >
                    {item.title}
                  </p>
                  <p className="text-sm text-graySubText font-medium">
                    {item.num}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-item p-3 xl:max-w-[50%] xl:basis-1/2 max-w-full basis-full ">
          <div className="shop-now-header bg-bgBrimary rounded-2xl">
            <div className="content-shop-header p-4 pb-6">
              <button className="text-white bg-secondary text-sm px-9 py-2 mt-2 rounded-lg">
                20% off
              </button>
              <Image
                src={shopHeader}
                className="mx-auto"
                width={585}
                height={445}
                alt="header-shop"
              />
              <div className=" text-center">
                <h2 className="text-blackText text-2xl font-medium mb-2">
                  Carcass grill, Silver
                </h2>
                <p className="text-primary text-lg font-medium cursor-pointer">
                  <Link href={"#"}>Shop Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-item p-3 xl:max-w-[25%] xl:basis-1/4 max-w-full basis-full ">
          <div className="photo-header w-full flex flex-wrap xl:block">
            <div className="col-item p-3 max-w-[50%] basis-1/2 xl:max-w-full xl:basis-full">
              <div className="frist-photo  min-h-[240px] bg-yellowLightColor text-center rounded-2xl py-5">
                <Image
                  src={photoHeader1}
                  className="mx-auto"
                  width={210}
                  height={210}
                  alt="photoHeader"
                />
                <h3 className="text-blackText text-base md:text-lg xl:text-2xl font-normal">
                  Small Air conditioner
                </h3>
              </div>
            </div>
            <div className="col-item p-3 max-w-[50%] basis-1/2 xl:max-w-full xl:basis-full">
              <div className="second-photo min-h-[240px] bg-pinkLightColor text-center rounded-2xl py-6 lg:py-5">
                <Image
                  src={photoHeader2}
                  className="mx-auto"
                  width={210}
                  height={210}
                  alt="photoHeader"
                />
                <h3 className="text-blackText text-base md:text-lg xl:text-2xl font-normal">
                  Specialized Pot
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
