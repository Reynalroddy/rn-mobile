
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
// import { colors } from "../styles/styles";
// import { Avatar, Button } from "react-native-paper";
import { XCircleIcon } from "react-native-heroicons/solid";
const MyModal = ({ id, deleteHandler, navigate, setOpenModal }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: 10,
          right: 10,
        }}
        onPress={() => setOpenModal(false)}
      >
        <XCircleIcon
          icon={"close"}
          size={25}
          style={{
            backgroundColor: 'red',
            color:'white'
          }}
        />
      </TouchableOpacity>

      <Text
style={styles.text}
// onPress={() => navigate.navigate("updateproduct", { id })}
>
Edit
</Text>

<Text
style={styles.text}
// onPress={() => deleteHandler(id)}
>
Delete
</Text>
</View>
);
};

const styles = StyleSheet.create({
container: {
width: 200,
height: 100,
alignSelf: "center",
justifyContent: "center",
zIndex: 100,
backgroundColor: 'white',
padding: 20,
borderRadius: 10,
},

text: {
fontWeight: "900",
textAlign: "center",
textTransform: "uppercase",
marginVertical:6
},
});

export default MyModal;