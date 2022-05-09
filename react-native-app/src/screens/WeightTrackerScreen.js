import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { styles } from "./LoginScreen";
import { useState } from "react";
import WeightTrackerBtn from "../components/WeightTrackerBtn";

const WeightTrackerScreen = () => {
  const [weight, setWeight] = useState([]);
  const [text, setText] = useState("");

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 50, color: "blue" }}>Weight Tracker</Text>
        <TextInput
          style={style.input}
          placeholder="Enter current weight (kg)"
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
        />
        <Button
          title="Add"
          onPress={() => {
            setWeight([...weight, text]);
            setText("");
          }}
        />
        <Text>
          <ul>
            {weight.map((item) => {
              return <li key={Math.random() * 1000}>{`${item}kg`}</li>;
            })}
          </ul>
        </Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: 200,
  },
});

export default WeightTrackerScreen;

<WeightTrackerBtn />;
