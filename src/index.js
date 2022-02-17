import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
	// React.StrictMode serve para rodar a palicação no modo estrito, previnindo
	// Algumas más práticas e bugs
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
