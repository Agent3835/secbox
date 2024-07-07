import React, { useState } from "react";
import {View , Text , Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native'

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Aquí podrías realizar la lógica de autenticación
    // Por ejemplo, verificar credenciales en una base de datos o API
    
    if (username === "user" && password === "password") {
      // Aquí podrías navegar a la siguiente pantalla o realizar alguna acción
      alert("Login successful!");
    } else {
      setError("Incorrect username or password");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity 
            onPress={() => navigation.navigate('Products')} // navegar a la pantalla Stack
                style={{
                    backgroundColor: '#478CCF',
                    padding: 10,
                    marginTop: 10,
                    width: "50%",
                    alignSelf: 'center',
                    borderRadius: 10
                }}
            >  
            <Text style= {{
                color: 'white',
                textAlign: 'center'
            }} 
            > See Product</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default LoginScreen;
