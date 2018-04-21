import React from "react";
import Portfolio from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const seacrchForm = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<Portfolio navigation={navigation} seacrchForm={seacrchForm}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
