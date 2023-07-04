
import React,{useEffect} from 'react'
import { UserIcon,ShoppingCartIcon,HomeIcon } from "react-native-heroicons/solid";
import { useSelector } from 'react-redux';
import Cart from '../screens/Cart';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
import Landing from '../screens/Landing';
import WorkOut from '../screens/WorkOut';
import FitScreen from '../screens/FitScreen';
import Rest from '../screens/Rest';
import Profile from '../screens/Profile';
import Orders from '../screens/Orders';
import Sub from '../screens/Sub';
import Admin from '../screens/Admin';
import ChangePassword from '../screens/ChangePassword';
import Product from '../screens/Product';
import Checkout from '../screens/Checkout';
import Pay from '../screens/Pay';
import AdminOrders from '../screens/admin/Orders';
const Main = () => {

    // const Drawer = createNativeDrawerNavigator();
    // const { isOnBoardingDisabled } = useSelector((state) => state.user);
    const HomeStack = () => {
      return (
        <Stack.Navigator>
            <Stack.Screen name="Landing" component={Landing}  options={{headerShown: false}} />
             <Stack.Screen name="WorkOut" component={WorkOut}  options={{headerShown: false}} />
             <Stack.Screen name="FitScreen" component={FitScreen}  options={{headerShown: false}} />
             <Stack.Screen name="Rest" component={Rest}  options={{headerShown: false}} />
        </Stack.Navigator>
      );
    };

    const AdminStack=()=>{
      return (
        <Stack.Navigator>
            <Stack.Screen name="MyAdmin" component={Admin}  options={{headerShown: false}} />
             <Stack.Screen name="AdminOrders" component={AdminOrders}  options={{headerShown: false}} />
             <Stack.Screen name="AdminProducts" component={Sub}  options={{headerShown: false}} />
             {/* <Stack.Screen name="Admin" component={Admin}  options={{headerShown: false}} />
             <Stack.Screen name="ChangePassword" component={ChangePassword}  options={{headerShown: false}} /> */}
         
        </Stack.Navigator>
      )
    }

    
       const ProfileStack = ({navigation}) => {
        console.log('render')


        useEffect(()=> {
         return ()=> {
          console.log('left')
         }
        }, []);
        return (
          <Stack.Navigator initialRouteName='MyProfile'>
              <Stack.Screen name="MyProfile" component={Profile}  options={{headerShown: false}} />
               <Stack.Screen name="Orders" component={Orders}  options={{headerShown: false}} />
               <Stack.Screen name="Sub" component={Sub}  options={{headerShown: false}} />
               <Stack.Screen name="Admin" component={AdminStack}  options={{headerShown: false}} />
               <Stack.Screen name="ChangePassword" component={ChangePassword}  options={{headerShown: false}} />
           
          </Stack.Navigator>
        );
      };




                     
        

      const ProductStack = () => {
        return (
          <Stack.Navigator>
              <Stack.Screen name="MyProduct" component={Product}  options={{headerShown: false}} />
            <Stack.Screen name="Cart" component={Cart}  options={{headerShown: false}} />
                <Stack.Screen name="Checkout" component={Checkout}  options={{headerShown: false}} />
                <Stack.Screen name="Pay" component={Pay}  options={{headerShown: false}} />
           
          </Stack.Navigator>
        );
      };
  return (
      <Drawer.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown:false,
        drawerLabelStyle:{marginLeft:-25,
          fontFamily:'Roboto-Medium',
          fontSize:15
        },
        // drawerActiveBackgroundColor:'red',
        drawerActiveTintColor:'#333',
        drawerInactiveTintColor:'#333'
      }}
      drawerContent={props=><CustomDrawer {...props}/>}
      >
            
              <Drawer.Screen name="Home" component={HomeStack} options={{

                drawerIcon:(color)=>(
                  <HomeIcon size={22} color={'black'}/>
                )
              }} />
             
             
            
              <Drawer.Screen name="Product" component={ProductStack}   options={{ drawerIcon:(color)=>(
                  <ShoppingCartIcon size={22} color={'#333'}/>
                )}} />
                <Drawer.Screen name="Profile" component={ProfileStack}  options={{ drawerIcon:(color)=>(
                  <UserIcon size={22} color={'black'}/>
                )}} />
             
 
 </Drawer.Navigator>
  )
}

export default Main;