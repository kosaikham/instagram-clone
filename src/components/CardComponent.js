import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button
} from "native-base";

class CardComponent extends Component {
  render() {
    const images = {
      one: require("../../assets/1.jpg"),
      two: require("../../assets/2.jpg"),
      three: require("../../assets/3.jpg")
    };

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../../assets/profile.jpg")} />
            <Body>
              <Text>Amanda</Text>
              <Text>Jan 15, 2018</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image
            source={images[this.props.imageSource]}
            style={{ flex: 1, height: 200, width: null }}
          />
        </CardItem>

        <CardItem style={{ height: 45, marginBottom: -10 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-empty" size={26} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles" size={26} />
            </Button>
            <Button transparent>
              <Icon name="ios-send" size={26} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 45, marginBottom: -10 }}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>

        <CardItem>
          <Text>
            <Text style={{ fontWeight: "900" }}>Lorem Ipsum </Text>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy.
          </Text>
        </CardItem>
      </Card>
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

export default CardComponent;
