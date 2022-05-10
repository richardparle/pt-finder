import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [profilePicURL, setProfilePicURL] = useState("");
  const [exerciseGoals, setExerciseGoals] = useState([]);
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
          profilePicURL,
        });
        const UserExerciseGoals = await addDoc(
          collection(db, "userExerciseGoals"),
          {
            email,
            exerciseGoals,
          }
        );
        alert("Registration complete");
        navigation.navigate("Dashboard");
      } else {
        await addDoc(collection(db, "Personal Trainers"), {
          email,
          location,
          username,
          phoneNumber,
          profilePicURL,
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
        <TextInput
          placeholder="ProfilePic"
          value={profilePicURL}
          onChangeText={(text) => setProfilePicURL(text)}
          style={styles.input}
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
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        <Text>
          Register as Personal Trainer: {isPersonalTrainer ? "YES" : "NO"}
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};
//
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
    backgroundColor: "#F0CF29",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },
  buttonOutline: {
    backgroundColor: "black",
    marginTop: 5,
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  label: {
    margin: 8,
  },
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
