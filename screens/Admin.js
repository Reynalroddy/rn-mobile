import { View, Text, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import ProductHead from '../components/ProductHead';
import { useAdminProducts } from '../utils/supporters';
import { useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import ProductListItem from '../components/ProductList';

const Admin = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { loading, products, inStock, outOfStock } = useAdminProducts(
    dispatch,
    isFocused
  );
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
    <>
      {loading ? (
         <ActivityIndicator size={'large'} color='black'/>
        ) : (
    <View className='my-3'>
 <TouchableOpacity className='bg-yellow-600 h-9 w-9 rounded-full flex-row items-center justify-center mt-7 mb-2 ml-4' onPress={navigation.goBack}>
          {/* <Ionicons name='arrow-left' size={20} color='white' className='font-bold'/> */}
          <ArrowLeftIcon  size={20} color="black" className='font-bold' />
          </TouchableOpacity> 
    <TouchableOpacity className='bg-yellow-600 p-4 w-auto  mx-2 rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('AdminOrders')}>
              
              <Text className='text-white font-extrabold text-base '>View All Orders</Text>
               </TouchableOpacity> 
    
               {/* <TouchableOpacity className='bg-yellow-600 p-4 w-auto mx-2  rounded-md flex-row items-center my-3 justify-center' onPress={()=>navigateHandler('AdminProducts')}>
              
              <Text className='text-white font-extrabold text-base '>Products</Text>
               </TouchableOpacity>  */}
    
      <Text className='font-bold text-lg text-black ml-2'>All Products</Text>
              <ProductHead/>
              <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {
            products.map((item, index) => (
                  <ProductListItem
                    // navigate={navigation}
                    // deleteHandler={deleteProductHandler}
                    key={item._id}
                    id={item._id}
                    i={index}
                    price={item.price}
                    stock={item.stock}
                    name={item.name}
                    category={item.category?.category}
                    imgSrc={item.images[0].url}
                  />
            ))
            }
              </View>

              </ScrollView>

    </View>
        )
          }
    </>
  )
}

export default Admin