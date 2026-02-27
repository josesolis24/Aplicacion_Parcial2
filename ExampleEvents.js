import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function ExampleEvents({ navigation, route }) {

  const { nombre } = route.params || {};
  const contador = route.params?.contador;

  const handleShowData = () => {
    Alert.alert(
      "Datos recibidos",
      `Nombre: ${nombre || "No enviado"}\nContador: ${contador ?? "No enviado"}`
    );
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.card}>
        <Text style={styles.title}>Pantalla Eventos</Text>

        {nombre && (
          <Text style={styles.text}>Hola, {nombre}</Text>
        )}

        {contador !== undefined && (
          <Text style={styles.text}>
            El contador enviado es: {contador}
          </Text>
        )}

        {/* BOTÓN ALERT */}
        <TouchableOpacity
          style={styles.buttonPrimary}
          onPress={handleShowData}
        >
          <Text style={styles.buttonText}>
            Mostrar datos en Alert
          </Text>
        </TouchableOpacity>

        {/* BOTÓN VOLVER */}
        <TouchableOpacity
          style={styles.buttonSecondary}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>
            Volver a Home
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f4f6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: 25,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#563131",
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#3802ff",
  },
  buttonPrimary: {
    backgroundColor: "#FF6B6B",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  buttonSecondary: {
    backgroundColor: "#6C757D",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "#070706",
    fontWeight: "bold",
    fontSize: 16,
  },
});