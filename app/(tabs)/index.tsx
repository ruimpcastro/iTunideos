import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Tunideos App</Text>
      <Link href="/el-acor">El Açor</Link>
    </View>
  );
}
