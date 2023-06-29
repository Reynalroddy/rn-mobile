import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
const Admin = () => {
  const navigation = useNavigation();
  const navigateHandler = (text) => {
      switch (text) {
        case "AdminOrders":
          navigation.navigate("AdminOrders");
          break;
        case "AdminProducts":
          navigation.navigate("AdminProducts");
          break;
        // case "ChangePassword":
        //   navigation.navigate("ChangePassword");
        //   break;
        //   case "Sub":
        //       navigation.navigate("Sub");
        //       break;
        default:
        case "AdminOrders":
          navigation.navigate("AdminOrders");
          break;
      }
    };
  return (
    <View className='my-3'>
 <TouchableOpacity className='bg-yellow-600 h-9 w-9 rounded-full flex-row items-center justify-center mt-7 mb-2 ml-4' onPress={navigation.goBack}>
          {/* <Ionicons name='arrow-left' size={20} color='white' className='font-bold'/> */}
          <ArrowLeftIcon  size={20} color="black" className='font-bold' />
          </TouchableOpacity> 
    <TouchableOpacity className='bg-yellow-600 p-4 w-auto  mx-2 rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('AdminOrders')}>
              
              <Text className='text-white font-extrabold text-base '>Orders</Text>
               </TouchableOpacity> 
    
               <TouchableOpacity className='bg-yellow-600 p-4 w-auto mx-2  rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('AdminProducts')}>
              
              <Text className='text-white font-extrabold text-base '>Products</Text>
               </TouchableOpacity> 
    
               {/* <TouchableOpacity className='bg-yellow-600 p-4 w-auto  rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('Sub')}>
              
              <Text className='text-white font-extrabold text-base '>Subscribe</Text>
               </TouchableOpacity>  */}
    {/* { user?.role ==='admin' &&
        <TouchableOpacity className='bg-yellow-600 p-4 w-auto  rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('Admin')}>
              
              <Text className='text-white font-extrabold text-base '>Admin</Text>
               </TouchableOpacity>  */}
    {/* } */}
              
    </View>
  )
}

export default Admin