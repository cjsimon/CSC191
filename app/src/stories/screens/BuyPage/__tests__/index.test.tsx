import React from "react";
import BuyPage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const displayForm = jest.fn();
const controlForm = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<BuyPage displayForm={displayForm} controlForm={controlForm} navigation={navigation} />).toJSON();
	expect(tree).toMatchSnapshot();
});
