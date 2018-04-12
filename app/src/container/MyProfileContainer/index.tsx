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

	/*showCode() {
		if(isDefault) {
			code = "https://stocktwits.com/search?q=" + textHolder;
			isDefault = false;
		}
		else {
			code = "https://stocktwits.com/stream/"
			isDefault = true;
			textHolder = "";
		}
		//this.forceUpdate();
	}*/
	showSearch() {
		code = "https://stocktwits.com/search?q=" + textHolder;
		this.forceUpdate();
	}
	showDef() {
		code = "https://stocktwits.com"
		textHolder = "";
		this.forceUpdate();
	}
	renderButton1() {
			return (
			<Button transparent onPress={() => this.showSearch()}>
				<Text style={{color: "white"}}>Submit</Text>
			</Button>
		)
	}
	renderButton2() {
		return (
			<Button transparent onPress={() => this.showDef()}>
				<Text style={{color: "white"}}>Cancel</Text>
			</Button>
		)
	}
	render() {
		/* MIGHT USE ACCORDING TO ROBERT
		<Button transparent>
			<Icon
				active
				name="menu"
				onPress={() => this.props.navigation.navigate("DrawerOpen")}
				style={{color: "white"}}
			/>
		</Button>
		*/
		var form = (
			<Header searchBar rounded style={{height: 100, backgroundColor: "black"}}>
				<StatusBar barStyle="light-content" />
				 <Item style={{backgroundColor: "white"}}>
					 <Icon name="ios-search" style={{color: "black"}}/>
					 <Input placeholder="Search" onChangeText={text => {textHolder = text}}/>
				 </Item>
				 {this.renderButton1()}
				 {this.renderButton2()}
		 </Header>
		)
		var header = (
			<WebView
				source={{uri: code}}
				style={{marginTop: 0}}
				scrollEnabled={false}
			/>
		)
		return <MyProfile navigation={this.props.navigation} header={header} userCont={form} />;
	}
}
