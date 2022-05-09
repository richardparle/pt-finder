import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState, useContext } from "react";
import { Bluetooth, CurrencyEuro } from "react-bootstrap-icons";
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from "react-native";

import { UserContext } from "../UserContext";

const ExerciseGoals = () => {
  const [exerciseGoals, setExerciseGoals] = useState([]);
  const [currentGoalentry, setCurrentGoalentry] = useState("");
  const { user, setUser } = useContext(UserContext);

  console.log("USER IN GOALS", user);
  useEffect(() => {
    return "Nothing yet";
  }, []);

  const saveGoalClick = () => {
    if (currentGoalentry !== "") {
      setExerciseGoals((currExerciseGoals) => {
        return [...currExerciseGoals, currentGoalentry];
      });
      // .then((goals) => {
      console.log("Exer Goals2", exerciseGoals);
      setCurrentGoalentry("");
      const colRef = collection(db, "userExerciseGoals");
      getDocs(colRef).then((snapshot) => {
        snapshot.docs.forEach((document) => {
          if (document.data().email === user.email) {
            console.log("DOC ID", document.id);
            console.log("Exer Goals", exerciseGoals);
            setDoc(doc(db, "userExerciseGoals", document.id), {
              email: user.email,
              exerciseGoals: ["hello"],
            });
          }
        });
      });
      // });
    }
  };

  return (
    <>
      <h2>Exercise Goals</h2>
      <h3>Create an exercise goal:</h3>
      <View>
        <TextInput
          placeholder="Add New Exercise Goal"
          onChangeText={(text) => {
            return setCurrentGoalentry(text);
          }}
          value={currentGoalentry}
          style={styles.input}
        />
      </View>
      {/* <View style={styles.buttonContainer}> */}
      <View>
        <TouchableOpacity onPress={saveGoalClick} style={styles.button}>
          <Text style={styles.buttonOutlineText}>Save New Goal</Text>
        </TouchableOpacity>
      </View>
      <h3>Exercise goals:</h3>
      <View>
        {exerciseGoals.map((goal, ind) => {
          return (
            <Text style={styles.goalListItem} key={ind}>
              {goal}
            </Text>
          );
        })}
      </View>
    </>
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
    marginLeft: 20,
    marginRight: 20,
  },
  goalListItem: {
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  text: {
    backgroundColor: "#F0CF29",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  // buttonContainer: {
  //   width: "100%",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 5,
  //   marginLeft: 20,
  //   marginRight: 20,
  // },
  button: {
    backgroundColor: "#F0CF29",
    width: "30%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: { color: "black", fontWeight: "700", fontSize: 16 },
  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
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
export default ExerciseGoals;
