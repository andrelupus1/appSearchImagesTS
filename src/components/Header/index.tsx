import React from "react";
import { View } from "../Themed";
import { Image, StyleSheet } from "react-native";
const logo = "../../../resource/appstore.png";
export default function Index() {
  const LoadingScreen = () => (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: 300,
      height: 400,
    },
  });
}
