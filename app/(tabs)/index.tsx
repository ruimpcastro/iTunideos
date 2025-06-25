import { Image } from "expo-image";
import { Platform, StyleSheet } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Button } from "@react-navigation/elements";
import { db } from "../../config/firebase"; // Import your Firebase configuration

// TODO: Remove the following when removing the mock function
import { getDoc, doc, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [counterValue, setCounterValue] = useState<number | null>(null);

  async function fetchCounter() {
    try {
      const docRef = doc(db, "counter", "0");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCounterValue(docSnap.data().number);
      } else {
        console.log("No such document!");
      }
    } catch (e) {
      console.error("Error fetching document:", e);
    }
  }

  async function incrementCounter() {
    if (counterValue === null) return;
    const newValue = counterValue + 1;
    try {
      const docRef = doc(db, "counter", "0");
      await setDoc(docRef, { number: newValue });
      setCounterValue(newValue);
    } catch (e) {
      console.error("Error updating counter:", e);
    }
  }

  useEffect(() => {
    fetchCounter();
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Tunideos! 🐟</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">
            npm run reset-project
          </ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      {/* Add your button here */}
      <ThemedView style={styles.stepContainer}>
        <Button onPress={incrementCounter}>Add +1 to counter</Button>
        <ThemedText style={{ textAlign: "center" }} type="defaultSemiBold">
          {`Counter value: ${counterValue ?? "Loading..."}`}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
