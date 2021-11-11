import React, { useState } from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css";
const AddUser = (props) => {
    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState()

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value);

    }
    const userAgeChangeHandler = (event) => {
        setUserAge(event.target.value);

    }
    const errorHandler = () => {
        setError(null)
    }
    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age(non-empty values)"
            });
            return;
        }
        if (userAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (>0)"
            })
            return;
        }
        const userData = {
            name: username,
            age: userAge,
            id: Math.random().toString()
        }
        props.onAddUser(userData);
        setUsername('');
        setUserAge('');

    }
    return (
        <div>
            {error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
            }
            <Card className={classes.input}>
                <form onSubmit={submitHandler}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={usernameChangeHandler} />
                    <label>Age(Years)</label>
                    <input type="number" value={userAge} onChange={userAgeChangeHandler} />
                    <button type="submit">Add User</button>
                </form>
            </Card>
        </div>
    )

}
export default AddUser;