import React, {PropTypes} from 'react';


export const Alert = ({type, message}) => {
  const alertType = `alert-${type} alert`
  return (
    <div className={alertType}>
      <p>{message}</p>
    </div>
    )
};

Alert.PropTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};
