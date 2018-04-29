import * as React from "react";
import NewsPage from "../../stories/screens/NewsPage";
export interface Props {
	navigation: any;
}
export interface State {}
export default class NewsPageContainer extends React.Component<Props, State> {
	render() {
		return <NewsPage navigation={this.props.navigation} />;
	}
}
