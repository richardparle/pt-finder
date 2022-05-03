import { StatusBar } from "expo-status-bar";
import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./src/firebase";

export default function App() {
  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "test")).then((data) => {
      data.docs.forEach((item) => {
        console.log(item.data());
        setQueryData((current) => {
          return [...current, item];
        });
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ul key="testDataList">
        {queryData.map((user, index) => {
          return (
            <li key={"testli" + index}>
              {user.id} === {JSON.stringify(user.data())}
            </li>
          );
        })}
      </ul>
      <StatusBar style="auto" />
      <TestDataPush />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
