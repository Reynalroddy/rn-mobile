
import { View, Text, SafeAreaView, Image, TextInput, ScrollView,StyleSheet, TouchableOpacity, ActivityIndicator, Alert, StatusBar } from 'react-native'
import React,{useLayoutEffect,useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

import { login } from '../redux/actions/userActions';
import { UserIcon,LockClosedIcon } from "react-native-heroicons/solid";
// import { AntDesign } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
// import { useMessageAndErrorUser } from '../utils/hooks';

const Login = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
  navigation.setOptions({
  headerShown:false,
  
  })
  }, [])
  const dispatch = useDispatch();
  // const loading = useMessageAndErrorUser(dispatch); 
  const { loading } = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const loginz = () => {
 console.log(email,password)
 if(email === "" || password === ""){
  Alert.alert(
    "Invalid Details",
    "Please fill all the details",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
  return;
}

console.log(email,password)
 dispatch(login(email, password));
  }
  // useEffect(() => {
  //   setLoading(true);
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if(!authUser){
  //       setLoading(false);
  //     }
  //     if(authUser){
  //       navigation.replace("Home");
  //     }
  //   });

  //   return unsubscribe;
  // },[])

 
  return (
      <SafeAreaView className='flex-1 bg-yellow-600 items-center justify-center'> 
  {/* <StatusBar backgroundColor={''} color={'yellow'} className='bg-yellow-600'/> */}
  <StatusBar backgroundColor={'#CB8A03'} barStyle={'white-content'}/>
          <View className='w-[85%] text-center items-center '>
            
              <Text className='text-3xl text-white font-bold '>LOGIN</Text>
              <View  className='bg-transparent w-full flex-row space-x-3  items-center h-[40px]  border-b-2  border-white my-3 px-3'>
 
  <UserIcon size={20} color="white" />
  <TextInput   placeholderTextColor = 'white' placeholder='User@gmail.com' keyboardType='default' className=' w-full h-full text-md text-white ' onChangeText={(text)=>setEmail(text)}/>
              </View>
  
              <View  className='bg-transparent w-full flex-row space-x-3  items-center h-[40px]  border-b-2  border-white my-3 px-3'>

  <LockClosedIcon  size={20} color="white" />
  <TextInput   placeholderTextColor = 'white' placeholder='Enter password' keyboardType='default' className=' w-full h-full text-md text-white '  secureTextEntry={true} onChangeText={(text)=>setPassword(text)}/>
              </View>
            
              <Text className='text-sm text-white font-bold my-6 ml-36' 
              onPress={()=>navigation.navigate('Register')}
              >Don't have account ?Register</Text>
            
             <TouchableOpacity className='rounded-md w-full bg-white mt-5 p-2 flex flex-row gap-2 items-center justify-center' 
             onPress={loginz} 
             disabled={loading}
              >
              {loading 
              &&
              <ActivityIndicator size={'small'} color='#CB8A03'/>
}
              <Text className='text-yellow-500 text-lg font-bold capitalize text-center '>Login</Text>
             </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
  
}

export default Login