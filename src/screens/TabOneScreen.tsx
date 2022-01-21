import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootStackScreenProps } from "../../types";
import ImageSearch from "../components/ImageSearch";

export default function TabOneScreen({
  navigation,
}: RootStackScreenProps<"Root">) {
  return (
    <View
      style={styles.container}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    >
      <Text style={styles.title}>Seja bem-vindo!</Text>
      <ImageSearch
        onPressItem={(pageParams: undefined) => {
          navigation.navigate("Detail", pageParams);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  error: {
    color: "#8d0808",
  },
});
