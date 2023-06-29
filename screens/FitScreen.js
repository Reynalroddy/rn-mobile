import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React,{useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

import { Image } from 'react-native';
import { handleChange } from '../redux/workoutSlice';
import { useSelector,useDispatch } from 'react-redux';
const FitScreen = () => {
    const { workout,calories,minutes,completed } = useSelector((state) => state.work);
    const route = useRoute();
    const dispatch = useDispatch();
    // console.log(route.params);
    const navigation = useNavigation();
    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    // console.log(completed)
  return (
    <View>
    <View className='relative'>
    <Image source={{ 
             uri: current.image

           }}
           className='h-[370px] w-full bg-gray-300 '
           />
       
         
       </View>

       <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 27,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>

      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>

      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Landing");
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            DONE
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            // setCompleted([...completed, current.name]);
            dispatch(handleChange({name:'completed',value:[...completed, current.name]}));
            dispatch(handleChange({name:'workout',value:workout + 1}));
            dispatch(handleChange({name:'minutes',value:minutes + 2.5}));
            dispatch(handleChange({name:'calories',value:calories + 6.3}));
            // setMinutes(minutes + 2.5);
            // setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            DONE
          </Text>
        </Pressable>
      )}

<Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
          >
            PREV
          </Text>
        </Pressable>

{index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Landing");
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");

              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 20,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}

        </Pressable>
    </View>
  )
}

export default FitScreen