import { View, Text } from 'react-native'
import React ,{useEffect}from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';
const Pay = ({}) => {
     const nav = useNavigation();
    const {url } = useSelector((state) => state.other);
    useEffect(() => {
     if(!url){
nav.goBack();
     }
    }, [url])
    console.log(url)
    return (
        <WebView 
          source={{ uri: url }}
          style={{ marginTop: 40 }}
        />
      );
}

export default Pay