import { Pressable, Text, TextInput, View, Image } from "react-native";
import React, { useState } from "react";

import { setUser } from "../../features/auth/authSlice";
import styles from "./Signup.styles";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../../services/authApi";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [triggerSignup] = useSignUpMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerSignup({
      email,
      password,
    })
      .unwrap()
      .then((result) => {
        dispatch(setUser(result));
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.form}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
          <View style={styles.viewInput}>
            <Text style={styles.textLabel}>Email</Text>
            <TextInput
              style={styles.inputEmail}
              value={email}
              onChangeText={setEmail}
              placeholder="email@example.com"
              placeholderTextColor={"#fff"}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.inputEmail}
              value={password}
              onChangeText={setPassword}
              placeholder="********"
              placeholderTextColor={"#fff"}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.viewInput}>
            <Text style={styles.textLabel}>Confirmar password</Text>
            <TextInput
              style={styles.inputEmail}
              value={confirmPass}
              onChangeText={setConfirmPass}
              placeholder="********"
              placeholderTextColor={"#fff"}
              secureTextEntry={true}
            />
          </View>
          <Pressable style={styles.registerButton} onPress={onSubmit}>
            <Text style={styles.textButton}>Registrar</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.titleLogin}>Ya posees una cuenta?</Text>
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.textButton}>Ingresar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Signup;
