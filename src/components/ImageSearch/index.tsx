import React, { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { Searchbar } from "react-native-paper";
import api from "../../services/Api";
const API_KEY = "5CG7dHBQlsaghGMqsSrV0SYyBaPjSeGE";
const LIMIT = 20;

export default function index({ onPressItem }: any) {
  const [gifs, setGifs] = useState([]);
  const [term, updateTerm] = useState("");
  const onChangeSearch = (query: any) => updateTerm(query);

  // search
  async function searchGifs() {
    const URL_GIPHY = `/gifs/search?api_key=${API_KEY}&q=${term}&limit=${LIMIT}&offset=0&rating=g&lang=pt`;
    await api
      .get(URL_GIPHY)
      .then((res) => {
        const { data } = res.data;
        if (data.length > 0) {
          setGifs(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function onSearchTerm() {
    searchGifs();
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Busca imagem no Giphy"
        onChangeText={onChangeSearch}
        onKeyPress={(key): any => {
          const { code }: any = key;
        }}
        onSubmitEditing={() => onSearchTerm()}
        value={term}
      />

      <View style={styles.scrollView}>
        <FlatList
          data={gifs}
          renderItem={({ item }: any) => (
            <TouchableHighlight
              onPress={() => {
                let param = {
                  title: item.title,
                  id: item.id,
                  url: item.images.original.url,
                };
                onPressItem(param);
              }}
            >
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: item.images.original.url }}
              />
            </TouchableHighlight>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 1,
  },
  image: {
    width: 250,
    height: 250,
    borderWidth: 1,
    marginBottom: 1,
  },
  scrollView: {
    flex: 1,
    flexDirection: "column",
    margin: 1,
    height: 50,
    marginHorizontal: 5,
  },
});
