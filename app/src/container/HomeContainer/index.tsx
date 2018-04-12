import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { Text , Title} from "native-base";
import datas from "./data";
import { fetchList } from "./actions";
import {ScrollView, WebView} from 'react-native';
//import {userStuff} from "../../container/LoginContainer";

export interface Props {
	navigation: any;
	fetchList: Function;
	data: Object;
}
export interface State {}
//var tmp = "asdf"

//export var theUserInfo = userStuff;

//var pointCode = 'FB'
class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	goHome() {
		this.forceUpdate();
	}
	/*setCode(code) {
		pointCode = code;
		this.forceUpdate();
	}*/
	render() {
		var form = (
		<ScrollView></ScrollView>
		)
		// OLDLINK
		var form2 = (
		<WebView
			source={{uri: 'http://athena.ecs.csus.edu/~wongdy/RatingForTopGainer.html'}}
			style={{marginTop: 0}}
			scrollEnabled={false}
		/>
		)

		var form3 = (
			<Title> <Text style={{fontSize: 25, color: "lightgreen"}}> Welcome </Text> </Title>
		)
		return <Home showform={form} showform3={form3} showform2={form2} navigation={this.props.navigation} goHome={() => this.goHome()} list={this.props.data} />;
	}
}
/*
<Button transparent onPress={() => this.setCode(pointCode,'FB')}><Text>FB</Text></Button>
<Button transparent onPress={() => this.setCode(pointCode,'AAPL')}><Text>AAPL</Text></Button>
<Button transparent onPress={() => this.setCode(pointCode,'GOOGL')}><Text>GOOGL</Text></Button>

*/




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
