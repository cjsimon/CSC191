import React from "react";
import SecurityQ from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const username = jest.fn();
const accountValid = jest.fn();
const accountNot = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<SecurityQ navigation={navigation} username={username}
		accountValid={accountValid} accountNot={accountNot}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
