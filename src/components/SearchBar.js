import React from "react";
import { SearchBar } from "react-native-elements";

const SearchBarComponent = ({ searchTerm, searchTermHandler }) => {
  return (
    <SearchBar
      placeholder="Search State"
      onChangeText={searchTermHandler}
      value={searchTerm}
      lightTheme
      cancelIcon
      round
    />
  );
};
export default SearchBarComponent;
