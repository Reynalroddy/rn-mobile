import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
// import { colors } from "../styles/styles";
// import MyModal from "../components/MyModal";
import MyModal from '../components/Modal';
const ProductListItem = ({
navigate,
deleteHandler,
i,
id,
price,
stock,
name,
category,
imgSrc,
}) => {
const [openModal, setOpenModal] = useState(false);

return (
  <>
    <TouchableOpacity
      activeOpacity={0.9}
      onLongPress={() => setOpenModal((prev) => !prev)}
    //   onPress={() => navigate.navigate("productdetails", { id })}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: i % 2 === 0 ? '#cb8a03' : 'black',
        }}
      >
        <Image
          source={{
            uri: imgSrc,
          }}
          style={{
            width: 40,
            height: 40,
            resizeMode: "contain",
          }}
        />
<Text
style={{
  width: 60,
  color: 'white',
}}
numberOfLines={1}
>
N {price}
</Text>

<Text
style={{
  maxWidth: 120,
  color: 'white',
}}
numberOfLines={1}
>
{name}
</Text>

<Text
style={{
  width: 60,
  color: 'white',
}}
numberOfLines={1}
>
{category}
</Text>

<Text
style={{
  width: 40,
  color: 'white',
}}
numberOfLines={1}
>
  {stock}
</Text>
</View>
</TouchableOpacity>

{openModal && (
<MyModal
id={id}
deleteHandler={deleteHandler}
navigate={navigate}
setOpenModal={setOpenModal}
/>
)}
</>
);
};

const styles = StyleSheet.create({
container: {
flexDirection: "row",
justifyContent: "space-between",
height: 70,
alignItems: "center",
padding: 10,
borderRadius: 10,
marginVertical: 10,
marginHorizontal:8
},
});

export default ProductListItem;