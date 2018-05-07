import React from "react";
import SellPage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const displayForm = jest.fn()
it("renders correctly", () => {
	const tree = renderer.create(<SellPage displayForm={displayForm} navigation={navigation} />).toJSON();
	expect(tree).toMatchSnapshot();
});
