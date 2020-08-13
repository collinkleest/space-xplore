import React from 'react';

const CustomBtn = (props) => {

    const btnStyles = {
        backgroundColor: props.color,
        border: `2px solid ${props.borderColor}`,
        borderRadius: '5px',
        textTransform: 'uppercase',
        cursor: 'pointer',
        width: '55px',
        padding: '5px'
    }

    return (
        <div style={btnStyles}>
            {props.text}
        </div>
    )
}

export default CustomBtn;