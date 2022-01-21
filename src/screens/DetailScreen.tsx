import React from "react";
import { Platform, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { View } from "../components/Themed";
import ImageDetail from "../components/ImageDetail";
import { RootStackScreenProps } from "../../types";

export default function DetailScreen({
  navigation,
  route,
}: RootStackScreenProps<"Detail">) {
  return (
    <View style={styles.container}>
      <ImageDetail data={route.params} />
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
  text: {
    letterSpacing: 1.5,
    marginVertical: 5,
  },
});
