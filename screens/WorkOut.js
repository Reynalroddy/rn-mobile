import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useRoute,useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon,CheckCircleIcon } from "react-native-heroicons/solid";
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useSelector,useDispatch} from 'react-redux';
import { handleChange } from '../redux/workoutSlice';
const WorkOut = () => {
    const { completed } = useSelector((state) => state.work);
    const route = useRoute();
    const navigation = useNavigation()
    const dispatch = useDispatch();
  return (
    <>
    <ScrollView  showsVerticalScrollIndicator={false}>
    <View className='relative'>
    <Image source={{ 
             uri: route.params.image 

           }}
           className='h-56 w-full bg-gray-300 p-4'
           />
          <TouchableOpacity className='bg-white h-9 w-9 rounded-full flex-row items-center justify-center absolute top-16 left-3' onPress={navigation.goBack}>
           {/* <Ionicons name='arrow-left' size={20} color='white' className='font-bold'/> */}
           <ArrowLeftIcon size={20} color="black" className='font-bold' />
           </TouchableOpacity> 
         
       </View>

       {route.params.excersises.map((item, index) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={index}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 13, fontWeight: "bold",width:170, }}>
                {item.name}
              </Text>

              <Text style={{ marginTop: 4, fontSize: 15, color: "gray" }}>
                x{item.sets}
              </Text>
            </View>

            {completed.includes(item.name) ? (
              <CheckCircleIcon style={{marginLeft:40}}  size={24} color="green" />
            ) : (
              null
            )}
          </Pressable>
        ))}
      </ScrollView>
<View className='bg-gray-200 w-full py-2'>
<Pressable
      onPress={() =>  {
        navigation.navigate("FitScreen",{
          excersises:route.params.excersises,
      })  

       dispatch(handleChange({name:'completed',value:[]}));
      }}

        style={{      
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          width:120,
          borderRadius:6,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          START
        </Text>
      </Pressable>

    </View>




       </>
  )
}

export default WorkOut