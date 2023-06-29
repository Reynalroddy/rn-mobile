import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {createStackNavigator} from '@react-navigation/stack';
// import HomeScreen from './screens/HomeScreen';
// import Login from '../screens/Login';
// import Register from '../screens/Register';
// import { useSelector } from 'react-redux';
import Login from '../screens/Login';
// import Profile from '../screens/Profile';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import CustomDrawer from './components/CustomDrawer';
// import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../screens/Register';
import Landing from '../screens/Landing';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();


// 
// const Drawer = createDrawerNavigator();
// import Cart from './screens/Cart';
// import PickUpScreen from './screens/PickupScreen';
// import Landing from '../screens/Landing';
// import NewHome from '../screens/NewHome';
// import WorkOut from '../screens/WorkOut';
// import FitScreen from '../screens/FitScreen';
// import Rest from '../screens/Rest';
// const Draw=()=>{
// return <Drawer.Navigator
// initialRouteName={'Home'}
// screenOptions={{
//   headerShown:false,
// //   drawerLabelStyle:{marginLeft:-25,
// //     fontFamily:Font['roboto-medium'],
// //     fontSize:15
// //   },
//   // drawerActiveBackgroundColor:'red',
//   drawerActiveTintColor:'#333',
//   drawerInactiveTintColor:'#333'
// }}
// // drawerContent={props=><CustomDrawer {...props}/>}
// >
//        {/* <Drawer.Screen name="Splash" component={SplashScreen} /> */}
//         {/* <Drawer.Screen name="Login" component={Login} />
//         <Drawer.Screen name="Register" component={Register} /> */}
//         <Drawer.Screen name="Home" component={Home} options={{

//         //   drawerIcon:(color)=>(
           
//         //     <FontAwesome name='user' size={22} color={color}/>
//         //   )
//         }} />
       
//         {/* <Drawer.Screen name="Login" component={Login} />
//         <Drawer.Screen name="Register" component={Register} /> */}
//         <Drawer.Screen name="Profile" component={Profile}  
//         // options={{ drawerIcon:(color)=>(
//             // <FontAwesome name='user' size={22} color={color}/>
//         //   )}}
//            />
//           </Drawer.Navigator>
// }
const Auth = () => {
    const Stack = createNativeStackNavigator();
    // const { isOnBoardingDisabled } = useSelector((state) => state.user);
  return (
    
      <Stack.Navigator
      initialRouteName={'Landing'}
      screenOptions={{
        headerShown:false,
      }}
      >
            
            {/* <Stack.Screen name="Landing" component={Landing} />  */}
             <Stack.Screen name="Login" component={Login} /> 
                 <Stack.Screen name="Register" component={Register} /> 
             
             
 
 </Stack.Navigator>
  )
}

export default Auth