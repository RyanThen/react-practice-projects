import PropTypes from 'prop-types';

function Button({ 
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
 }) {
  return (
    <div className="btn-container">
      <button>{children}</button>
    </div>
  )
}

Button.propTypes = {
  checkVariationValue: (props) => {
    return new Error('Invalid props');
  }
}

export default Button;