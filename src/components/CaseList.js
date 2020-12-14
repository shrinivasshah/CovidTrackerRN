import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import CaseItem from "./CaseItem";

function CaseList({ list }) {
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
