import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { ShoppingCartIcon,ArrowLeftOnRectangleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/userActions';
const CustomDrawer = (props) => {
  const { user,loading,token } = useSelector((state) => state.user);
  // console.log(user,token)
  const dispatch = useDispatch()
  return (
    <View className='flex-1'>
    <DrawerContentScrollView  {...props}  contentContainerStyle={{
        backgroundColor:'black'
    }}>
<ImageBackground  
source={ require('../assets/profile.jpg')}

 style={{padding:20,width:'100%' ,height:200}}>

            <Text  className='font-bold uppercase text-white absolute bottom-2 right-4' style={{fontFamily: 'Roboto-medium'}}>
              {user.username}
              {/* reynal */}
              </Text>
</ImageBackground>

<View  className='flex-1 bg-white pt-3'>
<DrawerItemList {...props}/>
</View>
       
    </DrawerContentScrollView>

    <View className='' style={{
        padding:20,
            borderTopColor:'#333',
            borderTopWidth:1
        }
    }>
        <View className='flex-row gap-3 pb-4'>
        <ArrowLeftOnRectangleIcon size={24} color={'black'} style={{
          fontWeight:'bold'
        }} className='font-bold'/>
        <Pressable 
        onPress={()=>dispatch(logout())}
        >
        <Text className='font-bold' style={{
            fontSize:17
        }}>Sign out</Text>
        </Pressable>
       
            </View>


        </View>
      </View>
  )
}


export default CustomDrawer