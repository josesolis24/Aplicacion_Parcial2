import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function AboutMeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sobre Mí</Text>
      <Text style={styles.description}>
        Hola 👋 Soy estudiante de programación.
        Me gusta desarrollar aplicaciones móviles con React Native.
      </Text>

      <View style={styles.card}>

        <TouchableOpacity
          style={styles.buttonFood}
          onPress={() => navigation.navigate("FoodFavScreen")}
        >
          <Text style={styles.buttonText}>🍔 Comidas favoritas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonMovies}
          onPress={() => navigation.navigate("MoviesFavScreen")}
        >
          <Text style={styles.buttonText}>🎬 Películas favoritas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonHome}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>🏠 Volver a Inicio</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#12579c56",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 25,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    elevation: 8,
  },
  buttonFood: {
    backgroundColor: "#08f2fe",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonMovies: {
    backgroundColor: "#513ee591",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonHome: {
    backgroundColor: "#00B894",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});