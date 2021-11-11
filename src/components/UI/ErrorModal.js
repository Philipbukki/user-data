import Card from "./Card";
import classes from "./ErrorModal.module.css";
const ErrorModal = props => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}></div>
            <Card className={classes.modal}>
                <div>
                    <header className={classes.header}>{props.title}</header>
                    <div className={classes.content}>
                        <p>{props.message}</p>
                    </div>
                    <footer className={classes.actions}>
                        <button onClick={props.onConfirm}>Okay</button>
                    </footer>
                </div>
            </Card>
        </div>
    );
}

export default ErrorModal;