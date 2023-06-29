import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ArrowLeftIcon,CheckCircleIcon, } from "react-native-heroicons/solid";
import { useSelector } from 'react-redux';
import { useRoute,useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
const Profile = () => {
    const { user } = useSelector((state) => state.user);
    const navigation = useNavigation();
    const navigateHandler = (text) => {
        switch (text) {
          case "Admin":
            navigation.navigate("Admin");
            break;
          case "Orders":
            navigation.push("Orders");
            break;
          case "ChangePassword":
            navigation.navigate("ChangePassword");
            break;
            case "Sub":
                navigation.navigate("Sub");
                break;
          default:
          case "Orders":
            navigation.navigate("Orders");
            break;
        }
      };
  return (
    <>
    
    <Header/>
    <ScrollView className='relative px-4  py-3' showsVerticalScrollIndicator={false}>
 <Image source={{ 
             uri: user?.userCode
           }}
           className='mx-auto'
           style={{width: 276, height: 276}}  
         
            /> 
           {/* <img src={user?.userCode} /> */}

           <View className='h-[10rem] w-full bg-gray-200 p-4 rounded-md my-3'>
           <Text className='font-bold text-sm text-yellow-600 my-1'>Username: {user?.username}</Text>
<Text className='font-bold text-sm text-yellow-600 my-1'>email: {user?.email}</Text>
<Text className='font-bold text-sm text-yellow-600 my-1'>Subscription: expired</Text>
<Text className='font-bold text-sm text-yellow-600 my-1'>Last plan: couple</Text>
<TouchableOpacity className='bg-yellow-600 p-2 w-[140px]  rounded-md flex-row items-center' onPress={navigation.goBack}>
          
          <Text className='text-white font-extrabold text-xs '>Pause subscription</Text>
           </TouchableOpacity> 
           </View>
          {/* <TouchableOpacity className='bg-white h-9 w-9 rounded-full flex-row items-center justify-center absolute top-16 left-3' onPress={navigation.goBack}>
          
           <AntDesign name="arrowleft" size={20} color="black" className='font-bold' />
           </TouchableOpacity>  */}
         
<View className='my-3'>

<TouchableOpacity className='bg-yellow-600 p-4 w-auto  rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('Orders')}>
          
          <Text className='text-white font-extrabold text-base '>My orders</Text>
           </TouchableOpacity> 

           <TouchableOpacity className='bg-yellow-600 p-4 w-auto  rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('ChangePassword')}>
          
          <Text className='text-white font-extrabold text-base '>Change Password</Text>
           </TouchableOpacity> 

           <TouchableOpacity className='bg-yellow-600 p-4 w-auto  rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('Sub')}>
          
          <Text className='text-white font-extrabold text-base '>Subscribe</Text>
           </TouchableOpacity> 
{ user?.role ==='admin' &&
    <TouchableOpacity className='bg-yellow-600 p-4 w-auto  rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('Admin')}>
          
          <Text className='text-white font-extrabold text-base '>Admin</Text>
           </TouchableOpacity> 
}
          
</View>
          
       </ScrollView>
          </>
  )
}

export default Profile