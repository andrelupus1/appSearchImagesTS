import React from "react";
import { Platform, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "../components/Themed";
import { Button, Appbar } from "react-native-paper";
import ImageDetail from "../components/ImageDetail";
import { RootStackScreenProps } from "../../types";
import { CommonActions } from "@react-navigation/native";

export default function DetailScreen({
  navigation,
  route,
}: RootStackScreenProps<"Detail">) {
  return (
    <View style={styles.container}>
      <ImageDetail data={route.params} />
      {console.log(route.params)}
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
