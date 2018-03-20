import * as React from "react";
import { WebView } from 'react-native';
import { Container, Header, Title, Footer, FooterTab, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class NewsPage extends React.Component<Props, State> {
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
						<Title>{param ? param.name.item : "The News"}</Title>
					</Body>

					<Right />
				</Header>

				<WebView
	        source={{uri: 'http://money.cnn.com/'}}
	        style={{marginTop: 20}}
	      />
				<Footer>
					<FooterTab>
						<Button vertical>
							<Icon name="apps" />
							<Text>Purchase</Text>
						</Button>
						<Button vertical>
							<Icon name="camera" />
							<Text>Camera</Text>
						</Button>
						<Button vertical>
							<Icon active name="navigate" />
							<Text>Navigate</Text>
						</Button>
						<Button vertical>
							<Icon name="person" />
							<Text>Contact</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default NewsPage;
