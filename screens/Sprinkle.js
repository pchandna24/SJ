import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class Sprinkle extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              fontSize: 23,
              marginTop: 0.1 * HEIGHT
            }}
          >
            Is it a Sprinkling Day?
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
