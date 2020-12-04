import React from "react";
import { Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import CaseItem from "./CaseItem";

function CaseList({ list }) {
  // console.log(list);
  return (
    <>
      <ScrollView>
        {list.map((item, index) => {
          return <CaseItem item={item} key={index} />;
        })}
      </ScrollView>
    </>
  );
}

export default CaseList;
