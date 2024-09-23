import Image from "next/image";
import img from "/public/assets/logo-en.png";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import {
  FaArrowRight,
  FaSnapchat,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import BrandImg from "/public/assets/BrandImg.png";
import lastFooterImg from "/public/assets/lastFooterImg.png";
import { RiShoppingBasket2Line } from "react-icons/ri";

const itemsFooter = [
  {
    title: "Information",
    items: [
      {
        title: "About company",
        path: "/About_company",
      },
      {
        title: "Terms & Conditions",
        path: "/Terms_Conditions",
      },
      {
        title: "Certificate & registration",
        path: "/Certificate_registration",
      },
      {
        title: "Warranty Policy",
        path: "/Warranty_Policy",
      },
      {
        title: "Retrieval & policy",
        path: "/Retrieval_policy",
      },
      {
        title: "Privacy Policy",
        path: "/Privacy_Policy",
      },
    ],
  },
  {
    title: "Customer Service",
    items: [
      {
        title: "Contact Us",
        path: "./contact_us",
      },
      {
        title: "Returns",
        path: "./Returns",
      },
      {
        title: "Help Center",
        path: "./Help_Center",
      },
      {
        title: "Site Map",
        path: "./Site_Map",
      },
      {
        title: "Branches",
        path: "./Branches",
      },
      {
        title: "Wholesale sales",
        path: "./whole_sale",
      },
    ],
  },
  {
    title: "Other Links",
    items: [
      {
        title: "My Account",
        path: "./profile",
      },
      {
        title: "Order History",
        path: "./Order_History",
      },
      {
        title: "Wish List",
        path: "./Wish_List",
      },
      {
        title: "Brands",
        path: "./Brands",
      },
      {
        title: "Affiliate",
        path: "./Affiliate",
      },
      {
        title: "Specials",
        path: "./Specials",
      },
    ],
  },
];

const socialIcons = [
  { component: CiFacebook },
  { component: CiInstagram },
  { component: FaWhatsapp },
  { component: FaSnapchat },
  { component: CiTwitter },
  { component: CiYoutube },
  { component: FaTelegramPlane },
];

const Footer = () => {
  return (
    <div className="bg-bgBrimary">
      {/* Button Cart */}
      <div className="relative top-[-65px] lg:block hidden">
        <div className="h-16 w-16 absolute top-5 right-12 rounded-full bg-secondary text-white flex justify-center items-center cursor-pointer">
          <RiShoppingBasket2Line className=" text-white text-5xl " />
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
        <div className="row-all w-full flex flex-wrap">
          {/* footer logo */}
          <div className="col-item p-3 xl:max-w-[25%] xl:basis-1/4 lg:max-w-[33%] lg:basis-2/6 max-w-full basis-full ">
            <div className="content">
              <Image
                src={img}
                className="mb-5"
                width={190}
                height={40}
                alt="logo"
                priority
              />
              <h4 className="text-blackText mb-2 font-medium">
                Wild is your home
              </h4>
              <p className="text-graySubText mb-10 text-sm leading-6">
                The first name in the Kingdom of Saudi Arabia and the Arab world
                in trekking supplies, and camping gear
              </p>
              <div className="copyRight border-t-2 border-solid border-graySubText py-3 text-xs">
                © All rights reserved to alsanidi Company 2023
              </div>
            </div>
          </div>
          {/* footer links */}
          {itemsFooter.map((itemFooter, index) => (
            <div
              key={index}
              className="col-item  p-3 xl:max-w-[16%] xl:basis-1/6 lg:max-w-[33%] lg:basis-2/6 max-w-full basis-full "
            >
              <div className="content">
                <h4 className="text-blackText mb-8 font-medium">
                  {itemFooter.title}
                </h4>
              </div>
              {itemFooter.items.map((item, index) => (
                <ul key={index} className="links">
                  <li className="mb-3 text-primary text-sm font-bold">
                    <Link className="cursor-pointer" href={item.path}>
                      {item.title}
                    </Link>
                  </li>
                </ul>
              ))}
            </div>
          ))}
          {/* footer social icon */}
          <div className="col-item p-3 xl:max-w-[25%] xl:basis-1/4 lg:max-w-[33%] lg:basis-2/6 max-w-full basis-full border-t border-solid border-graySubText lg:border-0">
            <div className="content">
              <h4 className="text-blackText mx-2 mb-8 font-medium">
                Social Media
              </h4>
              <div className="social flex flex-wrap">
                {socialIcons.map((icon, index) => {
                  const IconComponent = icon.component;
                  return (
                    <Link key={index} className="cursor-pointer" href="#">
                      <div className="icon-footer p-1 border-2 border-solid border-primary mx-2 mb-2 rounded-md">
                        <IconComponent className="text-2xl text-primary" />
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="my-5 mx-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Type Your Email"
                    className="w-full bg-white py-3 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                    <span className="text-sm text-primary font-bold mx-2">
                      Send
                    </span>
                    <FaArrowRight className="text-primary text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f9fafc]">
        <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8 flex items-center">
          <div className="row-all w-full flex flex-wrap items-center">
            <div className="img-footer lg:w-auto w-full">
              <Image
                src={BrandImg}
                className="mb-5"
                width={635}
                height={55}
                alt="BrandsLogo"
                priority
              />
            </div>
            <div className="last-img-footer flex grow justify-center lg:justify-end">
              <Image
                src={lastFooterImg}
                className="mb-5"
                width={40}
                height={40}
                alt="LastBrandsLogo"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
