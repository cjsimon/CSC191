import * as React from "react";
import { Platform, StatusBar, Image } from "react-native";
import { Container, Toast, View, Label, Header, Input, Item, Title, Content, Text, Button, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
var something = "";
class ReferPage extends React.Component<Props, State> {

	sendEmail(){
		Toast.show({
			text: "Email Sent to your Friend!",
			duration: 2000,
			position: "top",
			textStyle: { textAlign: "center" },
		});
	}
	render() {
		something = "";
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
					<Title> <Text style={{color: "white", fontSize: 25}}> Refer JetStox To A Friend! </Text> </Title>
				</Body>
			</Header>

				<Content style={{ height: 200, backgroundColor: "black" }} scrollEnabled={false}>
				<Item stackedLabel>
				<Label style={{color: "lightgreen"}}>Email</Label>
				<Input
				style={{color: "lightgreen"}}
					onChangeText={text => {something = text}}
					editable = {true}
					maxLength = {2222}
					defaultValue = {something}
				/>
				</Item>
				<View padder>
					<Button rounded block success  onPress={() => this.sendEmail()}>
						<Text> Submit </Text>
					</Button>
				</View>

				<View padder style={[{bottom: 10},{left: 0}]}>
					<Button rounded block success onPress={() => {this.props.navigation.goBack()}}>
						<Text> Go Back </Text>
					</Button>
				</View>
				</Content>

			</Container>
		);
	}
}

export default ReferPage;
