import React, { Component } from "react";
import { View, Text, Image } from "react-native";
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

class ProfileScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person" style={{ color: tintColor }} size={26} />
    )
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
