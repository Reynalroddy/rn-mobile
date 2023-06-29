import axios from "axios";
import { server } from "./store";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadUser= async(dispatch)=>{
    try {
        dispatch({
          type: "loadUserRequest",
        });
        let tok = await AsyncStorage.getItem('user-token')
        let user = await AsyncStorage.getItem('user');
        const data = {token:tok,
        user:JSON.parse(user)}
        dispatch({
          type: "loadUserSuccess",
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: "loadUserFail",
        //   payload: error.response.data.message,
        });
      }

}

export const loginz=async (dispatch,email,password)=>{

  try {
    dispatch({
      type: "loginRequest",
    });

    //    Axios here
    const res = await axios.post(
      `${server}/user/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      }
    );
    console.log(res.data)
    // dispatch({
    //   type: "loginSuccess",
    //   payload: res.data,
    // });
    // AsyncStorage.setItem('user',res.data.user)
    // AsyncStorage.setItem('user-token',res.data.token)
  } catch (error) {
    console.log(error)
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};