import React from "react";
import CreatePage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const showCreate = jest.fn();
const navigation = jest.fn();
const onCreate = {state: jest.fn() };
const offCreate = {state: jest.fn()};
//const userInfo = {state: jest.fn()};

it("renders correctly", () => {
	const tree = renderer.create(<CreatePage showCreate={showCreate}
		navigation={navigation}
		onCreate={onCreate} offCreate={offCreate}
		/>).toJSON();
	expect(tree).toMatchSnapshot();
});
