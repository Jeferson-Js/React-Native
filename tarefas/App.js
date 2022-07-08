import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    alert(imc);

    if (imc < 18.6) {
      alert("Você está abixo do peso! " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      alert("Você esta com o pessoa ideal! " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      alert("Você esta levemente acima do peso! " + imc.toFixed(2));
    }
  }
  return (
    <View style={styles.container}>
      <Image source={require("./assets/imc.png")}></Image>
      <Text style={styles.texto}>Calcule o seu IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
  },
  texto: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "bold",
  },
  input: {
    fontSize: 20,
    backgroundColor: "#121212",
    borderRadius: 10,
    margin: 15,
    padding: 10,
    width: "70%",
    color: "#fff",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
    backgroundColor: "#f00",
    padding: 10,
    borderRadius: 30,
    width: "50%",
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
  },
});
