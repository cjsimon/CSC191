import * as React from "react";
import AskQV2 from "../../stories/screens/AskQV2";
import {userStuff} from "../../container/LoginContainer";
import { Toast, Text, CardItem, Item, Input} from "native-base";

export interface Props {
	navigation: any;
}
export interface State {}
var qa = ["",""]
var something = "";
export default class AskQV2Container extends React.Component<Props, State> {

	validAns(){
		if(something == qa[1]) {
			this.props.navigation.navigate("UpdateInfo");
			something = "";
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
		var form2 = (
			<Item>
			<Input
				onChangeText={text => {something = text}}
				placeholder ="Answer"
				defaultValue = {something}
				editable = {true}
				maxLength = {2222}
			/>
			</Item>
		)
		return (<AskQV2 askForm = {form} form2={form2} navigation={this.props.navigation} validAns={() => this.validAns()}/>);
	}
}
