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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [postcode, setPostcode] = useState("");
  const [isPersonalTrainer, setisPersonalTrainer] = useState(false);

  const handleSignup = async () => {
    // const signupValidation = () => {
    //   let isValid = true;
    //   if (!username.match("^.{8,}$")) {
    //     isValid = false;
    //     console.log("username", isValid);
    //     alert("username not long enough - 8 chars at least needed");
    //   }
    // };
    /////Need to stop further processing if validation fails

    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (!isPersonalTrainer) {
        const UserDetails = await addDoc(collection(db, "users"), {
          email,
          postcode,
          username,
        });
        console.log("USERDETAILS", UserDetails.id);
        alert("Registration complete");
        navigation.navigate("Dashboard");
      } else {
        const PTDetails = await addDoc(collection(db, "Personal Trainers"), {
          email,
          postcode,
          username,
        });
        console.log("PTDETAILS", PTDetails.id);
        navigation.navigate("Dashboard");
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
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Postcode"
          value={postcode}
          onChangeText={(text) => setPostcode(text)}
          style={styles.input}
        />
        <CheckBox
          value={isPersonalTrainer}
          onValueChange={setisPersonalTrainer}
          style={styles.checkbox}
        />
        <Text>Check this box if you are a personal trainer</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignup} style={styles.button}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text>Is personal trainer: {isPersonalTrainer ? "YES" : "NO"}</Text>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  inputContainer: { width: "80%" },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: { color: "white", fontWeight: "700", fontSize: 16 },
  buttonOutlineText: { color: "white", fontWeight: "700", fontSize: 16 },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

export default RegisterScreen;
