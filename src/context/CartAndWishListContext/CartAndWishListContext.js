import { createContext, useContext, useReducer } from "react";
import { CartItemReducer,WishListReducer} from "../index";

const CartAndWishListContext = createContext();

const  cartInitialState ={
  cartItem:[],
  cartCount:0
}

const wishListInitialState = {
  wishListItem :[],
  wishListCount:0
}

const CartAndWishListProvider = ({ children }) => {
  const [cartState,cartDispatch]=useReducer(CartItemReducer,cartInitialState);
  const [wishListState,wishListDispatch]=useReducer(WishListReducer,wishListInitialState);
  return (
    <CartAndWishListContext.Provider value={{ cartState,cartDispatch,wishListState,wishListDispatch}}>
      {children}
    </CartAndWishListContext.Provider>
  );
};
const useCartAndWishList =()=>useContext(CartAndWishListContext);

export {useCartAndWishList,CartAndWishListProvider};
