import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { View, StyleSheet } from "react-native";
import CaseList from "../components/CaseList";
import SearchBarComponent from "../components/SearchBar";

function Home() {
  const [coronaData, setCoronaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.rootnet.in/covid19-in/stats/latest"
      );
      setCoronaData(response.data.data.regional);
    };
    getData();
  }, []);

  const filteredData = coronaData.filter((item) => {
    return item.loc.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const searchTermHandler = (term) => {
    setSearchTerm(term);
  };

  return (
    <View>
      <SearchBarComponent
        searchTerm={searchTerm}
        searchTermHandler={searchTermHandler}
      />
      <CaseList list={filteredData} />
    </View>
  );
}

const style = StyleSheet.create({});

export default Home;
