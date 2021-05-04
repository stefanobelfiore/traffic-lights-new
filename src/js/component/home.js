import React, { useEffect, useState, Fragment } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Bulb from "./bulb.jsx";
//create your first component
export function Home() {
	const [lightColor, setLigthColor] = useState({
		red: false,
		orange: false,
		green: false
	});
	return (
		<Fragment>
			<Bulb
				// onClick={() => setClicked2(false)}
				color={lightColor.red ? "red" : "grey"}
				onClick={() => {
					setLigthColor({
						red: true,
						orange: false,
						green: false
					});
				}}
			/>
			<Bulb
				color={lightColor.orange ? "orange" : "grey"}
				onClick={() => {
					setLigthColor({
						red: false,
						orange: true,
						green: false
					});
				}}
			/>
			<Bulb
				color={lightColor.green ? "green" : "grey"}
				onClick={() => {
					setLigthColor({
						red: false,
						orange: false,
						green: true
					});
				}}
			/>
		</Fragment>
	);
}
