"use client";


import * as tabContent from "./product_TabsContent";
import { useEffect, useState } from "react";

export default function ProductTabs({ product }: { product: any }) {
  const [activeTab, setActiveTab] = useState("description");
  const TabContent: any = tabContent;
  const [ActiveContent, setActiveContent] = useState<(({ product }: { product: any }) => JSX.Element) | null>(null); // Initialize as null
  const tabs = [
    {
      id: "description",
      title: "Product Description",
    },
    { id: "specification", title: "Specification" },
    { id: "reviews", title: "Reviews" },
    { id: "tags", title: "Tags" },
  ];

  useEffect(() => {
    setActiveContent(() => TabContent[activeTab]); // Set initial ActiveContent
  }, [TabContent, activeTab]);

  return (
    <div className="">
      <div className="flex flex-wrap mb-3 border-b">
        {tabs.map((tab) => (
          <div
            onClick={() => setActiveTab(tab.id)}
            role="button"
            key={tab.id}
            className={`cursor-pointer text-sm pb-3 mb-4 lg:mb-0 flex items-center ${activeTab === tab.id
                ? "text-primary border-b-2 border-primary font-bold"
                : "text-captionColor"
              }`}
          >
            <span className="px-3">{tab.title}</span>
          </div>
        ))}
      </div>
      <div className="lg:basis-3/4 basis-full">
        <div className="">
          {ActiveContent && <ActiveContent product={product} />}{" "}
          {/* Render ActiveContent if it's not null */}
        </div>
      </div>
    </div>
  );
}
