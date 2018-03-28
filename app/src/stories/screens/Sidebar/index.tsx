import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "Home",
		caption: "Home",
	},
	/*{ USE AS A TEMPLATE FOR WHEN MAKING NEW PAGES DO NOT DELETE!!!!!
		route: "BlankPage",
		caption: "Blank Page",
	},*/
	{
		route: "MyProfile",
		caption: "My Profile",
	},
	{
		route: "NewsPage",
		caption: "The News",
	},
	{
		route: "StocksPage",
		caption: "Live Charts",
	},
	{
		route: "AccountSetting",
		caption: "Account Settings"
	},
	{
		route: "Login",
		caption: "Logout",
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
export default class Sidebar extends React.Component<Props, State> {
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
