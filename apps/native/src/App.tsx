import { StyleSheet, View } from "react-native";
import HomeScreen from "@app/screens/HomeScreen";

function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
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
