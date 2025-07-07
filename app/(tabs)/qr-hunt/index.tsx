import { View, StyleSheet, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const QrHunt = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        onPress={() => router.push("/qr-hunt/scanner")}
        title="Open camera"
      />

      <Link href="/qr-hunt/Granada" push asChild>
        <Button title="Access: Granada" />
      </Link>
    </View>
  );
};

export default QrHunt;

const styles = StyleSheet.create({});
