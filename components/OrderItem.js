import { View, Text, Image } from 'react-native'
import React from 'react'

const OrderItem = ({
    name,
    amount,
    qty, 
    index,
    imgSrc,
   
  }) => {
  return (
    <View className="flex-row justify-between items-center p-1 bg-white my-2" key={index}>
    <Image
                //   style={{ width: 40, height: 40, borderRadius: 20 }}
                className='w-24 h-24 my-1'
                  source={{
                    uri: imgSrc,
                  }}
                />
    
                <View>
                <Text className='font-bold'>{name}</Text>
                <Text className='font-bold'>N {amount}</Text>
                    </View>
    
                   <View>
                    <Text className='font-bold'>{qty}</Text>
                   </View>
     

       
      </View>
  )
}

export default OrderItem;