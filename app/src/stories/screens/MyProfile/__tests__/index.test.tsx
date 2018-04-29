import React from "react";
import MyProfile from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const userCont = jest.fn();
const header = jest.fn();
const form2 = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<MyProfile navigation={navigation} header={header} userCont={userCont} form2={form2}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
