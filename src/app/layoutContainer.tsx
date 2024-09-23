"use client";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AppBar from "@/components/app-bar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import G from "@/code/globalData";
import Breadcrumb from "@/components/Breadcrumb";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { CiHome } from "react-icons/ci";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaShirt } from "react-icons/fa6";
import { MdOutlineManageAccounts, MdOutlineShoppingCart } from "react-icons/md";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutContainer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en" dir="ltr">
      <head>
        <title>Alsanidi Store</title>
        <link rel="icon" href="/assets/favicon.png" />
      </head>
      <body className={inter.className}>
        {
          !G.standAlonePages.includes(path) && (
            <nav>
              <Navbar />
              <AppBar />
              <Breadcrumb />
            </nav>
          )
        }
        <main className="bg-mainBg pb-5">
          {children}
          <div className="fixed block md:hidden z-[9999] bottom-10 left-0 right-0">
            <Dock direction="middle" className="bg-white">
              <DockIcon>
                <Icons.home className="size-6" />
              </DockIcon>
              <DockIcon>
                <Icons.category className="size-6" />
              </DockIcon>
              <DockIcon>
                <Icons.fashion className="size-6" />
              </DockIcon>
              <DockIcon>
                <Icons.profile className="size-6" />
              </DockIcon>
              <DockIcon>
                <Icons.cart className="size-6" />
              </DockIcon>
            </Dock>
          </div>
        </main>
        {
          !G.standAlonePages.includes(path) && (
            <Footer />
          )
        }
      </body>
    </html>
  );
}
const Icons = {
  home: (props: any) => (
    <CiHome className="text-2xl" />
  ),
  category: (props: any) => (
    <BiSolidCategoryAlt />
  ),
  fashion: (props: any) => (
    <FaShirt />
  ),
  profile: (props: any) => (
    <MdOutlineManageAccounts />
  ),
  cart: (props: any) => (
    <MdOutlineShoppingCart />
  ),
};
