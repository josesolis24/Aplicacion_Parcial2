import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function FoodFavScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Comidas Favoritas</Text>

      <View style={styles.card}>

        {/* ITEM */}
        <View style={styles.row}>
          <Image
            source={require("../screens/tacos.png")}
            style={styles.image}
          />
          <Text style={styles.item}>Tacos</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require("../screens/picadillo.png")}
            style={styles.image}
          />
          <Text style={styles.item}>Picadillo</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require("../screens/hamburguesa.png")}
            style={styles.image}
          />
          <Text style={styles.item}>Hamburguesas</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require("../screens/rajas.png")}
            style={styles.image}
          />
          <Text style={styles.item}>Rajas en Salsa </Text>
        </View>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#a4c61a",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    marginBottom: 20,
    elevation: 5,
  },

  /* NUEVO */
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },

  item: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "#321ae6",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});