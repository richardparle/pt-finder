import { collection, getDocs, setDoc } from "firebase/firestore";
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
      setCurrentGoalentry("");
      // const colRef=collection(db,"userExerciseGoals")
      // getDocs(colRef).then((snapshot))=>{
      //   let docRef=""
      //   snapshot.doc.forEach((doc)=>{
      //       if(doc.data().email ===)
      //   })
      // })
      // setDoc(colRef, {
      //     email: user.email,
      //     exerciseGoals: exerciseGoals,
      //   })
      //     .then(() => {
      //       console.log("DONE");
      //     })
      //     .catch(() => {
      //       console.log("ERROR GOALS");
      //     });
    }
  };

  console.log("GOALS", exerciseGoals);

  return (
    <>
      <h2>Exercise Goals</h2>
      <View>
        {exerciseGoals.map((goal, ind) => {
          return (
            <Text style={styles.goalListItem} key={ind}>
              {goal}
            </Text>
          );
        })}
      </View>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={saveGoalClick} style={styles.button}>
          <Text style={styles.buttonOutlineText}>Save New Goal</Text>
        </TouchableOpacity>
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
  },
  goalListItem: {
    backgroundColor: "lightblue",
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
export default ExerciseGoals;
