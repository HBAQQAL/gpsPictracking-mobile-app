import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import * as Camera from "expo-camera";

async function getCameraPermission() {}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capture the nature</Text>
      <Button title="Take a picture" onPress={getCameraPermission} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
