import { View, Text, Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
const Rest = () => {
const navigation = useNavigation();
    let timer = 0;
    const [timeLeft,setTimeLeft] =useState(3)

    const startTime =()=>{
        setTimeout(()=>{
if(timeLeft<=0){
navigation.goBack();
clearTimeout(timer);
}
setTimeLeft(timeLeft - 1)
        },1000)
    }
    useEffect(() => {
        startTime();
        //clean up
        return () => clearTimeout(timer);
      });
  return (
    <View>
    <View className='relative'>
    <Image source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
           className='h-[400px] w-full bg-gray-300'
           />
       
         
       </View>

      <Text
        style={{
          fontSize: 30,
          fontWeight: "900",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        TAKE A BREAK!
      </Text>

      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        {timeLeft}
      </Text>
    </View>
  )
}

export default Rest