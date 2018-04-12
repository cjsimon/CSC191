import React from "react";
import MyProfile from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const userCont = jest.fn();
const header = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<MyProfile navigation={navigation} header={header} userCont={userCont}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
