

// import axios from "axios";
import { server } from "../store";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { fetchWithBearerToken } from "../../utils/supporters";

          
  
    
export const updatePassword =
  (oldPassword, newPassword,token) => async (dispatch) => {
    // try {
      dispatch({
        type: "updatePasswordRequest",
      });


      const requestOptions = {
        method: 'PATCH',
        token:token,
        headers: { 'Content-Type': 'application/json' ,
        // 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVmOTQ4ZDg1YTRlMzQwZjBkOTg1ZWEiLCJpYXQiOjE2ODQzMzUxNjIsImV4cCI6MTc0NDgxNTE2Mn0.cefDYYY6QniQcjtVaJCtXX6nUfp1xRtMPXJNbdzai6M'
      },
        body: JSON.stringify({  oldPassword,
            newPassword, })
    };
                
    fetchWithBearerToken(`${server}/user/changepassword`,requestOptions)
    .then(response => response.json())
    .then((data) => {
         if(data.success === true){
        dispatch({
            type: "updatePasswordSuccess",
            payload: data.message,
          });
          Toast.show({
            type: "success",
            text1:data.message,
          });
        }
    else{
        dispatch({
            type: "updatePasswordFail",
            payload:data.message,
          });
        Toast.show({
            type: "error",
            text1: data.message,
          });
    }
      
  }
      ).catch((error) => {
        console.log(error?.response?.data?.message)
        dispatch({
          type: "updatePasswordFail",
          payload: error.response.data.message,
        });
        Toast.show({
          type: "error",
          text1: 'me',
        });
      }
  );


  };

//   export const placeOrder =
//   (
//     orderItems,
//     shippingInfo,
//     paymentMethod,
//     itemsPrice,
//     taxPrice,
//     shippingCharges,
//     totalAmount,
//     paymentInfo
//   ) =>
//   async (dispatch) => {
//     try {
//       dispatch({
//         type: "placeOrderRequest",
//       });

//       const { data } = await axios.post(
//         `${server}/order/new`,
//         {
//           shippingInfo,
//           orderItems,
//           paymentMethod,
//           paymentInfo,
//           itemsPrice,
//           taxPrice,
//           shippingCharges,
//           totalAmount,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       dispatch({
//         type: "placeOrderSuccess",
//         payload: data.message,
//       });
//     } catch (error) {
//       dispatch({
//         type: "placeOrderFail",
//         payload: error.response.data.message,
//       });
//     }
//   };

// export const processOrder = (id) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "processOrderRequest",
//     });

//     const { data } = await axios.put(
//       `${server}/order/single/${id}`,

//       {},
//       {
//         withCredentials: true,
//       }
//     );
//     dispatch({
//       type: "processOrderSuccess",
//       payload: data.message,
//     });
//   } catch (error) {
//     dispatch({
//       type: "processOrderFail",
//       payload: error.response.data.message,
//     });
//   }
// };

export const placeOrder = (
  orderItems,
  itemsPrice,
  taxPrice,
  shippingCharges,
  totalAmount,
  orderref,
  token,
  nav
) => async (dispatch) => {
    dispatch({
      type: "placeOrderRequest",
    });
             
    const requestOptions = {
      method: "POST",
      token:token,
      headers: { 'Content-Type': 'application/json' ,
    },
      body: JSON.stringify({  orderItems,
        itemsPrice,
        taxPrice,
        shippingCharges,
        totalAmount,
        orderRef:orderref })
  };
  console.log(requestOptions)

  fetchWithBearerToken(`${server}/order/new`,requestOptions)
  .then(response => response.json())
  .then((data) => {
       if(data.success === true){
    
        console.log(data)
        dispatch({    
          type: "placeOrderSuccess",
          payload: data.message,
        });
        // doont clear cart
        // dispatch({ type: "clearCart" });
        Toast.show({
          type: "success",
          text1:data.message,
        });
        dispatch({ type:"updatebtn" ,payload:true});
      //  dont reset
      //   nav.reset({
      //   index: 0,
      //   routes: [{ name:'Profile'}],
      // });
        // nav.navigate('Profile')
      }
  else{
    dispatch({
      type: "placeOrderFail",
      payload: data.message,
    });
    console.log(data.message)
      Toast.show({
          type: "error",
          text1: data.message,
        });
  }
    
}
    ).catch((error) => {
      console.log(error?.response?.data?.message)
      dispatch({
        type: "placeOrderFail",
        payload: error?.response?.data?.message,
      });
      Toast.show({
        type: "error",
        text1:  error?.response?.data?.message,
      });
    }
    )
  
  }



export const createProduct = (formData,token) => async (dispatch) => {
  try {
    dispatch({
      type: "addProductRequest",
    });

  

    const response = await fetch(`${server}/product/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      body: formData,
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();

    dispatch({
      type: "addProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "addProductFail",
      payload: error.response.data.message,
    });
  }
};




            




