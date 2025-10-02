import { router } from 'expo-router';
import { KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(tabs)/el-acor');
    } catch (error: any) {
      console.error(error);
      alert('Login failed' + error.message);
    }
  };
  const signup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user) router.replace('/(tabs)/el-acor');
      console.log(user);
    } catch (error: any) {
      console.error(error);
      alert('Signup failed' + error.message);
    }
  };

  return (
    <SafeAreaView>
      <Text>Hello Tunideos App</Text>
      <KeyboardAvoidingView behavior="padding">
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text onPress={login}>Login</Text>
        <Text onPress={signup}>Sign Up</Text>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
