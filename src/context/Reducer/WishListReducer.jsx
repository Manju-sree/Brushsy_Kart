export const WishListReducer=(state,action)=>{
    const {wishListItem,wishListCount}=state;
    const { type, payload } = action;
    
    switch (type) {
        case "ADD_ITEM_TO_WISHLIST":
            return {...state,  wishListItem:[...wishListItem,payload],
                wishListCount: wishListCount+1};

        case "REMOVE_ITEM_FROM_WISHLIST":
            return {...state,wishListItem:wishListItem.filter((item)=>item._id!==payload._id),wishListCount: wishListCount-1}         
        default:
           return state;
    }
}