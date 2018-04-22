import * as React from "react";
import { Text, Container, List, ListItem, Content} from "native-base";
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "Home",
		caption: "Home",
	},
	{
		route: "AccountSetting",
		caption: "Account Settings"
	},
	{
		route: "ReferPage",
		caption: "Refer A Friend",
	},
	{
		route: "BlankPage",
		caption: "Terms And Conditions",
	},
	{
		route: "Login",
		caption: "Logout",
	},
];

export interface Props {
	navigation: any;
	userStuff: any;
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content style={{backgroundColor: "black"}}>
					{this.props.userStuff}
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
									<Text style={{color: "lightgreen"}}>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
