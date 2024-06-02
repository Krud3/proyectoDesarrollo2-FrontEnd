import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message = "Something went wrong" }) => (
    <div data-testid="message-container"> {message} </div>
);

ErrorMessage.propTypes = {
    message: PropTypes.string
};

export default ErrorMessage;
