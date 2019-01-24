import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./components/AppTabNavigator/HomeScreen";
import SearchScreen from "./components/AppTabNavigator/SearchScreen";
import AddMediaScreen from "./components/AppTabNavigator/AddMediaScreen";
import LikesScreen from "./components/AppTabNavigator/LikesScreen";
import ProfileScreen from "./components/AppTabNavigator/ProfileScreen";
import MainScreen from "./components/MainScreen";

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const TabNav = createMaterialTopTabNavigator(
  {
    HomeTab: {
      screen: HomeScreen
    },
    SearchTab: {
      screen: SearchScreen
    },
    AddMediaTab: {
      screen: AddMediaScreen
    },
    LikesTab: {
      screen: LikesScreen
    },
    ProfileTab: {
      screen: ProfileScreen
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        }),
        paddingBottom: 10,
        backgroundColor: "white",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        },
        elevation: 5
      },
      indicatorStyle: {
        backgroundColor: "transparent"
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false,
      showIcon: true
    }
  }
);

const AppContainer = createAppContainer(
  createStackNavigator({
    Root: {
      screen: TabNav,
      navigationOptions: {
        header: null
      }
    }
  })
);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default App;
