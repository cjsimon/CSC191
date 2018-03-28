import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Friends extends React.Component<Props, State> {
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
						<Title>{param ? param.name.item : "My Friends"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
					<Text>{param !== undefined ? param.name.item : "Oh wait i have no Friends... yet"}</Text>
				</Content>
			</Container>
		);
	}
}

export default Friends;
