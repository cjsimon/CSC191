import React from "react";
import ReferPage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };

it("renders correctly", () => {
	const tree = renderer.create(<ReferPage navigation={navigation} />).toJSON();
	expect(tree).toMatchSnapshot();
});
