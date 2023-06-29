import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

const CartItem = ({
    name,
    amount,
    qty, 
    stock,
    index,
    imgSrc,
    id,
    decrementHandler,
    incrementhandler,
   
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
                <Text>{name}</Text>
                <Text>N {amount}</Text>
                    </View>
    
                    <Pressable
        style={{
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        <Pressable
          onPress={()=>decrementHandler(id, name, amount,imgSrc,stock,qty)}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            borderColor: "#BEBEBE",
            backgroundColor: "#E0E0E0",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#cb8a03",
              paddingHorizontal: 6,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            -
          </Text>
        </Pressable>

        <Pressable>
          <Text
            style={{
              fontSize: 19,
              color: "#cb8a03",
              paddingHorizontal: 8,
              fontWeight: "600",
            }}
          >   
            {qty}
          </Text>
        </Pressable>

        <Pressable
          onPress={()=> incrementhandler(id, name, amount,imgSrc,stock,qty)}
          style={{
            width: 26,
            height: 26,
            borderRadius: 13,
            borderColor: "#BEBEBE",
            backgroundColor: "#E0E0E0",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#cb8a03",
              paddingHorizontal: 6,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            +
          </Text>
        </Pressable>
      </Pressable>
      </View>
  )
}

export default CartItem;