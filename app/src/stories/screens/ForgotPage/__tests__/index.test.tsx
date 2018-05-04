import React from "react";
import ForgotPage from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const emailSend = jest.fn()

it("renders correctly", () => {
	const tree = renderer.create(<ForgotPage emailSend={emailSend} navigation={navigation} />).toJSON();
	expect(tree).toMatchSnapshot();
});
