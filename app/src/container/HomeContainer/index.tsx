import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { Text , Button, Icon, Item, Input} from "native-base";
import datas from "./data";
import { fetchList } from "./actions";
import { WebView} from 'react-native';
//import {userStuff} from "../../container/LoginContainer";

export interface Props {
	navigation: any;
	fetchList: Function;
	data: Object;
}
export interface State {}

var url = "http://athena.ecs.csus.edu/~wongdy/RatingForTopGainer.html"

// TOY WITH THE LINK
//var url = "https://trucharts.com/FilteredStocks.aspx?ConditionId=221444,221445,221446"
var textHolder = "";
var sw = false
class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	goHome() {
		this.forceUpdate();
	}
	refresh() {
		if(sw)
		{
			url = "http://athena.ecs.csus.edu/~wongdy/RatingForTopGainer.html"
		}
		else
		{
			url = "http://athena.ecs.csus.edu/~wongdy/RatingForTopGainer1.html"
		}
		sw = !sw
		textHolder = ""
		this.forceUpdate();

	}
	update() {
		url = "https://www.tradingview.com/symbols/"+textHolder;
		this.forceUpdate();
	}
	render() {
		var form = (
			<Item style={{backgroundColor: "white"}}>
				 <Icon name="ios-search" style={{color: "black"}}/>
				 <Input placeholder="Enter Stock Ticker" onChangeText={text => {textHolder = text}}/>
			</Item>
		)
		var form2 = (
		<WebView
			source={{uri: url}}
			style={{marginTop: 0}}
			scrollEnabled={false}
			scalesPageToFit={true}
		/>
		)
		var form3 = (
			<Button vertical onPress={() => this.refresh()}>
				<Icon name="arrow-up" style={{color: "lightgreen"}}/>
				<Text>Home</Text>
			</Button>
		)
		var form4 = (
			<Button transparent onPress={() => this.update()}>
				<Text style={{color: "white"}}>Submit</Text>
			</Button>
		)
		return <Home showform={form} showform3={form3} showform2={form2} showform4={form4} navigation={this.props.navigation} goHome={() => this.goHome()} list={this.props.data} />;
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
