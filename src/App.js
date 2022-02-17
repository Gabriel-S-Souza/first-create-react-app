import React from "react";

<<<<<<< HEAD
function App() {
	return <div>Meu App</div>;
=======
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
>>>>>>> cd9aaf93b64458954cef17b2c7ab743b28389e95
};

export default App;
