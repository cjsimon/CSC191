import React from "react";
import AskQV from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const validAns = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<AskQV navigation={navigation} validAns={validAns}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
