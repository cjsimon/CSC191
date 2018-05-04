import * as React from "react";
import { Container, Header, Title, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
	displayForm: any;
	controlForm: any;
}
export interface State {}
class SellPage extends React.Component<Props, State> {
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
						<Title>{param ? param.name.item : "The Buy Page"}</Title>
					</Body>

					<Right />
				</Header>
				{this.props.displayForm}
				{this.props.controlForm}
			</Container>
		);
	}
}

export default SellPage;
