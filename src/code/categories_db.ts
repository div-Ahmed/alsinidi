import { iCategory } from "./dataModels";
const categories: iCategory[] = [
  { id: 1, name: "Electronics", imgUrl: "https://placehold.co/100/gray/white" },
  { id: 2, name: "Laptops", parentId: 1, imgUrl: "https://placehold.co/100/red/white" },
  { id: 3, name: "Phones", parentId: 1, imgUrl: "https://placehold.co/100/yellow/white" },
  { id: 4, name: "Tablets", parentId: 1, imgUrl: "https://placehold.co/100/purple/white" },
  { id: 5, name: "Accessories", parentId: 1, imgUrl: "https://placehold.co/100/black/white" },
  { id: 6, name: "Home Appliances", imgUrl: "https://placehold.co/100/green/white" },
  { id: 7, name: "Refrigerators", parentId: 6, imgUrl: "https://placehold.co/100/pink/white" },
  { id: 8, name: "Washing Machines", parentId: 6, imgUrl: "https://placehold.co/100/red/white" },
  { id: 9, name: "Kitchen Appliances", parentId: 6, imgUrl: "https://placehold.co/100/gray/white" },
  { id: 10, name: "Audio & Video", parentId: 1, imgUrl: "https://placehold.co/100/purple/white" },
  { id: 11, name: "Furniture", imgUrl: "https://placehold.co/100/brown/white" },
  { id: 12, name: "Living Room", parentId: 11, imgUrl: "https://placehold.co/100/blue/white" },
  { id: 13, name: "Bedroom", imgUrl: "https://placehold.co/100/black/white" },
  { id: 14, name: "Office", parentId: 11, imgUrl: "https://placehold.co/100/white/black" },
  { id: 15, name: "Outdoor", parentId: 11, imgUrl: "https://placehold.co/100/green/white" },
  { id: 16, name: "Fitness", imgUrl: "https://placehold.co/100/orange/white" },
  { id: 17, name: "Exercise Equipment", parentId: 16, imgUrl: "https://placehold.co/100/blue/white" },
  { id: 18, name: "Wearables", parentId: 3, imgUrl: "https://placehold.co/100/red/white" },
  { id: 19, name: "Gaming", imgUrl: "https://placehold.co/100/purple/white" },
  { id: 20, name: "Consoles", parentId: 19, imgUrl: "https://placehold.co/100/black/white" },
];
export default categories