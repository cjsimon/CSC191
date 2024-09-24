import React from "react";
import Portfolio from "../index";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

const navigation = { state: jest.fn() };
const renderHistory = jest.fn();
const renderPortfolio = jest.fn();
const searchForm = jest.fn();
const monitor = jest.fn();

it("renders correctly", () => {
	const tree = renderer.create(<Portfolio
		navigation={navigation}
		monitor={monitor}
		renderHistory = {renderHistory}
		renderPortfolio = {renderPortfolio}
		searchForm={searchForm}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
