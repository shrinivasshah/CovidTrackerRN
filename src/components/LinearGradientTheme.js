import React from "react";

import { LinearGradient } from "expo-linear-gradient";

export default LinearGradientTheme = ({ colorArray }) => {
  return (
    <LinearGradient
      colors={colorArray || ["#a13388", "#10356c"]}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    />
  );
};
