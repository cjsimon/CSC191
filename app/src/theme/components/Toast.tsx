import variable from "./../variables/platform";

export default (variables = variable) => {
	const platform = variables.platform;

	const toastTheme = {
		".danger": {
			backgroundColor: variables.brandDanger,
		},
		".warning": {
			backgroundColor: variables.brandWarning,
		},
		".success": {
			backgroundColor: variables.brandSuccess,
		},
		backgroundColor: "rgba(144,238,144,100)",
		borderRadius: platform === "ios" ? 5 : 0,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
		minHeight: 50,
		"NativeBase.Text": {
			color: "#000",
			flex: 1,
		},
		"NativeBase.Button": {
			backgroundColor: "transparent",
			height: 30,
			elevation: 0,
			"NativeBase.Text": {
				fontSize: 20,
			},
		},
	};

	return toastTheme;
};
