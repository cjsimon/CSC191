import * as React from "react";
import TruFilter from "../../stories/screens/TruFilter"
import {Content, Text, Body,Toast, Button, Card, CardItem, Item, Header, Input} from "native-base";

export interface Props {
	navigation: any;
}
export interface State {}

export function setCode(code) {
	stockCode = code;
}

var curr = new Date();
export var stockCode = "AAPL";
export var typeGraph = "&Type=3";
export var startDate = ""+curr.getFullYear()+(curr.getMonth()+1)+curr.getDay()
export var endDate = ""+(curr.getFullYear()-1)+(curr.getMonth()+1)+curr.getDay()
export var areaSI = "AreaRSI(14)"
export var cycle = "DAY"
var tmpS = ""
var tmpE = ""
var tmpSI = ""
var typeName = "Candle"

export default class TruFilterContainer extends React.Component<Props, State> {

	setTypeC(target) {
		cycle = target
		this.forceUpdate();
	}
	closeItOut() {
		this.updateDates();
		this.setArea(tmpSI);
		this.props.navigation.navigate("DrawerClose")
		Toast.show({
			text: "Please Press Update for Changes",
			duration: 2000,
			position: "top",
			textStyle: { textAlign: "center" },
		});
	}
	updateDates() {
		startDate = tmpS
		endDate = tmpE
	}
	setType(type) {
		if(type == "1")
			typeGraph = "&Type=1"
		else if(type == "2")
			typeGraph = "&Type=2"
		else if(type == "3")
			typeGraph = "&Type=3"
		this.interperate()
	}
	interperate() {
		if(typeGraph == "&Type=1")
			typeName = "Barchart"
		else if(typeGraph == "&Type=2")
			typeName = "Line"
		else if(typeGraph == "&Type=3")
			typeName = "Candle"
		this.forceUpdate()
	}
	setArea(area) {
		areaSI = "AreaRSI("+area+")"
		this.forceUpdate()
	}
	renderGraphTypes() {
		return (
			<Card style={{ backgroundColor:"grey"}}>
			<Header>
			<Button disabled >
				<Text> Graph Types {typeName}</Text>
			</Button>
			</Header>
			<CardItem>
				<Button rounded success onPress={() => this.setType("1")}>
					<Text>
						Barchart
					</Text>
				</Button>
				<Button rounded success onPress={() => this.setType("2")}>
					<Text>
						Line
					</Text>
				</Button>
				<Button rounded success onPress={() => this.setType("3")}>
					<Text>
						Candle
					</Text>
				</Button>
			</CardItem>
			</Card>
		)
	}
	renderStart() {
		return (
			<Item>
				<Input placeholder="Enter Start Date" onChangeText={text => {tmpS = text}}/>
			</Item>
		)
	}
	renderEnd() {
		return (
			<Item>
				<Input placeholder="Enter End Date" onChangeText={text => {tmpE = text}}/>
			</Item>
		)
	}
	renderDateLimits() {
		return (
			<Card>
				<Header>
					<Button disabled >
						<Text> Start and End Dates </Text>
					</Button>
				</Header>
				<Body>
					<CardItem>
						{this.renderStart()}
					</CardItem>
					<CardItem>
						{this.renderEnd()}
					</CardItem>
				</Body>
			</Card>
		)
	}
	renderASI() {
		return (
			<Card>
				<Header>
					<Button disabled >
						<Text> Enter AreaSI </Text>
					</Button>
				</Header>
				<Body>
					<CardItem>
							<Input placeholder="Enter Start Date" onChangeText={text => {tmpSI = text}}/>
					</CardItem>
				</Body>
			</Card>
		)
	}
	renderCycle() {
		return (<Card style={{ backgroundColor:"grey"}}>
		<Header>
		<Button disabled >
			<Text> Cycle Type {cycle}</Text>
		</Button>
		</Header>
		<CardItem>
			<Button rounded success onPress={() => this.setTypeC("DAY")}>
				<Text>
					Day
				</Text>
			</Button>
			<Button rounded success onPress={() => this.setTypeC("WEEK")}>
				<Text>
					Week
				</Text>
			</Button>
			<Button rounded success onPress={() => this.setTypeC("MONTH")}>
				<Text>
					Month
				</Text>
			</Button>
			<Button rounded success onPress={() => this.setTypeC("YEAR")}>
				<Text>
					Year
				</Text>
			</Button>
		</CardItem>
		</Card>)
	}
	renderFilter() {
		return (
			<Content style={{ backgroundColor:"black"}}>
				{this.renderGraphTypes()}
				{this.renderDateLimits()}
				{this.renderASI()}
				{this.renderCycle()}
				<CardItem>
				<Button success onPress={() => this.closeItOut()}>
					<Text> Update </Text>
				</Button>
				</CardItem>
			</Content>
		)
	}

	render() {
		const form = this.renderFilter();
		return <TruFilter navigation={this.props.navigation} list={form}/>;
	}
}
