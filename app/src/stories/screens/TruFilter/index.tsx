import * as React from "react";
import {Content,Container} from "native-base";


export interface Props {
	navigation: any;
	list: any;
}
export interface State {}



export default class TruFilter extends React.Component<Props, State> {

	render() {
		return (
			<Container>
				<Content style={{backgroundColor: "black"}}>
					{this.props.list}
				</Content>
			</Container>
		);
	}
}
