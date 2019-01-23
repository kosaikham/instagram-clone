import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: (
      <Icon name="ios-camera" size={30} style={{ paddingLeft: 10 }} />
    ),
    title: "Instagram",
    headerRight: <Icon name="ios-send" size={30} style={{ paddingRight: 10 }} />
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>MainScreen</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default MainScreen;
