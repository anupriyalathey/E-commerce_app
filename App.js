import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList.js";
import { ProductDetails } from "./screens/ProductDetails.js";
import { Cart } from "./screens/Cart.js";
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./components/CartIcon.js";
import { SafeAreaView } from "react-native-web";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductsList}
            options={({ navigation }) => ({
              title: "PRODUCTS",

              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={({ navigation }) => ({
              title: "Products",
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({ navigation }) => ({
              title: "Products",
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>Built by Anupriya Lathey</Text>
        <Text style={styles.textStyle}>(102103373)</Text>
      </View>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  Container: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  headerFooterStyle: {
    width: "100%",
    height: 60,
    backgroundColor: "#5D369D",
  },

  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    padding: 2.5,
    fontWeight: "bold",
  },
});

export default App;
