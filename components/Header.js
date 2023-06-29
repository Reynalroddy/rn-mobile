import { View, Text, Image } from 'react-native'
import React from 'react'
// import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { Bars3Icon } from "react-native-heroicons/solid";
const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View className=' bg-black  justify-between flex-row items-end py-2 px-4'> 
<Bars3Icon  size={29} color="white" className=''onPress={() => navigation.openDrawer()} />
<Text className='text-lg text-white uppercase font-bold ' >{title?title:'glowing stars'}</Text>
   <Image source={{
                uri:'https://links.papareact.com/wru'
            }}
            className='h-7 w-7 rounded-full'
            />
    </View>
  )
}

export default Header