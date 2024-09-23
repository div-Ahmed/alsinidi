export interface iUser {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  createdAt: string;
  isDefault: boolean;
}

export interface iUserAddress {
  id: number;
  streetName: string;
  address: string;
  city: string;
  country: string;
  zipcode: string;
  phone: string;
  isDefault: boolean;
}

export interface iProduct {
  product: any;
  id: number;
  code: string;
  name: string;
  price: number;
  brand: {
    id: number;
    name: string;
    image_path: string;
  };
  color: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
    level: number;
  };
  images: {
    id: number;
    image_path: string;
  }[];
  stock: number;
  discountPrice?: number;
  currency: string;
  description: string;
  model: string;
  rating: number;  // Add rating property
  reviews: iReview[];  // Add reviews property
  matrial: string;
  size: string;
  SKU: string;
  tags: string[];
  warranty: string;
  // id: number;
  // name: string;
  // price: number;
  // discountPrice: number;
  // currency:string,
  // imagesUrl: {id: number, url: string}[];
  // description: string;
  // model: string;
  // stock: number;
  // categoryId: number;
  // rating: number;
  // matrial: string;
  // color: string;
  // size: string;
  // SKU: string;
  // reviews: iReview[];
  // tags: string[];
  // warranty: string;
}

export interface iProductInCart extends iProduct {
  quantity: number;
  imagesUrl: { id: number, url: string }[];
}

export interface iReview {
  id: number;
  username: string;
  comment: string;
  dateCreated: string;
  rate: number;
}

export interface iCategory {
  // id: number;
  // name: string;
  // parentId?: number;
  // imgUrl: string;
  id: number;
  name: string;
  parentId?: number;
  level?: number;
  imgUrl?: string;
  child?: iCategory[]; // Add child property to represent subcategories
}
// Define the iBrand, iColor, iCategory, iImage, and iProductResponse interfaces

// export interface iBrand {
//   id: number;
//   name: string;
//   image_path: string;
// }

// export interface iColor {
//   id: number;
//   name: string;
// }

// export interface iCategory {
//   id: number;
//   name: string;
//   level: number;
// }

// export interface iImage {
//   id: number;
//   image_path: string;
// }

// export interface iProductData {
//   id: number;
//   code: string;
//   name: string;
//   price: number;
//   brand: iBrand;
//   color: iColor;
//   category: iCategory;
//   images: iImage[];
// }

// export interface iMeta {
//   current_page: number;
//   from: number;
//   last_page: number;
//   links: Array<{
//       url: string | null;
//       label: string;
//       active: boolean;
//   }>;
//   path: string;
//   per_page: number;
//   to: number;
//   total: number;
// }

// export interface iLinks {
//   first: string;
//   last: string;
//   prev: string | null;
//   next: string | null;
// }

// export interface iProductResponse {
//   data: {
//       data: iProductData[];
//       links: iLinks;
//       meta: iMeta;
//   };
//   status: number;
//   statusText: string;
//   headers: {
//       [key: string]: string;
//   };
//   config: {
//       transitional: {
//           silentJSONParsing: boolean;
//           forcedJSONParsing: boolean;
//           clarifyTimeoutError: boolean;
//       };
//       adapter: string[];
//       transformRequest: any[];
//       transformResponse: any[];
//       timeout: number;
//       xsrfCookieName: string;
//       xsrfHeaderName: string;
//       maxContentLength: number;
//       maxBodyLength: number;
//       env: Record<string, any>;
//       headers: {
//           [key: string]: string;
//       };
//       method: string;
//       url: string;
//   };
//   request: Record<string, any>;
// }