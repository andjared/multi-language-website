const Button = ({ handleClick, title }) => {
  return (
    <button onClick={handleClick} className="button">
      {title}
    </button>
  );
};
export default Button;
