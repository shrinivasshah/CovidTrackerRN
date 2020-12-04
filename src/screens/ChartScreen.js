import React from "react";
import { View, Text } from "react-native";
import BarChartComp from "../components/BarChartComp";
import PieChartComp from "../components/PieChartComp";

function ChartScreen() {
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginBottom: 10 }}>
        <Text
          h1
          style={{
            borderRadius: 15,
            color: "#10356c",
            fontSize: 20,
            textAlign: "center",
            backgroundColor: "white",
            paddingVertical: 10,
          }}
        >
          Line Chart Analysis
        </Text>
        <BarChartComp />
      </View>
      <View>
        <Text
          h1
          style={{
            borderRadius: 15,
            color: "#10356c",
            fontSize: 20,
            textAlign: "center",
            backgroundColor: "white",
            paddingVertical: 2,
          }}
        >
          Top 5 States
        </Text>
        <PieChartComp />
      </View>
    </View>
  );
}

export default ChartScreen;
