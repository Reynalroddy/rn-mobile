import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ProductHead = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Image</Text>
    <Text style={styles.text}>Price</Text>
    <Text style={{ ...styles.text, width: null, maxWidth: 120 }}>Name</Text>
    <Text style={{ ...styles.text, width: 60 }}>Category</Text>
    <Text style={styles.text}>Stock</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flexDirection: "row",
      justifyContent: "space-between",
      height: 40,
      alignItems: "center",
      borderRadius: 5,
      padding: 10,
      marginHorizontal:10,
      marginVertical:6
    },
  
    text: {
      width: 40,
      color: 'white',
      fontWeight: "900",
    },
  });

export default ProductHead