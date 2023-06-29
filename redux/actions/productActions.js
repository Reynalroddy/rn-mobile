// import axios from "axios";
import { server } from "../store";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export const getAllProducts = (keyword, category) => async (dispatch) => {
  // try {
    // dispatch({
    //   type: "getAllProductsRequest",
    // });
    // let config = {
    //   method: 'get',
    //   maxBodyLength: Infinity,
    //   url: `${server}/product/all`,
    //   headers: { }
    // };
    
    // axios.request(config)
    // .then((response) => {
      
    //   dispatch({
    //   type: "getAllProductsSuccess",
    //   payload: response.data.products,
    // });
    // })
    // .catch((error) => {
    //   console.log(error);
    //   dispatch({
    //         type: "getAllProductsFail",
    //         payload: error.response.data.message,
    //       });
    // });



    // ................

    dispatch({
      type: "getAllProductsRequest",
    });
    
    let config = {
      method: 'GET',
      headers: {},
    };
    
    fetch(`${server}/product/all`, config)
      .then((response) => {
        if (!response.ok) {
          // console.log(response)
          // throw new Error(response.statusText);
          dispatch({
            type: "getAllProductsFail",
            payload: 'network error',
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log(data)
        dispatch({
          type: "getAllProductsSuccess",
          payload: data.products,
        });
      })
      .catch((error) => {
        console.log(error);
        Toast.show({
          type: "error",
          text1: `${error.message}`,
        });
        dispatch({
          type: "getAllProductsFail",
          payload: error.message,
        });
      });
    
};

     

export const getAdminProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAdminProductsRequest",
    });
    const { data } = await axios.get(`${server}/product/admin`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAdminProductsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "getAdminProductsFail",
      payload: error.response.data.message,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getProductDetailsRequest",
    });

    const { data } = await axios.get(`${server}/product/single/${id}`, {
      withCredentials: true,
    });

    dispatch({
      type: "getProductDetailsSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "getProductDetailsFail",
      payload: error.response.data.message,
    });
  }
};