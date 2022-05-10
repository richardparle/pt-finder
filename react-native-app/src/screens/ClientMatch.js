import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "../styles/styles";
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
        <Text style={{ fontSize: 50 }}>Find a PT</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          onChangeText={(text) => {
            setText(text);
          }}
          value={text}
        />
        <ul key="testDataList">
          {localPts.map((user, index) => {
            return (
              <li
                style={{
                  listStyleType: "none",
                  width: "75%",
                }}
                key={"testli" + index}
              >
                <TouchableOpacity>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "10px",
                      margin: "10px",
                      backgroundColor: "yellow",
                      borderRadius: 10,
                      fontFamily: "sans-serif",
                    }}
                  >
                    <div>
                      <Image
                        source={{
                          uri: `${user.image}`,
                        }}
                        style={{
                          width: 70,
                          height: 70,
                          borderRadius: 35,
                          float: "left",
                        }}
                      />
                    </div>
                    <div>
                      <h4>{user.name}</h4>
                      <br></br>
                      <h5>Contact Details</h5>
                      <p>Name: {user.name}</p>
                      <p>Speciality: {user.speciality}</p>
                      <p>Email: {user.email}</p>
                      <p>Phone Number: {user.phoneNumber}</p>
                    </div>
                  </div>
                </TouchableOpacity>
              </li>
            );
          })}
        </ul>
      </View>
    </>
  );
};

export default ClientMatch;
