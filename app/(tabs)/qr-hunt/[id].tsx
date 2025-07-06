import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const Atuno = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const canGoBack = router.canGoBack();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Atuno deste link: {id}</Text>

      {canGoBack && (
        <Button title="Voltar para QR Hunt" onPress={() => router.back()} />
      )}
    </View>
  );
};

export default Atuno;

const styles = StyleSheet.create({});
