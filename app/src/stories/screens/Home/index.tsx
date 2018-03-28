import * as React from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Card,
} from "native-base";
import {StatusBar} from 'react-native';

import styles from "./styles";

export interface State {}

export interface Props {
  navigation: any;
  goHome: Function;
  showform: any;
  showform2: any;
  showform3: any;
  list: any;
}
//searchBar style={[{ height: 100 },{backgroundColor: 'black'}]} Header
//style={{color: "white"}} Title

class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar style={{ height: 100, backgroundColor: 'black'}}>
        <StatusBar barStyle="light-content"/>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
                style={{color: "white"}}
              />
            </Button>
          </Left>
          <Body>
    				<Title /*style={{color: "white"}}*/>Home</Title>
    			</Body>
          <Right />
        </Header>
        {this.props.showform3}
        <Card>{this.props.showform2}</Card>
        {this.props.showform}

      </Container>
    );
  }
}
/*
<WebView
  source={{uri: url}}
  style={{marginTop: 0}}
/>
<ScrollView horizontal
showsHorizontalScrollIndicator={false}
snapToInterval={5} >
<Button transparent onPress={() => this.setCode(pointCode,'FB')}><Text>FB</Text></Button>
<Button transparent onPress={() => this.setCode(pointCode,'AAPL')}><Text>AAPL</Text></Button>
<Button transparent onPress={() => this.setCode(pointCode,'GOOGL')}><Text>GOOGL</Text></Button>
</ScrollView>



<Button transparent style={{fontSize: 50}}> <Text> FB </Text></Button>
<Button transparent style={{fontSize: 50}}><Text> AAPL </Text></Button>
<Button transparent style={{fontSize: 50}}><Text> GOOGL </Text></Button>
*/


export default Home;
