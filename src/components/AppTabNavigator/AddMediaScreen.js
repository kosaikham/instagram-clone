import React, { Component } from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class AddMediaScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-add-circle" style={{ color: tintColor }} size={26} />
    )
  };

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text>AddMediaScreen</Text>
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

export default AddMediaScreen;
