import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "LeaderBoard",
		caption: "STOKC THING"
	},
	{
		route: "AccountSetting",
		caption: "STOCK ASDF"
	},
];

export interface Props {
	navigation: any;
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class StockSidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content style={{backgroundColor: "black"}}>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										data.route === "Login"
											? this.props.navigation.dispatch(resetAction)
											: this.props.navigation.navigate(data.route);
									}}
								>
									<Text style={{color: "white"}}>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
