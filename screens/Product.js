import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import React,{useEffect} from 'react'
import { getAllProducts } from '../redux/actions/productActions'
import { useDispatch,useSelector } from 'react-redux'
import Header from '../components/Header'
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { useNavigation } from '@react-navigation/native'
const Product = () => {
const dispatch = useDispatch();
const { products,loading } = useSelector((state) => state.product);
const { cartItems } = useSelector((state) => state.cart);
const navigate = useNavigation();
const addToCardHandler = (id, name, price, image, stock) => {

  if (stock === 0)
    return Toast.show({
      type: "error",
      text1: "Out Of Stock",
    });
  dispatch({
    type: "addToCart",
    payload: {
      product: id,
      name,
      price,
      image,
      stock,
      quantity: 1,
    },
  });
  Toast.show({
    type: "success",
    text1: "Added To Cart",
  });
};
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  // console.log(`prod:${products}`)
  // console.log('smile')
  if(loading){
    return <ActivityIndicator size={'large'} color='black'/>
  }
  return (
    <>
    <Header title={'PRODUCTS'}/>
    <ScrollView className="px-4 py-4 flex-1">
   
    {
        products?.map((item,i)=>{
    const {_id,name,price,stock,images} = item;
            return <View className="flex-row justify-between items-center p-2 bg-white my-2 rounded-md" key={i}>

            
    <Image
                //   style={{ width: 40, height: 40, borderRadius: 20 }}
                className='w-24 h-24 my-2'
                  source={{
                    uri: item.images[0].url  ,
                  }}
                />
    
                <View>
                <Text className='font-bold'>{item.name}</Text>
                <Text className='font-bold'>N{item.price}</Text>
                    </View>
    
                    <TouchableOpacity className='bg-transparent border-2 border-gray-200 px-4 py-2 rounded-md' 
                    onPress={()=>addToCardHandler(_id, name, price, images[0].url, stock)}
                    // addToCardHandler={addToCardHandler}
                    // disabled={cartItems.find(it=>it.product === item._id)}
                    >
                        <Text className='text-center font-bold text-green-700'>
                          {cartItems.find(it=>it.product === item._id)?'In Cart':
                          'Add to cart'}
                      
                        </Text> 
                    </TouchableOpacity>
                    </View>
            
        })
    }
    </ScrollView>
<View className=' px-4 py-2 rounded-md' >
  {
    cartItems.length > 0 &&
<TouchableOpacity className='bg-yellow-600 border-0  px-4 py-2 rounded-md' 
                    onPress={()=>navigate.navigate("Cart")}
                   
                    // disabled={cartItems.length > 1}
                    >
                        <Text className='text-center font-bold text-white'>
                         
                          View cart
                      
                        </Text> 
                    </TouchableOpacity>
}

</View>
    
      
        </>
  )
}


export default Product