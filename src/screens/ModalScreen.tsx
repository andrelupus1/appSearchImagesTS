import { StatusBar } from "expo-status-bar";
import React from "react";
import { Linking, Platform, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { Card, Title, Paragraph } from "react-native-paper";
import { RootStackScreenProps } from "../../types";

export default function ModalScreen({
  navigation,route
}: RootStackScreenProps<"Modal">) {
   
  return (
   <View style={styles.container}>
      <Text style={styles.title}>Informações sobre o App.</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Card>
        <Card.Title title={"Informações sobre o App"} subtitle="" />
        <Card.Content>
          <Title> Caso de Uso:</Title>
          <Paragraph>
            Criar um app para busca de imagens do servidor GIPHY
            (https://giphy.com/). - No header tem uma imagem, logo abaixo um
            campo de busca e depois uma lista contendo algumas imagens, você
            pode opcionalmente mandar listar só 20. - Quando é realizado o click
            em uma das imagens é direcionado para uma outra tela, na tela
            seguinte será mostrado a mesma imagem e no header terá o título da
            imagem, um botão voltar que deve funcionar e um ícone de
            compartilhar que não precisa ter funcionalidade.
          </Paragraph>
          <Paragraph>
            Obs: Não há necessidade de fazer nenhum tipo de pagamento para
            utilizar a API e fazer esse teste. Para usar a API é necessário ter
            uma conta, então basta criar uma e seguir os passos que o próprio
            site informa.
            <Text
              style={{ color: "blue" }}
              onPress={() =>
                Linking.openURL(
                  " https://www.notion.so/AppSearchImage-0fa5020e7bba4d498edf0e87bd5434b2"
                )
              }
            >
              Segue link para mais informações:
            </Text>
          </Paragraph>
        </Card.Content>
      </Card>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
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
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
  text: {
    letterSpacing: 1.5,
    marginVertical: 5,
  },
});
