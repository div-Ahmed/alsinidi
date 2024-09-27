"use client";

import { createContext, Dispatch, SetStateAction, useState, useEffect } from "react";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { getToken } from "@/lib/auth";
interface IWishlistContext {
    userFavorites: any[] | null;
    setUserFavorites: Dispatch<SetStateAction<any[] | null>>;
    fetchFavorites: () => void;
}
interface Idata {
    data: any[];
}

const WishlistContext = createContext<IWishlistContext>({
    userFavorites: null,
    setUserFavorites: () => { },
    fetchFavorites: () => { }
});

export const WishlistContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [userFavorites, setUserFavorites] = useState<any[] | null>(null);

    const fetchFavorites = async () => {
        const token = getToken();
        console.log(token, "token")
        if (!token) {
            console.log("No token found. User might need to sign in.");
            return;
        }

        try {
            const response = await axios.get("http://alsanidi.metatesting.online/public/api/favorites", {
                headers: {
                    'X-LOCALE': 'en',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                setUserFavorites(response.data);
            }
        } catch (error) {
            console.error("Failed to fetch favorites", error);
            // Consider handling this error more gracefully, e.g., setting an error state
            // instead of immediately redirecting
            // router.push("/sign-in");
        }
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    // console.log(AllProducts);
    return (
        <WishlistContext.Provider
            value={{
                userFavorites, // Provide the wishlist to the context
                setUserFavorites,
                fetchFavorites
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContext;
