import React from "react";
import { Stack } from "expo-router";

const QrHuntLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Crachás",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: "Crachá",
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default QrHuntLayout;
