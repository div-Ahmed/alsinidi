import { useContext } from "react";
import { iProductInCart, iUser } from "./dataModels";
import products from "./products_db";
import GlobalContext from "./globalContext";
// const { AllProducts } = useContext(GlobalContext);
// const allProducts=AllProducts?? []; // Default to an empty array if AllProducts is null or undefined
const G = {
  session: {
    user: {
      id: 1,
      fullName: "Faisal alotaibi",
      firstName: "Faisal",
      lastName: "alotaibi",
      email: "faysl4014@gmail.com",
      phone: "966544114041",
      country: "Qatar",
      createdAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    } as iUser,
  },
  standAlonePages:['/auth/sign-in','/auth/sign-up'],
  cartProducts: products.slice(0,4).map(product => ({...product,quantity:1})) as iProductInCart[],
};
export default G;
