
import { addToCart } from "./basketSlice";

export const addcart = async (dispatch, p,qty) => {
    let q = parseInt(qty);
    let pr = parseInt(p.price);
    const it = {
      name: p.name,
      image: p.image.asset._ref,
      price: pr,
      id: p._id,
      quantity: q,
    };
    dispatch(addToCart(it));
    // console.log(it)
  };  

  // https://192.168.68.159aa