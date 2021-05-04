import React from "react";
import PropTypes from "prop-types";

const Bulb = props => {
	let styles = "bulb ".concat(props.color);

	return <div className={styles} onClick={props.onClick}></div>;
};

export default Bulb;
Bulb.propTypes = {
	color: PropTypes.string
};
