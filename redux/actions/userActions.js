// import axios from "axios";
import { server } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "react-native-toast-message/lib/src/Toast";
// import { setTokenInterceptor } from "../../utils/supporters";

// export const register2 = (formData) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "registerRequest",
//     });

//     const { data } = await axios.post(`${server}/user/new`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//       withCredentials: true,
//     });

//     dispatch({
//       type: "registerSuccess",
//       payload: data.message,
//     });
//     Toast.show({
//       type: "success",
//       text1: `registered successfully.`,
//     });
//     console.log(data)
//   } catch (error) {
//     dispatch({        
//       type: "registerFail",     
//       payload: error.response.data.message,
//     });
//     Toast.show({
//       type: "error",
//       text1: error.response.data.message,
//     });
//   }
// };

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "registerRequest",
    });

    const headers = new Headers();
    // Use 'multipart/form-data' content type for FormData
    headers.append("Content-Type", "multipart/form-data");

    const requestOptions = {
      method: "POST",
      headers,
      body: formData,
      credentials: "include",
    };

    const res = await fetch(`${server}/user/new`, requestOptions);
    const data = await res.json();
// console.log(data)
if(data.success === true){
   dispatch({
      type: "registerSuccess",
      payload: data.message,
    });

    Toast.show({
      type: "success",
      text1: data.message,
    });
}
else{
  dispatch({
    type: "registerFail",
    payload: data.message,
  });

  Toast.show({
    type: "error",
    text1: data.message,
  });
}

  } catch (error) {
    dispatch({
      type: "registerFail",
      payload: error?.response?.data?.message,
    });

    Toast.show({
      type: "error",
      text1: error?.response?.data?.message,
    });
  }
};


// export const login2 = (email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "loginRequest",
//     });

//     const res = await axios.post(
//       `${server}/user/login`,
//       {
//         email,
//         password,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
       
//       }
//     );

//     console.log(res.data)
//     dispatch({
//       type: "loginSuccess",
//       payload: res.data,
//     });

//     // setTokenInterceptor(res.data.token);
//     Toast.show({
//       type: "success",
//       text1: `welcome ${res.data.user.username}`,
//     });

 
//   } catch (error) {
//     console.log(error)
//     dispatch({
//       type: "loginFail",
//       payload: error.response.data.message,
//     });
//     Toast.show({
//       type: "error",
//       text1: error.response.data.message,
//     });
//   }
// };


export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const res = await fetch(`${server}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      // credentials: "include",
    });

    const data = await res.json();
    console.log('guy');
    // console.log(data);
    if(data.success === true){
   dispatch({
      type: "loginSuccess",
      payload: data,
    });

    // setTokenInterceptor(data.token);
    Toast.show({
      type: "success",
      text1: `welcome ${data?.user?.username}`,
    });
    }
    else{
      dispatch({
        type: "loginFail",
        payload: data?.message,
      });
      Toast.show({
        type: "error",
        text1: data?.message,
      });
    }

  } catch (error) {
    console.log(error);
    console.log('err');
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
    Toast.show({
      type: "error",
      text1: error.response.data.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });
    const { data } = await axios.get(`${server}/user/me`, {
      withCredentials: true,
    });

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });
    // const { data } = await axios.get(`${server}/user/logout`, {
    //   withCredentials: true,
    // });

    dispatch({
      type: "logoutSuccess",
      payload: 'logout Success',
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      // payload: error.response.data.message,
    });
  }
};