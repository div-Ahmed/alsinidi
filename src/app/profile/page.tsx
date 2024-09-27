"use client";
import * as tabContent from "./tabsContent/";
import DynamicBiIcons from "@/components/dynamic_bi_Icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "@/lib/auth";
// import { useSession, getSession } from 'next-auth/react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState("general");
  const TabContent: { [key: string]: () => JSX.Element } = tabContent;
  const [ActiveContent, setActiveContent] = useState<
    (() => JSX.Element) | null
  >(null); // Initialize as null
  const router = useRouter();

  const tabs = [
    {
      id: "general",
      title: "Edit your account information",
      icon: "BiSolidPencil",
    },
    { id: "password", title: "Change your password", icon: "BiSolidLock" },
    { id: "address", title: "Address Book", icon: "BiCurrentLocation" },
    { id: "returns", title: "Returns", icon: "BiRepeat" },
    { id: "orders", title: "Orders", icon: "BiSolidShoppingBag" },
    { id: "wishList", title: "Wish List", icon: "BiSolidHeart" },
  ];

  useEffect(() => {
    setActiveContent(() => TabContent[activeTab]); // Set initial ActiveContent
  }, [TabContent, activeTab]);

  // useEffect(() => {
  //   if (!isAuthenticated()) {
  //     router.push('/sign-in');
  //   }
  // }, [router]);

  return (
    <main dir="ltr">
      <div className="container mx-auto px-3 md:px-6 py-12">
        <div className="flex flex-wrap">
          <div className="lg:basis-1/4 basis-full mb-3">
            {tabs.map((tab) => (
              <div
                onClick={() => setActiveTab(tab.id)}
                role="button"
                key={tab.id}
                className={`cursor-pointer hover:bg-primary hover:text-white transition ease-in-out font-medium text-sm mb-4 p-3 rounded-lg flex items-center ${activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-bgBrimary text-primary"
                  }`}
              >
                <DynamicBiIcons iconName={tab.icon} className="text-lg" />
                <span className="px-3">{tab.title}</span>
              </div>
            ))}
            <button
              onClick={logout}
              className="cursor-pointer bg-pinkLightColor text-redColor font-medium text-sm p-3 rounded-lg flex items-center w-full"
            >
              <DynamicBiIcons iconName="BiLogOut" className="text-lg" />
              <span className="px-3">Log Out</span>
            </button>
          </div>
          <div className="lg:basis-3/4 basis-full">
            <div className="ltr:lg:ml-6 rtl:lg:mr-6 mx-0">

              {ActiveContent && <ActiveContent />}{" "}
              {/* Render ActiveContent if it's not null */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
