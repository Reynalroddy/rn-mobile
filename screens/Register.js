



import { AntDesign } from '@expo/vector-icons'; 
import { View, Text, SafeAreaView, Image, TextInput, ScrollView,StyleSheet, TouchableOpacity,Alert, ActivityIndicator } from 'react-native'
import React,{useLayoutEffect,useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { UserIcon,LockClosedIcon } from "react-native-heroicons/solid";

import { register } from '../redux/actions/userActions';
// import mime from "mime";
import { useDispatch, useSelector } from 'react-redux';
// import { UserIcon,LockClosedIcon } from "react-native-heroicons/solid";
// import Loader from '../components/Loading';


const Register = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const navigation = useNavigation();
  const [avatar, setAvatar] = useState("");
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
  useLayoutEffect(() => {
  navigation.setOptions({
  headerShown:false,
  
  })
  }, [])
  // const [loading,setLoading]=useState(false)



  const registerz = () => {
    if(email === "" || password === "" || name === ""){
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
    }

    else{
      const myForm = new FormData();

      myForm.append("username", name);
      myForm.append("email", email);
      myForm.append("password", password);
     
  
      if (avatar !== "") {
        myForm.append("file", {
          uri: avatar,
          type: mime.getType(avatar),
          name: avatar.split("/").pop(),
        });
      }
  
      dispatch(register(myForm));
    }
}
  return (
    <SafeAreaView className='flex-1 bg-yellow-600 items-center justify-center'> 
  
         {/* <Loader visible={loading} /> */}
        <View className='w-[85%] text-center items-center'>           
            <Text className='text-3xl text-white font-bold '>REGISTER</Text>
            <View  className='bg-transparent w-full flex-row space-x-3  items-center h-[40px]  border-b-2  border-white my-3 px-3'>
            {/* <AntDesign name="user" size={20} color="white" /> */}
            <UserIcon size={20} color="white" />
<TextInput   placeholderTextColor = 'white' placeholder='Username' keyboardType='default' className=' w-full h-full text-md text-white '  value={name}
              onChangeText={(text) => setName(text)}
              />
            </View>

            <View  className='bg-transparent w-full flex-row space-x-3  items-center h-[40px]  border-b-2  border-white my-3 px-3'>
            {/* <AntDesign name="user" size={20} color="white" /> */}
            <UserIcon size={20} color="white" />
<TextInput   placeholderTextColor = 'white' placeholder='email@email.com' keyboardType='default' className=' w-full h-full text-md text-white ' value={email}
              onChangeText={(text) => setEmail(text)}
              />
            </View>

            <View  className='bg-transparent w-full flex-row space-x-3  items-center h-[40px]  border-b-2  border-white my-3 px-3'>
            {/* <AntDesign name="lock" size={20} color="white" /> */}
            <LockClosedIcon  size={20} color="white" />
<TextInput   placeholderTextColor = 'white' placeholder='Enter password' keyboardType='default' className=' w-full h-full text-md text-white '  secureTextEntry={true} value={password}
              onChangeText={(text) => setPassword(text)}
              />
            </View>
          
            <Text className='text-sm text-white font-bold my-6 ml-36' 
            onPress={()=>navigation.navigate('Login')}
            > Have an account ?Login</Text>
          
           <TouchableOpacity className='rounded-md w-full bg-white mt-5 p-2 lex flex-row gap-2 items-center justify-center' onPress={registerz}
           disabled={loading}>
           {
           loading &&

           <ActivityIndicator size={'small'} color='#CB8A03'/>}
            <Text className='text-yellow-500 text-lg font-bold capitalize text-center'>Register</Text>
           </TouchableOpacity>
        </View>
    
      </SafeAreaView>
  )}

export default Register