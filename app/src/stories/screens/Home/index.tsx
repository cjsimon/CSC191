import * as React from "react";
import {
  Container,
  Header,
  Button,
  Icon,
  Text,
  Footer,
  FooterTab,
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
  showform4: any;
  list: any;
}
//searchBar style={[{ height: 100 },{backgroundColor: 'black'}]} Header
//style={{color: "white"}} Title

class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
      <Header searchBar rounded style={{height: 100, backgroundColor: "black"}}>
        <StatusBar barStyle="light-content" />
        <Button transparent>
          <Icon
            active
            name="menu"
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            style={{color: "white"}}
          />
        </Button>
        {this.props.showform}
        {this.props.showform4}
     </Header>
        {this.props.showform2}

        <Footer>
					<FooterTab style={{backgroundColor: "black"}}>
						<Button vertical onPress={() => this.props.navigation.navigate("PortfolioDrawer")}>
							<Icon name="person" style={{color: "white"}}/>
							<Text>Portfolio</Text>
						</Button>
            {this.props.showform3}
						<Button vertical onPress={() => this.props.navigation.navigate("TwitsDrawer")}>
							<Icon name="chatbubbles" style={{color: "white", fontWeight: "bold"}}/>
							<Text>Stock Twits</Text>
						</Button>
					</FooterTab>
				</Footer>

      </Container>
    );
  }
}


export default Home;
