import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { getAuth, User } from 'firebase/auth';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  getAuth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      router.replace('/');
    }
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Profile</Text>
      <Text>Hello {user?.email}</Text>
      <Button title="Logout" onPress={() => getAuth().signOut()} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
