import React from "react";
import AskQV2 from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const askForm = jest.fn();
const validAns = jest.fn();
const form2 = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<AskQV2 navigation={navigation} form2={form2} validAns={validAns}
		askForm={askForm}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
