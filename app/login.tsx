import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { router } from 'expo-router';
// import { router } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(tabs)/el-acor');
    } catch (error: any) {
      console.error(error);
      alert('Login failed' + error.message);
    }
  };

  const handleSignup = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(tabs)/el-acor');
    } catch (error: any) {
      console.error(error);
      alert('Login failed' + error.message);
    }
  };

  return (
    <View>
      <KeyboardAvoidingView behavior="padding">
        <TextInput value={email} onChangeText={setEmail}>
          <Text>Email</Text>
        </TextInput>
        <TextInput value={password} onChangeText={setPassword} secureTextEntry>
          <Text>Password</Text>
        </TextInput>
        <Button title="Login" onPress={handleLogin} />
        <Button title="Sign Up" onPress={handleSignup} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
