import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Container,
  Content,
  Thumbnail,
  Header,
  Left,
  Right,
  Body
} from "native-base";
import CardComponent from "../CardComponent";
import { ScrollView } from "react-native-gesture-handler";

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} size={26} />
    )
  };

  render() {
    return (
      <Container style={styles.containerStyle}>
        <Header>
          <Left>
            <Icon name="ios-camera" size={30} style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text>Instagram</Text>
          </Body>
          <Right>
            <Icon name="ios-send" size={30} style={{ paddingRight: 10 }} />
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 7
              }}
            >
              <Text style={{ fontWeight: "700", padding: 5 }}>Stories</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon name="ios-play" size={18} />
                <Text style={{ fontWeight: "700", padding: 5 }}>Watch All</Text>
              </View>
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: "center"
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <Thumbnail
                  source={require("../../../assets/profiles/1.jpg")}
                  style={{
                    borderColor: "pink",
                    marginHorizontal: 5,
                    borderWidth: 1
                  }}
                />
                <Thumbnail
                  source={require("../../../assets/profiles/2.jpg")}
                  style={{
                    borderColor: "pink",
                    marginHorizontal: 5,
                    borderWidth: 1
                  }}
                />
                <Thumbnail
                  source={require("../../../assets/profiles/3.jpg")}
                  style={{
                    borderColor: "pink",
                    marginHorizontal: 5,
                    borderWidth: 1
                  }}
                />
                <Thumbnail
                  source={require("../../../assets/profiles/4.jpg")}
                  style={{
                    borderColor: "pink",
                    marginHorizontal: 5,
                    borderWidth: 1
                  }}
                />
                <Thumbnail
                  source={require("../../../assets/profiles/5.jpg")}
                  style={{
                    borderColor: "pink",
                    marginHorizontal: 5,
                    borderWidth: 1
                  }}
                />
                <Thumbnail
                  source={require("../../../assets/profiles/6.jpg")}
                  style={{
                    borderColor: "pink",
                    marginHorizontal: 5,
                    borderWidth: 1
                  }}
                />
              </ScrollView>
            </View>
          </View>
          <CardComponent imageSource="one" likes="101" />
          <CardComponent imageSource="two" likes="201" />
          <CardComponent imageSource="three" likes="301" />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: "white"
  }
});

export default HomeScreen;
