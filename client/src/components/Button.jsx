import PropTypes from "prop-types";

const Button = ({ name, isBeam = false, containerClass }) => (
  <button className={`btn ${containerClass}`}>
    {isBeam && (
      <span className='relative flex h-3 w-3'>
        <span className='btn-ping' />
        <span className='btn-ping_dot' />
      </span>
    )}
    {name}
  </button>
);
Button.propTypes = {
  name: PropTypes.string.isRequired,
  isBeam: PropTypes.bool.isRequired,
  containerClass: PropTypes.string.isRequired,
};
export default Button;
