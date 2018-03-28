import * as React from "react";
import { Platform,StatusBar} from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
//var something = "";

class Notification extends React.Component<Props, State> {
	render() {
		const param = this.props.navigation.state.params;
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{param ? param.name.item : "Notifications"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text>{param !== undefined ? param.name.item : "How are we going to notifiy you?"}</Text>
				</Content>
			</Container>
		);
	}
}

export default Notification;
