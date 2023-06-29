import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import React from "react";
import OrderItem from "../components/OrderItem";
// import { useGetOrders } from "../utils/hooks";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetOrders } from "../utils/supporters";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
const Orders = () => {
  const isFocused = useIsFocused();
  const { token } = useSelector((state) => state.user);
  const { loading, orders } = useGetOrders(isFocused,false,token);
  const navigation = useNavigation();
  return (
 <>
      <Header title={'ORDERS'}/>

      {loading ? (
         <ActivityIndicator size={'large'} color='black'/>
        ) : (
          <>
          <View className='flex-row  items-center justify-between pr-3'>
          <TouchableOpacity className='bg-yellow-600 h-9 w-9 rounded-full flex-row items-center justify-center mt-7 mb-2 ml-4' onPress={navigation.goBack}>
          {/* <Ionicons name='arrow-left' size={20} color='white' className='font-bold'/> */}
          <ArrowLeftIcon  size={20} color="black" className='font-bold' />
          </TouchableOpacity> 
          <Text className='font-bold text-black text-lg'>ORDERS</Text>
          </View>
          
            <ScrollView showsVerticalScrollIndicator={false} className='py-3 flex-1 mb-3'>

              {orders.length > 0 ? (
                orders.map((item, index) => (
                  // <OrderItem
                  //   key={item._id}
                  //   id={item._id}
                  //   i={index}
                  //   price={item.totalAmount}
                  //   status={item.orderStatus}
                  //   paymentMethod={item.paymentMethod}
                  //   orderedOn={item.createdAt.split("T")[0]}
                  //   address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                  // />

                  <View className='p-4 rounded-md border-gray-500 bg-white my-2 mx-4' key={index}>
                    <Text className='text-black'>Amount: N {item.totalAmount}</Text>
<Text className='text-black' >Order ID:{item.orderRef}</Text>
<Text className='text-black' >Paid:{item.isPaid?'yes':'no'}</Text>
                  </View>
                  // <Text className='text-black' key={index}>{item.totalAmount}</Text>
                ))
              ) : (
                <Text style={{ textAlign: "center",fontWeight:'bold' }}>No Orders Yet</Text>
              )}
            </ScrollView>
          </>
        )}
      </>
    );
  };
  
  export default Orders;