import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

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

const Atuno = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const canGoBack = router.canGoBack();
  const [data, setData] = React.useState<DocumentData | null>(null);

  useEffect(() => {
    getData(id as string).then((data) => {
      console.log("Fetched data:", data);
      setData(data || { name: "unknown", description: "No data found" });
    });
  }, [id]);

  if (!data) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Atuno deste link: {data.name}</Text>
      <Text>Atuno deste link: {data.description}</Text>

      {canGoBack && (
        <Button
          title="Voltar para QR Hunt"
          onPress={() => router.dismissAll()}
        />
      )}
    </View>
  );
};

export default Atuno;

const styles = StyleSheet.create({});
