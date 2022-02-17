import React from "react";

const Titulo = ({ text, ...props }) => {
	return <h1 {...props}>{text}</h1>;
};

const App = () => {
	return (
		<div>
			<Titulo id="2" style={{ color: "blue" }} text={"olá"} />
			<Titulo id="2" style={{ fontSize: "100px" }} text={"mundo"} />
		</div>
	);
};

export default App;
