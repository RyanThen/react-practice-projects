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
      <button className="px-3 py-1.5 border-blue-600 bg-blue-500 text-white outline">{children}</button>
    </div>
  )
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger);

    if(count > 1) return new Error('only one of primary, secondary, success, warning or danger can be true');
  }
}

export default Button;