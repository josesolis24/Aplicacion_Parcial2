import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Pantalla Inicio</Text>
      <Text style={styles.subtitle}>Selecciona una opción</Text>

      <View style={styles.card}>
        
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={() => navigation.navigate("ExampleEvent", { nombre: "Emiliano" })}
        >
          <Text style={styles.buttonText}>Ir a Eventos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("Counter")}
        >
          <Text style={styles.buttonText}>Ir a Contador</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonAbout}
          onPress={() => navigation.navigate("AboutMe")}
        >
          <Text style={styles.buttonText}>Ir a About Me</Text>
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
    backgroundColor: "#97299753",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#055a8fc3",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 25,
    color: "#555",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  buttonPrimary: {
    backgroundColor: "#0a8f9e",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
  },
  buttonSecondary: {
    backgroundColor: "#09579084",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
    marginBottom: 15,
    elevation: 5,
  },
  buttonAbout: {
    backgroundColor: "#48ff00",
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: "center",
    elevation: 5,
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
});