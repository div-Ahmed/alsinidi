
"use client";

import { createContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import G from "./globalData";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

interface IGlobalContext {
    G_productsInCart: any[];
    setG_ProductsInCart: Dispatch<SetStateAction<any[]>>;
    AllProducts: any[] | null; // Adjust the type based on your actual data structure
    setAllProducts: Dispatch<SetStateAction<any[] | null>>;
    AllCategories: any[] | null;
    setAllCategories: Dispatch<SetStateAction<any[] | null>>;
    AllBrands: any[] | null;
    setAllBrands: Dispatch<SetStateAction<any[] | null>>;
    AllCountries: any[] | null;
    setAllCountries: Dispatch<SetStateAction<any[] | null>>;
    AllColors: any[] | null;
    setAllColors: Dispatch<SetStateAction<any[] | null>>;
    fetchSubCategoriesProducts: (catId: string) => Promise<Idata>;
    setUser: Dispatch<SetStateAction<any | null>>;
    user: any | null;
    userCart: any[] | null;
    setUserCart: Dispatch<SetStateAction<any[] | null>>;
}
interface Idata {
    data: any[];
}

const GlobalContext = createContext<IGlobalContext>({
    G_productsInCart: [],
    setG_ProductsInCart: () => { },
    AllProducts: null,
    setAllProducts: () => { },
    AllCategories: null,
    setAllCategories: () => { },
    AllBrands: null,
    setAllBrands: () => { },
    AllCountries: null,
    setAllCountries: () => { },
    AllColors: null,
    setAllColors: () => { },
    fetchSubCategoriesProducts: () => Promise.resolve({ data: [] }),
    setUser: () => { },
    user: null,
    userCart: null,
    setUserCart: () => { },
});

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const [G_productsInCart, setG_ProductsInCart] = useState(G.cartProducts);
    const [userCart, setUserCart] = useState<any[] | null>(null);
    const [AllProducts, setAllProducts] = useState<any[] | null>(null);
    const [AllCategories, setAllCategories] = useState<any[] | null>(null);
    const [AllBrands, setAllBrands] = useState<any[] | null>(null);
    const [AllCountries, setAllCountries] = useState<any[] | null>(null);
    const [AllColors, setAllColors] = useState<any[] | null>(null);
    const [user, setUser] = useState<any | null>(null);
    // const [SingleSubCategoryProducts, setSingleSubCategoryProducts] = useState<any[] | null>(null);
    useEffect(() => {

        const fetchProducts = async () => {
            const token = localStorage.getItem('userToken');
            if (!token) {
                return;
            }

            try {
                const decodedToken: any = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp < currentTime) {
                    console.log("Token is expired. Please log in again.");
                    return;
                }

                const response = await fetch(`http://alsanidi.metatesting.online/public/api/cart/items`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "X-LOCALE": "en",
                        'Authorization': `Bearer ${token}`
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setUserCart(data);
                    // console.log(data, "data");
                } else {
                    const errorData = await response.json();
                    router.push("/auth/sign-in");
                }
            } catch (error) {
                console.log("Invalid token. Please log in.");
                return;
            }
        }
        fetchProducts();
    }, []);

    // Fetch Products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://alsanidi.metatesting.online/public/api/products`, {
                    headers: {
                        "X-LOCALE": "en",
                    },
                });
                setAllProducts(response.data.data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);

    // Fetch Categories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`http://alsanidi.metatesting.online/public/api/categories`, {
                    headers: {
                        "X-LOCALE": "en",
                    },
                });
                setAllCategories(response.data);
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };
        fetchCategories();
    }, []);

    // Fetch Brands
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get(`http://alsanidi.metatesting.online/public/api/brands`, {
                    headers: {
                        "X-LOCALE": "en",
                    },
                });
                setAllBrands(response.data);
            } catch (error) {
                console.error("Failed to fetch brands:", error);
            }
        };
        fetchBrands();
    }, []);
    // Fetch Countries
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get(`http://alsanidi.metatesting.online/public/api/countries`, {
                    headers: {
                        "X-LOCALE": "en",
                    },
                });
                setAllCountries(response.data);
            } catch (error) {
                console.error("Failed to fetch countries:", error);
            }
        };
        fetchCountries();
    }, []);

    // Fetch Colors
    useEffect(() => {
        const fetchColors = async () => {
            try {
                const response = await axios.get(`http://alsanidi.metatesting.online/public/api/colors`, {
                    headers: {
                        "X-LOCALE": "en",
                    },
                });
                setAllColors(response.data);
            } catch (error) {
                console.error("Failed to fetch colors:", error);
            }
        };
        fetchColors();
    }, []);
    const fetchSubCategoriesProducts = async (catId: string) => {
        try {
            const response = await axios.get(`http://alsanidi.metatesting.online/public/api/products?category_id=${catId}`, {
                headers: {
                    "X-LOCALE": "en",
                },
            });
            return response.data;
        } catch (error) {
            console.error("Failed to fetch colors:", error);
        }
    };



    // console.log(AllProducts);
    return (
        <GlobalContext.Provider
            value={{
                G_productsInCart,
                setG_ProductsInCart,
                AllProducts,
                setAllProducts,
                AllCategories,
                setAllCategories,
                AllBrands,
                setAllBrands,
                AllCountries,
                setAllCountries,
                AllColors,
                setAllColors,
                fetchSubCategoriesProducts,
                setUser,
                user,
                userCart,
                setUserCart
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;
