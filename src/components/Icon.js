import React from 'react';
import PropTypes from 'prop-types';

const Icon = (props) => {
    //requires props: color, size, path
    const styles = {
        path: {
            fill:props.color
        },
        svg: {
            display: "inline-block",
            verticalAlign: "middle",
        }
    }

    return (
        <svg 
            style={styles.svg}
            width={props.size}
            height={props.size}
            viewBox="0 0 1024 1024"
        >
            <path
                style={styles.path}
                d={props.icon}
            ></path>
        </svg>
    )
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string
};

Icon.defaultProps = {
    size:16
}

export default Icon;
