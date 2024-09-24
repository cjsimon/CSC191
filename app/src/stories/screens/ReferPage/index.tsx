import * as React from "react";
import { Platform, StatusBar, Image } from "react-native";
import { Container, View, Header, Title, Text, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	sendEmail: any;
}
export interface State {}
class ReferPage extends React.Component<Props, State> {

	render() {
		return (
			<Container style={styles.container}>
			<Header style={{ height: 250, backgroundColor: "black" }}>
			<StatusBar barStyle="light-content"/>
				<Body style={{backgroundColor: "black"}}>
				<Image
						source={{ uri: "http://jetstox.com/wp-content/uploads/2018/03/JETSTOXWEBLOGO-1.png" }}
						style={{ width: 375, height: 75, backgroundColor: 'black' }}
					/>
					<View padder>
						<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
					</View>
					<Title> <Text style={{color: "white", fontSize: 25}}> Refer JetStox To A Friend! </Text> </Title>
				</Body>
			</Header>

			{this.props.sendEmail}

			</Container>
		);
	}
}

export default ReferPage;
