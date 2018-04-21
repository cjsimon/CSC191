import * as React from "react";
import { Container, Header, Title, Content, Button, Text, View, Body } from "native-base";
import { Platform, Image, StatusBar } from "react-native";

import styles from "./styles";
export interface Props {
	showCreate: any;
	navigation: any;
	onCreate: any;
	offCreate: any;
}
export interface State {}
class UpdateInfo extends React.Component<Props, State> {
	render() {
		return (
			<Container style={styles.container}>
			<Header style={{ height: 250, backgroundColor: "black" }}>
			<StatusBar barStyle="light-content"/>
				<Body style={{backgroundColor: "black"}}>
				<Image
						source={{ uri: "http://jetstox.com/wp-content/uploads/2018/03/Investing-With-Intelligence-5.png" }}
						style={{ width: 375, height: 75, backgroundColor: 'black' }}
					/>
					<View padder>
						<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
					</View>
					<Title> <Text style={{color: "white", fontSize: 25}}> Updated Info </Text> </Title>
				</Body>
			</Header>

			<Content style={{ backgroundColor: "black" }}>
			{this.props.showCreate}
				<View padder style={[{bottom: 0},{left: 0}]}>
					<Button full rounded success onPress={() => this.props.onCreate()}>
						<Text> Create Account </Text>
					</Button>
				</View>
				<View padder style={[{bottom: 0},{left: 0}]}>
					<Button full rounded success onPress={() => this.props.offCreate()}>
						<Text> Cancel </Text>
					</Button>
				</View>
			</Content>
			</Container>
		);
	}
}

export default UpdateInfo;
