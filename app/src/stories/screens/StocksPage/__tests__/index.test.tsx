import React from "react";
import MyProfile from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const bodyCont = { state: jest.fn() };
const changeType = jest.fn();
const changeName = jest.fn();


it("renders correctly", () => {
	const tree = renderer.create(<MyProfile navigation={navigation} bodyCont={bodyCont}
		changeType={changeType} changeName={changeName}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
