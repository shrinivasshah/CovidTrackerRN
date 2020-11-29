import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Card, Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
function CovidDetails({ route }) {
  const navigation = useNavigation();
  const {
    confirmedCasesForeign,
    confirmedCasesIndian,
    deaths,
    discharged,
    loc,
    totalConfirmed,
  } = route.params;

  const colorSwitch = (val) => {
    if (val >= 5000 && val <= 10000) {
      return "orange";
    } else if (val <= 5000) {
      return "green";
    } else if (val >= 10000) {
      return "red";
    }
  };

  return (
    <Card>
      <Card.Title style={{ color: "#10356c", fontSize: 20 }}>{loc}</Card.Title>
      <Card.Divider />
      <Text h3 style={{ marginBottom: 35 }}>
        Total Confirmed:{" "}
        <Text style={{ color: colorSwitch(totalConfirmed) }}>
          {totalConfirmed}
        </Text>
      </Text>
      <Text h4>
        Deaths: <Text style={{ color: "red" }}>{deaths}</Text>
      </Text>
      <Text h4 style={styles.textMarginBottom}>
        Discharged: <Text style={{ color: "green" }}>{discharged}</Text>
      </Text>
      <Card.Divider />
      <Text style={styles.textMarginBottom}>
        Confirmed Indian Cases: {confirmedCasesIndian}
      </Text>
      <Text style={styles.textMarginBottom}>
        Confirmed Foriegn Cases : {confirmedCasesForeign}
      </Text>
      <Card.Divider />

      <Button
        icon={<AntDesign name="caretleft" size={24} color="#fff" />}
        onPress={() => navigation.goBack()}
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0,
        }}
        title="Back"
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  textMarginBottom: {
    marginBottom: 10,
  },
});
export default CovidDetails;
