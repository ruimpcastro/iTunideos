import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase";

// TODO: Improve all of the logic here, this is just a basic implementation
const Tunideos = () => {
  const [_, setTunas] = useState<any[]>([]);
  const [hasUserVoted, userVoted] = useState(false);

  async function fetchTunas() {
    const querySnapshot = await getDocs(collection(db, "favoriteTuna"));
    setTunas(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  }

  useEffect(() => {
    fetchTunas();
  }, []);

  async function voteFavoriteTuna(tunaName: string) {
    const tunaRef = doc(db, "favoriteTuna", tunaName);
    const tunaDoc = await getDoc(tunaRef);

    if (tunaDoc.exists()) {
      const currentVotes = tunaDoc.data()?.votes || 0;
      await updateDoc(tunaRef, { votes: currentVotes + 1 });
      userVoted(true);
    } else {
      console.error("Tuna not found");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Votação Tuna do público</Text>
      <Button
        title="Tuna A"
        disabled={hasUserVoted}
        onPress={() => voteFavoriteTuna("Tuna A")}
      />
      <Button
        title="Tuna B"
        disabled={hasUserVoted}
        onPress={() => voteFavoriteTuna("Tuna B")}
      />
      <Button
        title="Tuna C"
        disabled={hasUserVoted}
        onPress={() => voteFavoriteTuna("Tuna C")}
      />
      <Button
        title="Tuna D"
        disabled={hasUserVoted}
        onPress={() => voteFavoriteTuna("Tuna D")}
      />
      <Button
        title="Tuna E"
        disabled={hasUserVoted}
        onPress={() => voteFavoriteTuna("Tuna E")}
      />
      <Button
        title="Tuna F"
        disabled={hasUserVoted}
        onPress={() => voteFavoriteTuna("Tuna F")}
      />
    </View>
  );
};

export default Tunideos;
