import * as React from "react";
import { Platform, Image, StatusBar } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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
			<KeyboardAwareScrollView
      style={{ backgroundColor: 'black' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}
			enableResetScrollToCoords={true}
    	>

			<Content  style={{ height: 200, backgroundColor: "black" }} >
			<Header style={{height: 210, backgroundColor: "black" }}>
			<StatusBar barStyle="light-content"/>
				<Body style={{backgroundColor: "black"}}>
				<View style={{height: 50}}>
				<Image
						source={{ uri: "http://jetstox.com/wp-content/uploads/2018/03/JETSTOXWEBLOGO-1.png" }}
						style={{ width: 360, height: 50, backgroundColor: 'black' }}
					/>
				</View>
				<View padder>
					<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
				</View>
					<Title> <Text style={{color: "white", fontSize: 25}}> Join JETSTOX </Text> </Title>
				</Body>
			</Header>
				{this.props.showCreate}
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button full rounded success onPress={() => this.props.onCreate()}>
							<Text> Next Step </Text>
						</Button>
					</View>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button full rounded success onPress={() => this.props.offCreate()}>
							<Text> Cancel </Text>
						</Button>
					</View>
				</Content>
				</KeyboardAwareScrollView>
			</Container>
		);
	}
}
export default CreatePage;