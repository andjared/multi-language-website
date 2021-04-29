const Button = ({ handleClick, title }) => {
    return (
        <button onClick={handleClick} className="button-more">{title}</button >
    );
}
export default Button;
