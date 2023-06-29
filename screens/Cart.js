import { View, Text,SafeAreaView, TouchableOpacity,Image, Pressable, ScrollView, StatusBar } from 'react-native'
import React, { useLayoutEffect,useState } from 'react'
// import { FontAwesome } from '@expo/vector-icons'; 
import { ArrowLeftIcon,ShoppingBagIcon } from "react-native-heroicons/solid";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
// import { AntDesign } from '@expo/vector-icons'; 
// import { decrementQuantity,incrementQuantity } from '../redux/basketSlice';
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Header from '../components/Header';
// import { SwipeListView } from 'react-native-swipe-list-view';
// import data from '../data';
import CartItem from '../components/CartItem';
const Cart = () => {
    // const nav = useNavigation();
    const dispatch = useDispatch()
    const route = useRoute();
    const { cartItems } = useSelector((state) => state.cart);
    // const [quantity, setQuantity] = useState(1);
    // console.log(cartItem)
    const decrementHandler = (id, name, price, image, stock, quantity) => {
      const newQty = quantity - 1;
  console.log(newQty,quantity)
      if (1 >= quantity) return dispatch({ type: "removeFromCart", payload: id });
  
      dispatch({
        type: "addToCart",
        payload: {
          product: id,
          name,
          price,
          image,
          stock,
          quantity: newQty,
        },
      });
    };
  
    const incrementHandler = (id, name, price, image, stock, quantity) => {
      const newQty = quantity + 1;
      // console.log(newQty)
      if (stock <= quantity)
        return Toast.show({
          type: "error",
          text1: "Maximum value added",
        });
      dispatch({
        type: "addToCart",
        payload: {
          product: id,
          name,
          price,
          image,
          stock,
          quantity: newQty,
        },
      });
    };

  
  
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
    headerShown:false,
    
    })
    }, [])
//   const carts = ['0','1','3'];





  if(cartItems.length<1){
return <SafeAreaView className='flex-1 bg-yellow-600'>
<StatusBar backgroundColor="#cb8a03"/>
<View className='px-6 items-center'>
      <Text className='text-3xl font-extrabold text-white '>Cart</Text>
      <View className='items-center mt-56'>

      <View className='bg-white h-24 w-24 rounded-full items-center justify-center my-3'>
      <ShoppingBagIcon size={30} color="black" />
      </View>

      <Text className='capitalize text-lg text-white text-center font-bold'>cart is empty</Text>
      </View>
    
      <TouchableOpacity className='bg-white rounded-md p-3 mt-12 w-full'  onPress={()=>navigation.navigate("MyProduct")}
>
<Text className='text-yellow-600 text-center font-bold'>START SHOPPING</Text>
</TouchableOpacity>
    
      </View>
</SafeAreaView>
  }
  return (
    <>
      {/* <View className='px-4 py-4'> */}
        {/* <Header title='Cart'/> */}
        <TouchableOpacity className='bg-yellow-600 h-9 w-9 rounded-full flex-row items-center justify-center mt-14 ml-4' onPress={navigation.goBack}>
           {/* <Ionicons name='arrow-left' size={20} color='white' className='font-bold'/> */}
           <ArrowLeftIcon  size={20} color="black" className='font-bold' />
           </TouchableOpacity> 
        <ScrollView className="px-4 py-4 flex-1 mt-2">
      {/* <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}> */}
      {/* <ScrollView className="px-4 py-4 flex-1"> */}

     {cartItems.map((item,i)=>{
          const {product,name,price,stock,image} = item;
        return <CartItem 

        key={item.product}  
        id={item.product}  
        name={item.name}     
        stock={item.stock}    
        amount={item.price}    
        imgSrc={item.image}       
        index={i}     
        qty={item.quantity}
        incrementhandler={incrementHandler}
        decrementHandler={decrementHandler}
        />

        // <View className="flex-row justify-between items-center p-1 bg-white my-2" key={i}>
        // <Image
                   
        //             className='w-24 h-24 my-1'
        //               source={{
        //                 uri: item.image,
        //               }}
        //             />
        
        //             <View>
        //             <Text>{item.name}</Text>
        //             <Text>${item.price}</Text>
        //                 </View>
        
        //                 <Pressable
        //     style={{
        //       flexDirection: "row",
        //       paddingHorizontal: 10,
        //       paddingVertical: 5,
        //     }}
        //   >
        //     <Pressable
        //       onPress={()=>decrementHandler(product, name, price, image,stock,item.quantity)}
        //       style={{
        //         width: 26,
        //         height: 26,
        //         borderRadius: 13,
        //         borderColor: "#BEBEBE",
        //         backgroundColor: "#E0E0E0",
        //         justifyContent: "center",
        //         alignContent: "center",
        //       }}
        //     >
        //       <Text
        //         style={{
        //           fontSize: 20,
        //           color: "#cb8a03",
        //           paddingHorizontal: 6,
        //           fontWeight: "600",
        //           textAlign: "center",
        //         }}
        //       >
        //         -
        //       </Text>
        //     </Pressable>

        //     <Pressable>
        //       <Text
        //         style={{
        //           fontSize: 19,
        //           color: "#cb8a03",
        //           paddingHorizontal: 8,
        //           fontWeight: "600",
        //         }}
        //       >   
        //         {item.quantity}
        //       </Text>
        //     </Pressable>

        //     <Pressable
        //       onPress={()=>incrementHandler(product, name, price, image,stock,item.quantity)}
        //       style={{
        //         width: 26,
        //         height: 26,
        //         borderRadius: 13,
        //         borderColor: "#BEBEBE",
        //         backgroundColor: "#E0E0E0",
        //         justifyContent: "center",
        //         alignContent: "center",
        //       }}
        //     >
        //       <Text
        //         style={{
        //           fontSize: 20,
        //           color: "#cb8a03",
        //           paddingHorizontal: 6,
        //           fontWeight: "600",
        //           textAlign: "center",
        //         }}
        //       >
        //         +
        //       </Text>
        //     </Pressable>
        //   </Pressable>
        //   </View>
        
     })}
               
               </ScrollView>
<TouchableOpacity className='my-2 flex-row justify-between rounded-3xl bg-white py-2 mx-4 px-2 items-center'>
<Text className='text-lg font-bold'>Total</Text>
<View className='bg-[#cb8a03] rounded-lg p-1'>
  <Text className='text-white font-bold'>N {cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)}</Text>
</View>
</TouchableOpacity>

<TouchableOpacity className='my-2 flex-row justify-center rounded-3xl bg-[#cb8a03] p-2 mx-4 items-center'  onPress={ cartItems.length > 0 ? () => navigation.navigate("Checkout") : null}>
<Text className='text-lg font-bold text-center text-white'>Checkout</Text>
</TouchableOpacity>

     
    </>
  )
}

export default Cart