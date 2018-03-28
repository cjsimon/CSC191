import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import { Text ,Button, Title } from "native-base";
import datas from "./data";
import { fetchList } from "./actions";
import {ScrollView,WebView} from 'react-native';
//import {userStuff} from "../../container/LoginContainer";

export interface Props {
	navigation: any;
	fetchList: Function;
	data: Object;
}
export interface State {}
//var tmp = "asdf"

//export var theUserInfo = userStuff;

var pointCode = 'FB'
class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	goHome() {
		this.forceUpdate();
	}
	setCode(code) {
		pointCode = code;
		this.forceUpdate();
	}
	render() {
		var form = (
		<ScrollView horizontal
		showsHorizontalScrollIndicator={false}
		snapToInterval={5} >
		<Button transparent success onPress={() => this.setCode('FB')}><Text>Facebook</Text></Button>
		<Button transparent success onPress={() => this.setCode('AAPL')}><Text>Apple</Text></Button>
		<Button transparent success onPress={() => this.setCode('GOOGL')}><Text>Google</Text></Button>
		<Button transparent success onPress={() => this.setCode('INTC')}><Text>Intel</Text></Button>
		<Button transparent success onPress={() => this.setCode('HPQ')}><Text>HP</Text></Button>
		<Button transparent success onPress={() => this.setCode('MSFT')}><Text>Microsoft</Text></Button>
		</ScrollView>
		)
		var form2 = (
			<WebView
				source={{uri: 'https://www.trucharts.com/Chart.aspx?Provider=DB&Code='+pointCode+'&Type=2&Skin=Black&Size=500&RT=0&Start=20170624&End=20180224&Layout=2Line;Default;Price;HisDate&Cycle=DAY1'}}
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
