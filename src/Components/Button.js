const Button = ({ handleClick, title, color }) => {
    return (
        <button onClick={handleClick} className="button" style={{ backgroundColor: color }}>{title}</button >
    );
}
export default Button;
