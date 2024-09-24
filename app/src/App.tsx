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
import ForgotPage from "./container/ForgotPageContainer";
import SecurityQ from "./container/SecurityQContainer";
import AskQV from "./container/AskQVContainer";
import AccountSetting from "./container/AccountSettingContainer";
import Portfolio from "./container/PortfolioContainer";
import Notification from "./container/NotificationContainer"
import AskQV2 from "./container/AskQV2Container";
import UpdateInfo from "./container/UpdateInfoContainer";
import ReferPage from "./container/ReferPageContainer";
import TruChart from "./container/TruChartContainer"
import BuyPage from "./container/BuyPageContainer"
import SellPage from "./container/SellPageContainer"
// NEED TO COMMENT IT OUT BEFORE BUILD UP
import Sidebar from "./container/SidebarContainer";
//import TruFilter from "./container/TruFilterContainer";


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
const PortfolioDrawer = DrawerNavigator(
	{
		Portfolio: {screen: Portfolio}
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		// NEED TO COMMENT IT OUT BEFORE BUILD UP
		contentComponent: props => <Sidebar {...props} />,
	},
);
const TwitsDrawer = DrawerNavigator(
	{
		MyProfile: {screen: MyProfile}
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		// NEED TO COMMENT IT OUT BEFORE BUILD UP
		contentComponent: props => <Sidebar {...props} />,
	}
)

//const Social = DrawerNavigator()

const App = StackNavigator(
	{
		Login: { screen: Login },
		TruChart: {screen: TruChart},
		BlankPage: { screen: BlankPage },
		TwitsDrawer: {screen: TwitsDrawer},
		PortfolioDrawer: {screen: PortfolioDrawer},
		Drawer: { screen: Drawer },
		CreatePage: {screen: CreatePage},
		ForgotPage: {screen: ForgotPage},
		SecurityQ: {screen: SecurityQ},
		AskQV: {screen: AskQV},
		AccountSetting: {screen: AccountSetting},
		Portfolio: {screen: Portfolio},
		Notification: {screen: Notification},
		AskQV2: {screen: AskQV2},
		ReferPage: {screen: ReferPage},
		UpdateInfo: {screen: UpdateInfo},
		BuyPage: {screen: BuyPage},
		SellPage: {screen: SellPage},
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
