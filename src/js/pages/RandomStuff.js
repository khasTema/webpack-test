import React from "react";
import PropTypes from "prop-types";

function RandomStuff(props) {
    const style = {
        backgroundColor: props.color,
        borderRadius: props.radius
    }
    return (
        <>
            <div className="random-circle"
                    style={style}>
                <h4>{props.text}</h4>
            </div>
        </>
    )
}

RandomStuff.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["red", "green", "blue"])
}


RandomStuff.defaultProps = {
    color: "red",
    borderRadius: "15%"
}




export default RandomStuff