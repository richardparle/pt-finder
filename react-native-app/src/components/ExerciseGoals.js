import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { UserContext } from "../UserContext";

const ExerciseGoals = () => {
  const [exerciseGoals, setExerciseGoals] = useState([]);
  const [currentGoalentry, setCurrentGoalentry] = useState("");
  const { user, setUser } = useContext(UserContext);

  //

  useEffect(() => {
    const colRef = collection(db, "userExerciseGoals");
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        if (document.data().email === user.email) {
          setExerciseGoals(document.data().exerciseGoals);
        }
      });
    });
  }, []);

  useEffect(() => {
    const colRef = collection(db, "userExerciseGoals");
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((document) => {
        if (document.data().email === user.email) {
          setDoc(doc(db, "userExerciseGoals", document.id), {
            email: user.email,
            exerciseGoals: exerciseGoals,
          });
        }
      });
    });
  }, [exerciseGoals]);

  const saveGoalClick = () => {
    if (currentGoalentry !== "") {
      setExerciseGoals((currExerciseGoals) => {
        return [...currExerciseGoals, currentGoalentry];
      });
      setCurrentGoalentry("");
    }
  };

  return (
    <>
      <View style={styles.text}>
        <h2>Exercise Goals</h2>
        <h3>Create an exercise goal:</h3>
        <TextInput
          placeholder="Add New Exercise Goal"
          onChangeText={(text) => {
            return setCurrentGoalentry(text);
          }}
          value={currentGoalentry}
          style={styles.input}
        />
      </View>
      <View>
        <TouchableOpacity onPress={saveGoalClick} style={styles.button}>
          <Text style={styles.buttonOutlineText}>Save New Goal</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.text}>
        <Text>Exercise goals:</Text>
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
  text: {
    fontFamily: "sans-serif",
  },
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
    marginLeft: 20,
    marginRight: 20,
  },
  button: {
    backgroundColor: "#F0CF29",
    width: "30%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    minWidth: 150,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "black",
    fontWeight: "700",
    fontSize: 16,
  },
  // container: { flex: 1, justifyContent: "center", alignItems: "center" },
  // inputContainer: { width: "80%" },
  // text: {
  //   backgroundColor: "#F0CF29",
  //   paddingHorizontal: 15,
  //   paddingVertical: 10,
  //   borderRadius: 10,
  //   marginTop: 5,
  // },
  // buttonText: { color: "black", fontWeight: "700", fontSize: 16 },
  // checkboxContainer: {
  //   flexDirection: "row",
  //   marginBottom: 20,
  // },
  // checkbox: {
  //   alignSelf: "center",
  // },
  // label: {
  //   margin: 8,
  // },
});
export default ExerciseGoals;
