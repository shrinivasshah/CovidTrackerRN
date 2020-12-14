import React from "react";
import { ListItem } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function CaseItem({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.push("DetailScreen", item)}>
      <ListItem bottomDivider>
        <ListItem.Content style={{ paddingLeft: 5 }}>
          <ListItem.Title style={{ color: "#10356c", fontSize: 18 }}>
            {item.loc}
          </ListItem.Title>
          <ListItem.Subtitle style={{ color: "red" }}>
            deaths: {item.deaths}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron style={{ paddingRight: 5 }} />
      </ListItem>
    </TouchableOpacity>
  );
}

export default CaseItem;
