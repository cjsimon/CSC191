import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import CreatePage from "./container/CreatePageContainer";
import MyProfile from "./container/MyProfileContainer";
import StocksPage from "./container/StocksPageContainer";
import ForgotPage from "./container/ForgotPageContainer";
import SecurityQ from "./container/SecurityQContainer";
import AskQV from "./container/AskQVContainer";
import AccountSetting from "./container/AccountSettingContainer";
import NewsPage from "./container/NewsPageContainer";
// NEED TO COMMENT IT OUT BEFORE BUILD UP
import Sidebar from "./container/SidebarContainer";


const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		// NEED TO COMMENT IT OUT BEFORE BUILD UP
		contentComponent: props => <Sidebar {...props} />,
	},
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		BlankPage: { screen: BlankPage },
		MyProfile: { screen: MyProfile },
		Drawer: { screen: Drawer },
		CreatePage: {screen: CreatePage},
		StocksPage: {screen: StocksPage},
		ForgotPage: {screen: ForgotPage},
		SecurityQ: {screen: SecurityQ},
		AskQV: {screen: AskQV},
		AccountSetting: {screen: AccountSetting},
		NewsPage: {screen: NewsPage},
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	},
);

export default () => (
	<Root>
		<App />
	</Root>
);
