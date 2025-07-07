import { CameraView, useCameraPermissions } from "expo-camera";
import { View, Button, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RelativePathString, usePathname, useRouter } from "expo-router";
import { db } from "../../../config/firebase";
import { doc, getDoc } from "firebase/firestore";

async function getData(id: string) {
  try {
    const docRef = doc(db, "qr", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.error("Error getting document:", error);
  }
}

const Scanner = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [active, setActive] = React.useState(true);
  if (!permission) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="Use camera" onPress={requestPermission} />
      </View>
    );
  }
  if (!permission.granted) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>We need your camera permission to show the camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }
  return (
    <CameraView
      barcodeScannerSettings={{
        barcodeTypes: ["qr"],
      }}
      onCameraReady={() => setActive(true)}
      onBarcodeScanned={(event) => {
        if (pathName === "/qr-hunt/scanner") {
          setActive(false);
          router.push(event.data as RelativePathString);
        }
      }}
      facing="back"
      style={{ flex: 1 }}
      active={active}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#DDDDDD",
          padding: 10,
        }}
        onPress={() => router.dismissAll()}
      >
        <Text>Go back to</Text>
      </TouchableOpacity>
    </CameraView>
  );
};

export default Scanner;
