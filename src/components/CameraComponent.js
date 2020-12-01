import React, { useState } from "react";
import { View, Button, Text, StyleSheet, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
const ImgPicker = (props) => {
  const [pickedImage, setPickedImage] = useState();
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      quality: 0.5,
    });
    setPickedImage(image.uri);
    // props.onImageTaken(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No Image Picked yet</Text>
        {pickedImage ? (
          <Image
            source={{ uri: pickedImage }}
            style={{ width: 400, height: 200 }}
          />
        ) : (
          <Text>No Picked Image</Text>
        )}
      </View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    width: "100%",
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});

export default ImgPicker;
