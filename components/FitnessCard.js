import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { exercises } from '../data'
import { BoltIcon } from "react-native-heroicons/solid";
// import { ScrollView } from 'react-native-gesture-handler'
// import { Ionicons ,MaterialCommunityIcons} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
const FitnessCard = () => {
    const navigation = useNavigation();
  return (
    <View className='my-4'> 
   {
    exercises.map((item,i)=>{
        return   <Pressable
        onPress={() => navigation.navigate("WorkOut",{
          image:item.image,
          excersises:item.excersises,
          id:item.id,
        })}
          style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
          key={i}
        >
          <Image
            style={{ width: "93%", height: 140, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <BoltIcon
            style={{ position: "absolute", color: "white", bottom: 15,left:20 }}
            size={24}
            color="black"
          />
        </Pressable>
    })
   }
   
    </View>
  )
}

export default FitnessCard