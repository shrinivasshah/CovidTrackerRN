import React from "react";
import PieChartComp from "../components/PieChartComp";
import { Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import CaseItem from "./CaseItem";

function CaseList({ list }) {
  // console.log(list);
  return (
    <>
      <ScrollView>
        <Text
          h2
          style={{
            textAlign: "center",
            backgroundColor: "white",
            paddingVertical: 10,
          }}
        >
          Top 5 States
        </Text>
        <PieChartComp />
        {list.map((item, index) => {
          return <CaseItem item={item} key={index} />;
        })}
      </ScrollView>
    </>
  );
}

export default CaseList;
