import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";

class App extends React.Component {
	render() {
		return (
			<div>
				<Main />
			</div>
		);
	}
}

export default App;
