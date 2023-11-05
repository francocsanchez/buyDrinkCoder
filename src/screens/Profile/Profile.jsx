import * as ImagePicker from "expo-image-picker";

import { Image, Pressable, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCameraImage } from "../../features/auth/authSlice";
import styles from "./Profile.styles";
import { usePostProfileImageMutation } from "../../services/shopApi";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

const Profile = ({ navigation }) => {
  const image = useSelector((state) => state.auth.imageCamera);
  const { localId } = useSelector((state) => state.auth);
  const [triggerSaveProfileImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();

  const verifyCameraPermissions = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync();
    if (!granted) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermissions();

    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [9, 16],
        base64: true,
        quality: 0.4,
      });
      if (!result.canceled) {
        dispatch(
          setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
        );
      }
    }
  };

  const confirmImage = () => {
    triggerSaveProfileImage({ image, localId });
  };

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <></>
      <Pressable onPress={pickImage} style={styles.updatePhotoButton}>
        <Ionicons name="camera-reverse" size={30} color="#fff" />
        <Text style={styles.textButton}>Actualizar imagen</Text>
      </Pressable>
      <Pressable style={styles.updatePhotoButton} onPress={confirmImage}>
      <FontAwesome name="save" size={30} color="#fff" />
        <Text style={styles.textButton}>Guardar</Text>
      </Pressable>
    </View>
  );
};

export default Profile;
