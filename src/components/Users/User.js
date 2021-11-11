import classes from "./User.module.css";
const User = (props) => {
    return (
        <div>
            <li className={classes.user}>
                {props.name} {props.age} years old
            </li>
        </div>
    )
}

export default User;