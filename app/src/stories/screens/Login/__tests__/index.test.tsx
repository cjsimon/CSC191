import React from "react";
import Login from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const onLogin = jest.fn();
const goCreate = jest.fn();
const loginForm = React.Component;
const goBlank = jest.fn();
const guestLogin = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<Login onLogin={onLogin} guestLogin={guestLogin} goCreate={goCreate} loginForm={loginForm} goBlank={goBlank}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
