import * as React from "react";
import MyProfile from "../../stories/screens/MyProfile";
//import {userStuff} from "../../container/LoginContainer";
import { Text, Header, Button, Input, Item, Icon} from "native-base";
import {WebView} from 'react-native';
import {StatusBar} from 'react-native';

export interface Props {
	navigation: any;
}
export interface State {}
var code = "https://stocktwits.com";
var textHolder = "";
//var isDefault = true;
export default class MyProfileContainer extends React.Component<Props, State> {

	refresh() {
		code = "https://stocktwits.com"
		textHolder = "";
		this.forceUpdate();
	}
	showSearch() {
		code = "https://stocktwits.com/search?q=" + textHolder;
		this.forceUpdate();
	}
	renderButton() {
			return (
			<Button transparent onPress={() => this.showSearch()}>
				<Text style={{color: "white"}}>Submit</Text>
			</Button>
		)
	}
	render() {
		var form = (
			<Header searchBar rounded style={{height: 100, backgroundColor: "black"}}>
				<StatusBar barStyle="light-content" />
				<Button transparent>
          <Icon
            active
            name="menu"
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
            style={{color: "white"}}
          />
        </Button>
				 <Item style={{backgroundColor: "white"}}>
					 <Icon name="ios-search" style={{color: "black"}}/>
					 <Input placeholder="Search" onChangeText={text => {textHolder = text}}/>
				 </Item>
				 {this.renderButton()}
		 </Header>
		)
		var form2 = (
			<Button vertical onPress={() => this.refresh()}>
				<Icon name="chatbubbles" style={{color: "white", fontWeight: "bold"}}/>
				<Text>Stock Twits</Text>
			</Button>
		)
		var header = (
			<WebView
				source={{uri: code}}
				style={{marginTop: 0}}
				scrollEnabled={true}
			/>
		)
		return <MyProfile navigation={this.props.navigation} header={header} userCont={form} form2={form2}/>;
	}
}
