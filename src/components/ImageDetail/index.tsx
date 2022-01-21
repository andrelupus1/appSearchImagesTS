import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { View } from "../Themed";

export default function Index({ data }: any) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#fffff",
    backgroundColor: "#222222",
    alignItems: "center",
    padding: 1,
  },
  image: {
    marginVertical: 1,
    width: 400,
    height: 400,
    borderWidth: 1,
    marginBottom: 1,
  },
});
