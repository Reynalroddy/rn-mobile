import { View, Text, TextInput, Alert, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native'
import { LockClosedIcon,ArrowLeftIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { updatePassword } from '../redux/actions/otherActions';
import { useDispatch, useSelector } from 'react-redux';
const ChangePassword = () => {
    whitelist: ['navigation']
    const [oldpassword,setOldPassword] = useState("");
    const [newpassword,setNewPassword] = useState("");
    const { loading } = useSelector((state) => state.other);
    const { token } = useSelector((state) => state.user);
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const changePwd= () => {
        if(oldpassword === "" || newpassword === ""){
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
          dispatch(updatePassword(oldpassword,newpassword,token));
          setNewPassword('');
          setOldPassword('')
        }
    }     
  return (
    <SafeAreaView className='flex-1 bg-yellow-600 items-center justify-center relative'> 
  
         {/* <Loader visible={loading} /> */}
        <View className='w-[85%] text-center items-center '>
        <TouchableOpacity className='bg-white h-9 w-9 rounded-full flex-row items-center justify-center absolute -top-64 left-3' onPress={navigation.goBack}>
           {/* <Ionicons name='arrow-left' size={20} color='white' className='font-bold'/> */}
           <ArrowLeftIcon size={20} color="black" className='font-bold' />
           </TouchableOpacity> 
           
            <Text className='text-3xl text-white font-bold '>CHANGE PASSWORD</Text>
            <View  className='bg-transparent w-full flex-row space-x-3  items-center h-[40px]  border-b-2  border-white my-3 px-3'>
            <LockClosedIcon size={20} color="white" />
<TextInput   placeholderTextColor = 'white' placeholder='Enter old password' keyboardType='default' className=' w-full h-full text-md text-white '  secureTextEntry={true} value={oldpassword}
              onChangeText={(text) => setOldPassword(text)}/>
            </View>


            <View  className='bg-transparent w-full flex-row space-x-3  items-center h-[40px]  border-b-2  border-white my-9 px-3'>
            <LockClosedIcon size={20} color="white" />
<TextInput   placeholderTextColor = 'white' placeholder='Enter new password' keyboardType='default' className=' w-full h-full text-md text-white '  secureTextEntry={true} value={newpassword}
              onChangeText={(text) => setNewPassword(text)}/>
            </View>

            <TouchableOpacity className='rounded-md w-full bg-white  p-3 lex flex-row gap-2 items-center justify-center' onPress={changePwd} 
              >
           {loading &&<ActivityIndicator size={'small'} color='#CB8A03'/>}
            <Text className='text-yellow-500 text-lg font-bold capitalize text-center'>Change</Text>
           </TouchableOpacity>
    </View>

    </SafeAreaView>
  )
}

export default ChangePassword