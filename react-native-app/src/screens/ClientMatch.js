import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { styles } from "./LoginScreen";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const ClientMatch = () => {
  const [location, setLocation] = useState("");
  const [text, setText] = useState("");
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "Personal Trainers")).then((data) => {
      let dataArr = [];
      data.docs.forEach((item) => {
        dataArr.push(item.data());
      });
      setQueryData(dataArr);
    });
  }, []);

  const localPts = queryData.filter((pt) => {
    return pt.city === text;
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 50, color: "blue" }}>Find a PT</Text>
        <TextInput
          style={style.input}
          placeholder="Enter location"
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
        />
        <ul key="testDataList">
          {localPts.map((user, index) => {
            return <li key={"testli" + index}>{user.email}</li>;
          })}
        </ul>
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

export default ClientMatch;
