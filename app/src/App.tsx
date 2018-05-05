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
import Messager from "./container/MessagerContainer";
import Share from "./container/ShareContainer"
import History from "./container/HistoryContainer"
import Purchase from "./container/PurchaseContainer"
import LeaderBoard from "./container/LeaderBoardContainer"
import Notification from "./container/NotificationContainer"
import ManageAccount from "./container/ManageAccountContainer"
import ProfileVis from "./container/ProfileVisContainer"
import ManageBlock from "./container/ManageBlockContainer"
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
/*const TruDrawer = DrawerNavigator(
	{
		TruChart: {screen: TruChart},
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "right",
		// NEED TO COMMENT IT OUT BEFORE BUILD UP
		contentComponent: props => <TruFilter {...props} />,
	}
)*/
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
		Messager: {screen: Messager},
		Share: {screen: Share},
		History: {screen: History},
		Purchase: {screen: Purchase},
		LeaderBoard: {screen: LeaderBoard},
		Notification: {screen: Notification},
		ManageAccount: {screen: ManageAccount},
		ProfileVis: {screen: ProfileVis},
		ManageBlock: {screen: ManageBlock},
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
