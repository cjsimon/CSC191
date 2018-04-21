import * as React from "react";
import { Platform, Image, StatusBar } from "react-native";
import { Container, View, Header, Title, Content, Text, Button, Body } from "native-base";

import styles from "./styles";
export interface Props {
	showCreate: any;
	navigation: any;
	onCreate: any;
	offCreate: any;
}

//style={[{position: "absolute"},{top: 45}]}

export interface State {}
class CreatePage extends React.Component<Props, State> {
	render() {
		//const param = this.props.navigation.state.params;
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
					<Title> <Text style={{color: "white", fontSize: 25}}> Join JETSTOX </Text> </Title>
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
/*
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
	</Body>
</Header>

<Header style={{ height: 200 }}>
<Left>
	<Button transparent onPress={() => this.props.navigation.goBack()}>
		<Icon name="ios-arrow-back" />
	</Button>
</Left>
<Body >
	<Icon name="plane" style={{ fontSize: 104 }} />
	<Title>Please Create an Account</Title>
	<View padder>
		<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
	</View>
</Body>
</Header>
*/
export default CreatePage;
