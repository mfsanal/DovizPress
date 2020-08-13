import React from 'react';
import PropTypes from "prop-types";

const Icon = props => {
    return (
        <i className={`fa fa-${props.item} ${props.classes}`} {...props} />
    );
};

Icon.propTypes ={
    item: PropTypes.string.isRequired,
    classes: PropTypes.string
};

export { Icon }