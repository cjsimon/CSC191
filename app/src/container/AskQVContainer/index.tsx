import * as React from "react";
import AskQV from "../../stories/screens/AskQV";
import {something} from "../../stories/screens/AskQV";
import {userStuff} from "../../container/LoginContainer";
import { Toast, Text, CardItem} from "native-base";

export interface Props {
	navigation: any;
}
export interface State {}
var qa = ["",""]
export default class AskQVContainer extends React.Component<Props, State> {

	validAns(ans){
		//FETCH WILL BE IN THERE
		// POST ANSWER TO GET IF ANSWER IS CORRECT
		if(ans == qa[1]) {
			this.props.navigation.navigate("Drawer");

		}
		else
		{
			Toast.show({
				text: "Incorrect Answer",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});

		}
	}

	getQA(){
		var val = Math.floor((Math.random()*3))
		if(val == 0)
			return [userStuff.q1,userStuff.a1]
		else if(val == 1)
			return [userStuff.q2,userStuff.a2]
		else if(val == 2)
			return [userStuff.q3,userStuff.a3]
		else
			return ["ERROR","ERROR"]
	}

	render() {
		qa = this.getQA();
		const form = (<CardItem>
			<Text>{qa[0]}</Text>
		</CardItem>)
		return (<AskQV askForm = {form} navigation={this.props.navigation} validAns={() => this.validAns(something)}/>);
	}
}
