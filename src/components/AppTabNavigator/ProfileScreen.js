import React, { Component } from "react";
import { View, Text, Image, Dimensions } from "react-native";
import {
  Container,
  Header,
  Content,
  Left,
  Right,
  Body,
  Button
} from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const images = [
  require("../../../assets/feeds/1.jpg"),
  require("../../../assets/feeds/2.jpg"),
  require("../../../assets/feeds/3.jpg"),
  require("../../../assets/feeds/4.jpg"),
  require("../../../assets/feeds/5.jpg"),
  require("../../../assets/feeds/6.jpg"),
  require("../../../assets/feeds/7.jpg"),
  require("../../../assets/feeds/8.jpg"),
  require("../../../assets/feeds/9.jpg"),
  require("../../../assets/feeds/10.jpg")
];
const { width, height } = Dimensions.get("window");

class ProfileScreen extends Component {
  state = {
    activeIndex: 0
  };

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor }} size={26} />
    )
  };

  onSegmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };

  renderFeed = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={{ width: width / 3, height: height / 3 }}>
          <Image
            source={image}
            style={{ flex: 1, width: undefined, height: undefined }}
          />
        </View>
      );
    });
  };

  renderView = () => {
    switch (this.state.activeIndex) {
      case 1:
        return (
          <View>
            <Text>Second</Text>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>Third</Text>
          </View>
        );
      case 3:
        return (
          <View>
            <Text>Fourth</Text>
          </View>
        );
      case 0:
      default:
        return (
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {this.renderFeed()}
          </View>
        );
    }
  };

  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header>
          <Left>
            <Icon name="md-person-add" size={30} style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>saikham</Text>
          </Body>
          <Right>
            <Entypo
              name="back-in-time"
              size={30}
              style={{ paddingRight: 10 }}
            />
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={require("../../../assets/profile.jpg")}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>posts</Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>200</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      following
                    </Text>
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text>100</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      followers
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 3,
                      justifyContent: "center",
                      height: 30,
                      marginLeft: 10
                    }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button
                    bordered
                    dark
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      marginLeft: 5,
                      marginRight: 10,
                      height: 30
                    }}
                  >
                    <Icon name="ios-settings" size={20} />
                  </Button>
                </View>
              </View>
            </View>

            <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
              <Text style={{ fontWeight: "bold" }}>saikham</Text>
              <Text>Web developer | Full Stack developer</Text>
              <Text>www.saikham.com</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5"
              }}
            >
              <Button
                transparent
                onPress={() => this.onSegmentClicked(0)}
                active={this.state.activeIndex === 0}
              >
                <Icon
                  name="md-apps"
                  size={25}
                  style={
                    this.state.activeIndex === 0
                      ? { color: "#5fc9f8" }
                      : { color: "grey" }
                  }
                />
              </Button>
              <Button
                transparent
                onPress={() => this.onSegmentClicked(1)}
                active={this.state.activeIndex === 1}
              >
                <Icon
                  name="ios-list"
                  size={25}
                  style={
                    this.state.activeIndex === 1
                      ? { color: "#5fc9f8" }
                      : { color: "grey" }
                  }
                />
              </Button>
              <Button
                transparent
                onPress={() => this.onSegmentClicked(2)}
                active={this.state.activeIndex === 2}
              >
                <Icon
                  name="ios-people"
                  size={25}
                  style={
                    this.state.activeIndex === 2
                      ? { color: "#5fc9f8" }
                      : { color: "grey" }
                  }
                />
              </Button>
              <Button
                transparent
                onPress={() => this.onSegmentClicked(3)}
                active={this.state.activeIndex === 3}
              >
                <Icon
                  name="ios-bookmark"
                  size={25}
                  style={
                    this.state.activeIndex === 3
                      ? { color: "#5fc9f8" }
                      : { color: "grey" }
                  }
                />
              </Button>
            </View>

            {this.renderView()}
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: "white"
  }
};

export default ProfileScreen;
