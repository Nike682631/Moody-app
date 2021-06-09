import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TagSelector from "react-native-tag-selector";

const utags = [
  {
    id: "Work",
    name: "Work",
  },
  {
    id: "Social",
    name: "Social",
  },
  {
    id: "Relaxation",
    name: "Relaxation",
  },
  {
    id: "Sleep",
    name: "Sleep",
  },
  {
    id: "Hobbies",
    name: "Hobbies",
  },
  {
    id: "Exercise",
    name: "Exercise",
  },
  {
    id: "Chores",
    name: "Chores",
  },
];

const MoodTags = ({navigation}) => {
  const [tags, setTags] = useState([]);
  return (
    <View style={styles.screenView}>
      <View style={styles.firstView}>
        <Image
          source={require("../assets/tagpagelogo.png")}
          style={styles.headerLogo}
        />
        <Text style={styles.question}>Why is That?</Text>
      </View>
      <View style={styles.secondView}>
        <Text style={styles.grayText}>Select tags:</Text>
        <View style={styles.tagView}>
          <TagSelector
            tagStyle={styles.tag}
            selectedTagStyle={styles.tagSelected}
            maxHeight={600}
            tags={utags}
            onChange={(selected) => setTags({ selectedTags: selected })}
          />
        </View>
      </View>
      <View style={styles.thirdView}>
        <Text style={styles.grayText}>Note:</Text>
        <TextInput style={styles.input} placeholder="Optional" />
      </View>
      <View style={styles.fourthView}>
        <TouchableOpacity
          style={styles.SaveButtonStyle}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate("Home");
            navigation.reset({
              routes: [{ name: "Home" }],
            });
          }}
        >
          <Text style={styles.TextStyle}> Save </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grayText: {
    color: "#949494",
    marginLeft: 10,
  },
  firstView: {
    flexDirection: "row",
    paddingLeft: 20,
    marginBottom: 30,
    alignItems: "center",
  },
  fourthView: {
    position: "absolute",
    height: Dimensions.get("window").height,
    width: "100%",
    justifyContent: "flex-end",
    alignSelf: "auto",
  },
  headerLogo: {
    height: 46,
    width: 46,
  },
  input: {
    backgroundColor: "#FBF4E3",
    height: 77,
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 12,
    padding: 10,
  },
  SaveButtonStyle: {
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
  secondView: {
    marginBottom: 40,
    paddingLeft: 10,
  },
  tag: {
    backgroundColor: "#FBF4E3",
    color: "#000",
    height: 43,
    minWidth: 64,
    borderRadius: 12,
    padding: 10,
    margin: 5,
    fontWeight: "600",
    fontSize: 15,
  },
  tagSelected: {
    color: "#fff",
    backgroundColor: "#171717",
    height: 43,
    minWidth: 74,
    top: 0,
    borderRadius: 12,
    padding: 10,
    margin: 5,
    fontWeight: "600",
    fontSize: 15,
  },
  tagView: {
    paddingLeft: 5,
  },
  TextStyle: {
    color: "#fff",
    textAlign: "center",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 23,
  },
  thirdView: {
    marginBottom: 40,
    paddingLeft: 10,
  },
  screenView: {
    paddingTop: 100,
  },
  question: {
    backgroundColor: "#FBF4E3",
    height: 42,
    left: 20,
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 0.1,
    textAlign: "center",
  },
});

export default MoodTags;
