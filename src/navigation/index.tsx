import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  RouteProp,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Image, View, Text } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import DetailScreen from "../screens/DetailScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        linking={LinkingConfiguration}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Detalhes" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops! Não encontrado." }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{ title: "Informações" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const LogoTitle = (...props: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Image
        source={require("../../assets/images/icon.png")}
        resizeMode="contain"
        style={{ width: 50, height: 50 }}
      />
    </View>
  );
};
function getHeaderTitle(navigation: any, route: any) {
  const { params } = route;
  return (
    <SafeAreaView>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text onPress={() => navigation.goBack("Root")}>
          {"< " + (params.title ? params.title : ``)}
        </Text>
      </View>
    </SafeAreaView>
  );
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "",
          headerTitle: (props) => <LogoTitle {...props} />,
          tabBarIcon: () => null,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          headerBackTitleVisible: true,
          headerLayoutPreset: "center",
          // headerShown: false
        })}
      />
      <BottomTab.Screen
        name="Detail"
        component={DetailScreen}
        options={({
          navigation,
          route,
        }: RootTabScreenProps<"Detail"> | any) => ({
          title: "Detalhes",
          headerTitle: () => getHeaderTitle(navigation, route),
          tabBarIcon: () => null,
          tabBarLabel: () => null,
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
