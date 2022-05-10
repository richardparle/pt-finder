import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { styles } from "../styles/styles";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isPersonalTrainer, setIsPersonalTrainer] = useState(false);

  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (!isPersonalTrainer) {
        await addDoc(collection(db, "users"), {
          email,
          location,
          username,
          phoneNumber,
        });
        alert("Registration complete");
        navigation.navigate("Dashboard");
      } else {
        await addDoc(collection(db, "Personal Trainers"), {
          email,
          location,
          username,
          phoneNumber,
        });
        // add PT Dashboard
        navigation.navigate("PTProfilePage");
        alert("Registration complete");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
          pattern={[
            "^.{8,}$", // min 8 chars
            "(?=.*\\d)", // number required
            "(?=.*[A-Z])", // uppercase letter
          ]}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Location (e.g Manchester)"
          value={location}
          onChangeText={(text) => setLocation(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Are you a personal trainer?</Text>
          <CheckBox
            value={isPersonalTrainer}
            onValueChange={setIsPersonalTrainer}
            style={styles.checkbox}
          />
        </View>
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Register as Personal Trainer: {isPersonalTrainer ? "YES" : "NO"}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};


export default RegisterScreen;
