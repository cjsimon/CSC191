import React from "react";
import UpdateInfo from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const showCreate = jest.fn();
const onCreate = {state: jest.fn() };
const offCreate = {state: jest.fn()};

it("renders correctly", () => {
	const tree = renderer.create(<UpdateInfo showCreate={showCreate} navigation={navigation} onCreate={onCreate}
	offCreate={offCreate} />).toJSON();
	expect(tree).toMatchSnapshot();
});
