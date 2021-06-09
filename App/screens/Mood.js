import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import WavyHeader from "../components/WavyHeader";
import CircleSlider from "react-native-circle-slider";

const Mood1 = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <WavyHeader style={styles.svgCurve} />
      <View style={styles.bodyView}>
        <CircleSlider value={90} />
        <TouchableOpacity
          style={styles.NextButtonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate("MoodTags")}
        >
          <Text style={styles.TextStyle}> Next </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  bodyView: {
    flex: 1,
    height: "100%",
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  NextButtonStyle: {
    marginTop: 10,
    marginBottom: 20,
    height: 40,
    width: 308,
    backgroundColor: "#63A6DC",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignSelf: "center",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 23,
  },
});

export default Mood1;
