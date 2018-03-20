import * as React from "react";
import AskQV from "../../stories/screens/AskQV";
import {something} from "../../stories/screens/AskQV";
import { Toast} from "native-base";

export interface Props {
	navigation: any;
}
export interface State {}

export default class AskQVContainer extends React.Component<Props, State> {

	validAns(ans){
		if(ans == "Yes" || ans == "yes") {
			this.props.navigation.navigate("Drawer");
			Toast.show({
				text: "Welcome USER",
				duration: 2000,
				position: "top",
				textStyle: { textAlign: "center" },
			});

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
	render() {
		return (<AskQV navigation={this.props.navigation} validAns={() => this.validAns(something)}/>);
	}
}
