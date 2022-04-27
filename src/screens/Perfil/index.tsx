import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./style";

export default function Perfil() {
  return (
    <View style={styles.container}>
      
        <Image source={require("../../assets/pedro.png")} />
        <Text>Pedro Arthur L. Guimarães</Text>

    </View>
  );
}
