import React from "react";
import { Stack, usePathname } from "expo-router";

const QrHuntLayout = () => {
  const pathName = usePathname();

  return (
    <Stack
      screenOptions={{
        animation: pathName.startsWith("/qr-hunt") ? "default" : "none",
      }}
    >
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
      <Stack.Screen
        name="scanner"
        options={{
          title: "QR-Scanner",
          headerShown: true,
        }}
      />
    </Stack>
  );
};

export default QrHuntLayout;
