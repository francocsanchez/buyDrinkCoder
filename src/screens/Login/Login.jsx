import { Pressable, Text, TextInput, View, Image, Alert } from "react-native";
import React, { useState } from "react";

import { insertSession } from "../../db";
import { setUser } from "../../features/auth/authSlice";
import styles from "./login.styles";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../services/authApi";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = () => {
    triggerLogin({
      email,
      password,
    })
      .unwrap()
      .then((result) => {
        dispatch(setUser(result));
        insertSession({
          localId: result.localId,
          email: result.email,
          token: result.idToken,
        })
          .then((result) => console.log(result))
          .catch((error) => console.log(error.message));
      });
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
          <Pressable style={styles.registerButton} onPress={onSubmit}>
            <Text style={styles.textButton}>Ingresar</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Text style={styles.titleLogin}>No posees una cuenta?</Text>
          <Pressable
            style={styles.loginButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.textButton}>Registrar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Login;
