import * as React from "react";
//import { StatusBar } from 'react-native';
import { Container, Footer, FooterTab, Text, Button, Icon } from "native-base";
import {Image} from "react-native"

import styles from "./styles";
export interface Props {
	navigation: any;
	userCont: any;
	header: any;
	form2: any;
}
export interface State {}
class MyProfile extends React.Component<Props, State> {

	render() {
		return (
			<Container style={styles.container}>
			{this.props.userCont}
			{this.props.header}
				<Footer>
					<FooterTab style={{backgroundColor: "black"}}>
						<Button vertical onPress={() => this.props.navigation.navigate('PortfolioDrawer')}>
							<Icon name="person" style={{color: "white"}}/>
							<Text>Portfolio</Text>
						</Button>
						<Button vertical onPress={() => this.props.navigation.navigate('Drawer')}>
							<Image
			          style={{width: 40, height: 20}}
			          source={{uri: "http://www.jetstox.com/wp-content/uploads/2018/04/jetstoxicon-300x300.png"}}
			        />
							<Text>Home</Text>
						</Button>
						{this.props.form2}
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default MyProfile;
