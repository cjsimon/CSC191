import * as React from "react";
import { Container,View, Header,Input,Item, Card, CardItem, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";


import styles from "./styles";
export interface Props {
	navigation: any;
	validAns: Function;
}
export interface State {}
export var something = "";
class AskQV extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		something = "";
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Security Question"}</Title>
					</Body>

					<Right />
				</Header>
				<Content style={{top: 150}}>
					<Card>
					<CardItem>
						<Text>Did you get a Security Question?</Text>
					</CardItem>
					<CardItem>
						<Item>
						<Input
							onChangeText={text => {something = text}}
							placeholder ="Answer"
							defaultValue = {something}
							editable = {true}
							maxLength = {2222}
						/>
						</Item>
					</CardItem>
					</Card>
				</Content>
				<Content>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button block onPress={() => this.props.validAns(something)}>
							<Text> Create Account </Text>
						</Button>
					</View>
					<View padder style={[{bottom: 0},{left: 0}]}>
						<Button block onPress={() => this.props.navigation.goBack()}>
							<Text> Cancel </Text>
						</Button>
					</View>
				</Content>
			</Container>
		);
	}
}

export default AskQV;
