import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class BlankPage extends React.Component<Props, State> {
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
						<Title>{param ? param.name.item : "Blank Page"}</Title>
					</Body>

					<Right />
				</Header>
			<Content padder>
					<Text>{param !== undefined ? param.name.item : "Create Something Awesome . . ."}</Text>
				</Content>
			</Container>
		);
	}
}
/*
The information provided should not be relied upon as investment advice or recommendations, does not constitute a solicitation to buy or sell securities and should not be considered legal, investment or tax advice as it does not take into account the specific objectives, financial situation or particular needs of any specific person. Diversification does not ensure a profit or protect against a loss in a declining market. There is no guarantee that any particular asset allocation or mix of funds will meet your investment objectives or provide you with a given level of income. Forecasts or projections of investment outcomes in investment plans are estimates only, based upon numerous assumptions about future capital markets returns and economic factors. As estimates, they are imprecise and hypothetical in nature, do not reflect actual investment results, and are not guarantees of future results. Investing entails risk including the possible loss of principal and there is no assurance that the investment will provide positive performance over any period of time.
*/

export default BlankPage;
