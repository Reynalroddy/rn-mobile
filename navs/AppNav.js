import { View, Text } from 'react-native'
import React ,{useState,useCallback,useEffect}from 'react'
import Main from './Main';
import Auth from './Auth';
import { useSelector,useDispatch } from 'react-redux';


import { NavigationContainer } from '@react-navigation/native';

import { Toast } from 'react-native-toast-message/lib/src/Toast';
// import { setTokenInterceptor } from './utils/supporters';
// SplashScreen.preventAutoHideAsync();
const AppNav = () => {
    const { user,loading,token } = useSelector((state) => state.user);
    // console.log(user);
  //  const user= false;
const dispatch = useDispatch();


// useEffect(() => {
  
//       if(!user) return;
//       setTokenInterceptor(token)
   
// }, []);


  return (
    <View  style={{ flex: 1 }}>
            <NavigationContainer>
   {
!user?
      <Auth/> : 
<Main/>
   }
     <Toast position='top' topOffset={40}/>
   </NavigationContainer>
</View>
  )
}

export default AppNav