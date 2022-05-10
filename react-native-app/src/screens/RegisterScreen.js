import {
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
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
        const UserWeightTracker = await addDoc(
          collection(db, "userWeightTracker"),
          {
            email,
            weightTracker: [],
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
        <Image
          style={{
            width: 250,
            height: 250,
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 50,
            borderWidth: "2.5px",
            borderRadius: "8px",
          }}
          source={require("../images/app-logo.png")}
        />
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
