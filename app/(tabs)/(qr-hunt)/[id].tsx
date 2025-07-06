import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const Atuno = () => {
  const { id } = useLocalSearchParams();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Atuno deste link: {id}</Text>
      <Link href="../" push asChild>
        <Button title="Voltar para QR Hunt" />
      </Link>
    </View>
  );
};

export default Atuno;

const styles = StyleSheet.create({});
