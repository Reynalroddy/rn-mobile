
// import axios from "axios";
// import { clearTextOnFocus } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";

import { server } from "../redux/store";
import { useEffect, useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { getAdminProducts } from "../redux/actions/productActions";
import { useSelector } from "react-redux";
export const setTokenInterceptor = (token, setToken=true, gbResponse=true) => {
    if(setToken) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }


    if(gbResponse) {
        axios.interceptors.response.use(
            function (response) {
                return response;
            },
            function (errors) {
                if (errors.response.status === 409) {
                    // showSnackBar(errors.response.data?.msg, 'ERROR');
                    console.log(errors.response.data.msg);
                } 
            }
        )
    }
};

// Function to add Bearer token interceptor
const withBearerToken = (fetch) => (url, options = {}) => {
    // Retrieve the token from wherever you store it
    // const token = 'YOUR_BEARER_TOKEN';
  console.log(options);
    // Add the Authorization header with the Bearer token
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${options.token}`,
    };
  




    // Call the original fetch function with the modified options
    return fetch(url, { ...options, headers });
  };
         
  // Create a new fetch function with the Bearer token interceptor
  export const fetchWithBearerToken = withBearerToken(fetch);
                  
         
//   fetchWithBearerToken('https://api.example.com/data')
//     .then((response) => {
     
//       console.log(response);
//     })
//     .catch((error) => {
     
//       console.error(error);
//     });
  

export const useGetOrders = (isFocused, isAdmin = false,token) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    // fetchWithBearerToke
    const requestOptions = {
        method: 'GET',
        token:token,
        headers: { 'Content-Type': 'application/json' ,
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVmOTQ4ZDg1YTRlMzQwZjBkOTg1ZWEiLCJpYXQiOjE2ODQzMzUxNjIsImV4cCI6MTc0NDgxNTE2Mn0.cefDYYY6QniQcjtVaJCtXX6nUfp1xRtMPXJNbdzai6M'
      },
      
    };
    useEffect(() => {
      setLoading(true);
      fetchWithBearerToken(`${server}/order/${isAdmin ? "admin" : "my"}`,requestOptions)
        .then((response) => {
            console.log(response)
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        })
        .then((data) => {
            console.log(data)
          setOrders(data.orders);
          setLoading(false);
        })
        .catch((error) => {
          Toast.show({
            type: "error",
            text1: error.message,
          });
          setLoading(false);
        });
    }, [isFocused]);
  
    return {
      loading,
      orders,
    };
  };

  export const useAdminProducts = (dispatch, isFocused) => {
    const { products, inStock, outOfStock, error, loading } = useSelector(
      (state) => state.product);

      const { token} = useSelector((state) => state.user);
  
    useEffect(() => {
      if (error) {
        Toast.show({
          type: "error",
          text1: error,
        });
        dispatch({
          type: "clearError",
        });
      }
  
      dispatch(getAdminProducts(token));
    }, [dispatch, isFocused, error]);
  
    return {
      products,
      inStock,
      outOfStock,
      loading,
    };
  };