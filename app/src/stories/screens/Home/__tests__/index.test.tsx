import React from "react";
import Home from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { navigate: jest.fn() };
const list = { map: jest.fn() };
const goHome = jest.fn();
const showform = jest.fn();
const showform2 = jest.fn();
const showform3 = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<Home showform={showform} showform3={showform3} showform2={showform2} navigation={navigation} goHome={goHome} list={list} />).toJSON();
	expect(tree).toMatchSnapshot();
});
