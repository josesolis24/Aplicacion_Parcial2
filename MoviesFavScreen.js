import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function MoviesFavScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Mis Películas Favoritas</Text>

      <View style={styles.card}>

        <View style={styles.row}>
          <Image
            source={require("../screens/avengers.png")}
            style={styles.image}
          />
          <Text style={styles.item}>Avengers</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require("../screens/misionimposible.png")}
            style={styles.image}
          />
          <Text style={styles.item}>Mision imposible</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require("../screens/rapidos.png")}
            style={styles.image}
          />
          <Text style={styles.item}>Rápidos y Furiosos</Text>
        </View>

        <View style={styles.row}>
          <Image
            source={require("../screens/mascara.png")}
            style={styles.image}
          />
          <Text style={styles.item}>La mascara</Text>
        </View>

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}> Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#15c74e",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#17b4c9",
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
    backgroundColor: "#6C5CE7",
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