import classes from "./Button.module.css";
const Button = props => {
    return (
        <div
            className={classes.button}
            type={props.type || "button"}
            onClick={props.onSubmit}>
            {props.children}
        </div>
    )
}

export default Button;