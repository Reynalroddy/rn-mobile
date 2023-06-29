import { View, Text,SafeAreaView, TouchableOpacity,Image, Pressable, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect,useState,useRef } from 'react'
// import { FontAwesome } from '@expo/vector-icons'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ArrowLeftIcon,ShoppingBagIcon } from "react-native-heroicons/solid";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import OrderItem from '../components/OrderItem';
import { placeOrder } from '../redux/actions/otherActions';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
// import PaystackWebView from 'react-native-paystack-webview';
import { WebView } from 'react-native-webview';
import { useEvent } from 'react-native-reanimated';
const Checkout = () => {
    const nav = useNavigation();
    const dispatch = useDispatch()
 
    const route = useRoute();
    const { cartItems } = useSelector((state) => state.cart);
    const {token,user } = useSelector((state) => state.user);
    const {loading,url,orderRef } = useSelector((state) => state.other);
  const [itemsPrice] = useState(
    cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
  );
  console.log(user.email,token)
  const [shippingCharges] = useState(itemsPrice > 10000 ? 0 : 200);
  const [tax] = useState(Number((0.18 * itemsPrice).toFixed()));
  const [totalAmount] = useState(itemsPrice + shippingCharges + tax);
  const navigation = useNavigation();
  const paystackWebViewRef = useRef(paystackProps.PayStackRef); 
  // const orderRef = new Date().getTime().toString();
  const handleCod=()=>{

    const itemPrice = itemsPrice;
    const shippingsCharges = shippingCharges;
    const taxPrice = tax;
    const totalsAmount = totalAmount;
    const orderref = new Date().getTime().toString();

    console.log(orderref)
    dispatch(
        placeOrder(
          cartItems,
          itemsPrice,
          taxPrice,
          shippingCharges,
          totalAmount,
          orderref,
          token,
          navigation,
        )
      );
      dispatch({ type:"updateref" ,payload:orderref});
  }
  useLayoutEffect(() => {
    navigation.setOptions({
    headerShown:false,
    
    })
    }, [])

//     useEffect(() => {
//      const 
    
//       return () => {
//         second
//       }
//     }, [third])
    
// if(url){
// return  <WebView 
// source={{ uri: url }}
// style={{ marginTop: 40 }}
// />
// }

  if(cartItems.length<1){
return <SafeAreaView className='flex-1 bg-yellow-600'>
              
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
       {/* <Paystack  
        paystackKey="pk_test_ce5cea314b2b7841ba99ac01c2bd119adf37e441"
        amount={'25000.00'}
        billingEmail={email}
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
          console.log(e)
        }}
        onSuccess={(res) => {
          // handle response here
          console.log(res)
        }}
        autoStart={false}a
      /> */}
    <Paystack
        paystackKey="pk_test_ce5cea314b2b7841ba99ac01c2bd119adf37e441"
        billingEmail={user.email}
        currency='NGN'
        amount={totalAmount}
        refNumber={orderRef}
        onCancel={(e) => {
          // handle response here
          console.log(e)
        }}
        onSuccess={(res) => {
          // handle response here
            dispatch({ type: "clearCart" });
            dispatch({ type:"updatebtn" ,payload:false});
            dispatch({ type:"updateref" ,payload:''});
                 nav.reset({
        index: 0,
        routes: [{ name:'Profile'}],
      });
          console.log(res)
        }}
        ref={paystackWebViewRef}
      />
{/* 
<PaystackWebView
          buttonText='Pay Now'
          paystackKey='pk_test_ce5cea314b2b7841ba99ac01c2bd119adf37e441'
          amount={120000}
          billingEmail='ayoshokz@gmail.com'
          billingMobile='08101274387'
          billingName='Oluwatobi Shokunbi'
          ActivityIndicatorColor='green'
          onSuccess={(tranRef)=>{console.log(tranRef)}}
          onCancel={()=>{console.log('something went wrong')}}
         /> */}
      {/* <View className='px-4 py-4'> */}
        {/* <Header title='Cart'/> */}
        <TouchableOpacity className='bg-yellow-600 h-9 w-9 rounded-full flex-row items-center justify-center mt-14 ml-4' onPress={navigation.goBack}>
           {/* <Ionicons name='arrow-left' size={20} color='white' className='font-bold'/> */}
           <ArrowLeftIcon  size={20} color="black" className='font-bold' />
           </TouchableOpacity> 
        <ScrollView className="px-4 py-4 flex-1 mt-2">
     
     
     {cartItems.map((item,i)=>{
          const {product,name,price,stock,image} = item;
        return <OrderItem

        key={item.product}  
        id={item.product}  
        name={item.name}     
        
        amount={item.price}    
        imgSrc={item.image}       
        index={i}     
        qty={item.quantity}
        />

        
     })}
               
               </ScrollView>
               <TouchableOpacity className='my-2 flex-row justify-between rounded-3xl bg-white py-2 mx-4 px-2 items-center'>
<Text className='text-lg font-bold'>Amount</Text>
<View className='bg-[#cb8a03] rounded-lg p-1'>
  <Text className='text-white font-bold'>N {itemsPrice}</Text>
</View>
</TouchableOpacity>
<TouchableOpacity className='my-2 flex-row justify-between rounded-3xl bg-white py-2 mx-4 px-2 items-center'>
<Text className='text-lg font-bold'>Tax</Text>
<View className='bg-[#cb8a03] rounded-lg p-1'>
  <Text className='text-white font-bold'>N {tax}</Text>
</View>
</TouchableOpacity>
<TouchableOpacity className='my-2 flex-row justify-between rounded-3xl bg-white py-2 mx-4 px-2 items-center'>
<Text className='text-lg font-bold'>Shipping</Text>
<View className='bg-[#cb8a03] rounded-lg p-1'>
  <Text className='text-white font-bold'>N {shippingCharges}</Text>
</View>
</TouchableOpacity>
<TouchableOpacity className='my-2 flex-row justify-between rounded-3xl bg-white py-2 mx-4 px-2 items-center'>
<Text className='text-lg font-bold'>Total</Text>
<View className='bg-[#cb8a03] rounded-lg p-1'>
  <Text className='text-white font-bold'>N {totalAmount}</Text>
</View>
</TouchableOpacity>


{/* <Paystack
        paystackKey="pk_test_ce5cea314b2b7841ba99ac01c2bd119adf37e441"
        billingEmail={email}
        amount={totalAmount * 100}
        onCancel={(e) => {
          // handle response here
          console.log(e)
        }}
        onSuccess={(res) => {
          // handle response here
          console.log(res)
        }}
        ref={paystackWebViewRef}
      /> */}

{
  !url &&
<TouchableOpacity className='my-2 flex-row justify-center rounded-3xl bg-[#cb8a03] p-2 mx-4 items-center'  
onPress={handleCod}
// onPress={()=> 
//   console.log(paystackWebViewRef.current.startTransaction.startTransaction())
//   paystackWebViewRef.current.startTransaction()
// }
 disabled={loading}
 >
{loading 
              &&
              <ActivityIndicator size={'small'} color='white'/>
}
<Text className='text-lg font-bold text-center text-white'>Confirm Order</Text>
</TouchableOpacity>
}

{
  url &&
  <TouchableOpacity className='my-2 flex-row justify-center rounded-3xl bg-[#cb8a03] p-2 mx-4 items-center'  
  // onPress={handleCod}
  onPress={()=> 
    // console.log(paystackWebViewRef.current.startTransaction.startTransaction())
    paystackWebViewRef.current.startTransaction()
  }
   disabled={loading}
   >
  {loading 
                &&
                <ActivityIndicator size={'small'} color='white'/>
  }
  <Text className='text-lg font-bold text-center text-white'>Pay</Text>
  </TouchableOpacity>
}
     
    </>
  )
}

export default Checkout;