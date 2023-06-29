import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import FitnessCard from '../components/FitnessCard';
import { useSelector } from 'react-redux';
const Landing = () => {
    const { workout,calories,minutes } = useSelector((state) => state.work);
  return (
    <>
    <Header/>
    <ScrollView className='py-2 bg-white' showsVerticalScrollIndicator={false}> 
    <View className='flex flex-col mx-4 p-3  bg-yellow-600 h-[170px] mt-3'>
        <View className='my-2'>

            <Text className='font-bold text-lg text-white uppercase'>home workout</Text>
        </View>
        <View className='flex-row items-center justify-between '>
    {/* <Image source={{
                uri:'https://links.papareact.com/wru'
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full '
            /> */}


<View className=''>
    <Text className='uppercase text-md text-white font-bold my-2'>workouts</Text>
    <Text className='uppercase text-sm text-white font-bold text-center'>
    {workout}
    </Text>
</View>

<View className=''>
    <Text className='uppercase text-md text-white font-bold my-2'>kcal</Text>
    <Text className='uppercase text-sm text-white font-bold text-center'>
    {calories}
    </Text>
</View>

<View className=''>
    <Text className='uppercase text-md text-white font-bold my-2'>minutes</Text>
    <Text className='uppercase text-sm text-white font-bold text-center'>
    {minutes}

    </Text>
</View>

         </View>
            </View>



                <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              width: "85%",
              height: 120,
              marginTop: -26,
              borderRadius: 7,
            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
        </View>

        <FitnessCard/>
            </ScrollView>
             </>
  )
}

export default Landing