import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button } from "ui";
import { trpc } from "./utils/trpc";

function App() {
  const { status, refetch } = trpc.all.useQuery();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Native</Text>
      <Button onClick={() => refetch()} text={status} />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    marginBottom: 20,
    fontSize: 36,
  },
});
