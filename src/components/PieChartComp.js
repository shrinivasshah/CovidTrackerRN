import React from "react";
import { Dimensions } from "react-native";
import { PieChart } from "expo-chart-kit";

function PieChartComp() {
  const data = [
    {
      name: "Maharashtra",
      population: 46898,
      color: "#FF9933",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Andhra Pradesh",
      population: 6976,
      color: "green",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Delhi",
      population: 8909,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Tamil Nadu",
      population: 11681,
      color: "pink",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
    {
      name: "Karnataka",
      population: 11738,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
    },
  ];
  return (
    <>
      <PieChart
        data={data}
        width={Dimensions.get("window").width - 10} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
      />
    </>
  );
}

export default PieChartComp;
