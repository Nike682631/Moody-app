import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function WavyHeader({ customStyles }) {
  return (
    <View style={customStyles}>
      <View style={styles.headerView}></View>
      <View style={styles.otherView}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{
            position: "absolute",
            top: "-21.5%",
          }}
        >
          <Image
            source={require("../assets/Moodlogo.png")}
            style={styles.headerLogo}
          />
          <Path
            fill="#DBBF62"
            fillOpacity="0.2"
            d="M0,192L60,160C120,128,240,64,360,42.7C480,21,600,43,720,74.7C840,107,960,149,1080,160C1200,171,1320,149,1380,138.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerLogo: {
    alignSelf: "center",
    top: -50
  },
  headerView: {
    backgroundColor: "#DBBF62",
    opacity: 0.2,
    height: "40%",
    width: "100%",
  },
  otherView: {
    height: "60%",
    width: "100%",
  },
});
