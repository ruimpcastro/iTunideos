import { View, StyleSheet, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const QrHunt = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/qr-hunt/Granada" push asChild>
        <Button title="Access: Granada" />
      </Link>
    </View>
  );
};

export default QrHunt;

const styles = StyleSheet.create({});
