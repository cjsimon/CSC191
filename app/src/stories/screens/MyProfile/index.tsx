import * as React from "react";
//import { StatusBar } from 'react-native';
import { Container, Footer, FooterTab, Text, Button, Icon } from "native-base";

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
							<Icon name="arrow-up" style={{color: "lightgreen"}}/>
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
