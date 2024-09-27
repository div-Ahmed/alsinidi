"use client";

import { useContext, useEffect, useState } from "react";
import { MdAddShoppingCart, MdOutlineMinimize } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import heartWhite from "/public/assets/heartWhite.png";
import heartRed from "/public/assets/heartRed.png";
import GlobalContext from "@/code/globalContext";
import Image from "next/image";
import { jwtDecode } from "jwt-decode";
import { getToken } from "@/lib/auth";
import Link from "next/link";
import WishlistContext from "@/Context/WishlistContext";
const ProductCardCol = ({
  product,
}: {
  product: any;
}) => {
  const [counts, setCounts] = useState(0);
  const [activeCart, setActiveCart] = useState(false);
  const [activeHearts, setActiveHearts] = useState(false);
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  const [wishlistMessage, setWishlistMessage] = useState<string | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const { userFavorites, fetchFavorites } = useContext(WishlistContext);
  console.log(getToken(), "gggg")

  useEffect(() => {

    if (Array.isArray(userFavorites)) {
      const isInWishlist = userFavorites.some(item => item.id === product.id);
      setActiveHearts(isInWishlist);
    }
  }, [userFavorites, product.id]
  )

  const handleAddToWishlist = async (productId: number) => {
    const token = getToken();
    if (!token) {
      setWishlistMessage("Please log in to add items to your wishlist.");
      return;
    }

    setIsAddingToWishlist(true);
    try {
      const response = await fetch(`http://alsanidi.metatesting.online/public/api/favorites`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "X-LOCALE": "en",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ product_id: productId })
      });

      if (response.ok) {
        setActiveHearts(!activeHearts);
        setWishlistMessage(activeHearts ? "Removed from wishlist" : "Added to wishlist");
        // Fetch updated wishlist after modification
        fetchFavorites();
      } else {
        const errorData = await response.json();
        setWishlistMessage(errorData.message || "Failed to update wishlist");
      }
    } catch (error) {
      console.error('Error updating wishlist:', error);
      setWishlistMessage("An error occurred. Please try again.");
    } finally {
      setIsAddingToWishlist(false);
      setTimeout(() => setWishlistMessage(null), 3000);
    }
  };


  // handelIncrement
  const handleIncrement = async () => {
    const token = getToken();
    if (!token) {
      setWishlistMessage("Please log in to add items to your wishlist.");
      return;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        console.log("Token is expired. Please log in again.");
        setWishlistMessage("Your session has expired. Please log in again.");
        return;
      }

      const response = await fetch(`http://alsanidi.metatesting.online/public/api/cart/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "X-LOCALE": "en",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ product_id: product.id })
      });

      if (response.ok) {
        setCounts(counts + 1);
      } else {
        const errorData = await response.json();
        setWishlistMessage(errorData.message || "Failed to update cart");
      }
    } catch (error) {
      console.log("Invalid token. Please log in.");
      setWishlistMessage("Invalid token. Please log in.");
      return;
    }

    setCounts(counts + 1);
  };

  const handleDecrement = async () => {
    setCounts(
      counts > 0 ? counts - 1 : 0
    );
    if (counts === 0) {
      setActiveCart(false);
    }
    // const token = localStorage.getItem('userToken');
    const token = getToken();
    if (!token) {
      setWishlistMessage("Please log in to add items to your wishlist.");
      return;
    }

    try {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        console.log("Token is expired. Please log in again.");
        setWishlistMessage("Your session has expired. Please log in again.");
        return;
      }

      const response = await fetch(`http://alsanidi.metatesting.online/public/api/cart/items/${product.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "X-LOCALE": "en",
          'Authorization': `Bearer ${token}`
        },
      });

      if (response.ok && counts > 0) {
        setCounts(counts - 1);
      } else {
        const errorData = await response.json();
        setWishlistMessage(errorData.message || "Failed to update cart");
      }
    } catch (error) {
      console.log("Invalid token. Please log in.");
      setWishlistMessage("Invalid token. Please log in.");
      return;
    }


  };

  const handleActiveIconHeart = () => {
    setActiveHearts(
      !activeHearts
    );
  };


  const handleActiveCart = () => {
    // Toggle the active cart state
    setActiveCart(
      !activeCart
    );

    // Set a timeout to revert the button state after 1 second
    const id = window.setTimeout(() => {
      setActiveCart(
        !activeCart
      );
    }, 1000);

    setTimeoutId(id); // Save timeout ID for later clearing
  };

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear the timeout if the user hovers over the button
      setTimeoutId(null); // Reset the timeout ID
    }
  };

  const handleMouseLeave = () => {
    // Re-trigger the timeout on mouse leave if not already active
    const id = window.setTimeout(() => {
      setActiveCart(
        !activeCart
      );
    }, 3000);

    setTimeoutId(id);
  };

  return (
    <>
      <div id={`${product.id}`} className="product-content bg-white border-2 border-solid border-lightGrayColor rounded-md p-3">
        <div className="img-product-home relative flex justify-center ">
          <Image
            src={product.images[0].image_path}
            className="m-5 mt-7"
            width={200}
            height={200}
            alt="product-home"
          />
          {/* cart */}
          <div
            className={`add-to-cart ${activeCart ? 'w-[80%]' : 'w-fit'} bg-white group hover:bg-primary transition-all duration-500 ease-in-out absolute bottom-3  ltr:right-0 rtl:left-0 drop-shadow-custom rounded-lg`}
          >
            {
              activeCart ? (
                <button
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={() => handleMouseLeave()}
                  className="text-primary transition-all group duration-500 ease-in-out text-base font-normal justify-center items-center w-full h-full rounded-md flex border-2 border-solid border-primary hover:bg-primary hover:text-white cursor-pointer"
                >
                  <span
                    className="flex justify-center items-center mx-1 cursor-pointer"
                    onClick={() => handleDecrement()}
                  >
                    <MdOutlineMinimize
                      className={`transition-all duration-500 ease-in-out text-xl  mb-3  text-primary group-hover:text-white
                  `}
                    />
                  </span>
                  <span className="flex grow justify-center items-center cursor-pointer">
                    <span className="text-xl font-bold">{counts}</span>
                  </span>
                  <span
                    className="flex justify-center items-center me-1 cursor-pointer"
                    onClick={() => handleIncrement()}
                  >
                    <GoPlus
                      className={`transition-all duration-500 ease-in-out text-xl  text-primary group-hover:text-white
                  `}
                    />
                  </span>
                </button>
              ) : (
                <button
                  className="add-to-cart bg-white hover:bg-primary transition-colors duration-500 ease-in-out p-2 right-0 drop-shadow-custom rounded-lg"
                  onClick={() => handleActiveCart()}
                >
                  <MdAddShoppingCart className="text-2xl text-primary group-hover:text-white" />
                </button>
              )}


          </div>

          {/* heart and out of stock */}
          <div className="absolute top-0 w-full flex justify-between rtl:flex-row-reverse items-center">
            <button
              className={`font-medium text-sm text-blackText p-2 bg-white drop-shadow-custom rounded-lg block ${isAddingToWishlist ? 'opacity-50' : ''}`}
              onClick={() => handleAddToWishlist(product.id)}
              disabled={isAddingToWishlist}
            >
              <Image
                src={activeHearts ? heartRed : heartWhite}
                className="cursor-pointer"
                width={20}
                height={20}
                alt="wishlist-icon"
              />
            </button>
          </div>
        </div>
        <div className="caption-product-home ">
          <h3 className="lg:text-[.8rem] text-xs text-blackSubText font-semibold">
            <Link href={`/product/${product.id}`} className="hover:text-primary underline block"> {product.name} </Link>

          </h3>
          {/* Div With Price */}
          <div className="my-2 ">
            <span className="lg:text-xl text-sm text-secondary font-bold">
              {product.price}
              <span className="text-xs font-medium">SAR</span>
            </span>

          </div>
        </div>
      </div>
      {wishlistMessage && (
        <div className="text-sm text-primary mt-2">
          {wishlistMessage}
        </div>
      )}
    </>
  );
};

export default ProductCardCol;