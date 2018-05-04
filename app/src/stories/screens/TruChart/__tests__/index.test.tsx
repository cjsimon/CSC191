import React from "react";
import TruChart from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const chart = jest.fn();
const title = jest.fn();
const filter = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<TruChart navigation={navigation} filter={filter} title={title} chart={chart}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
