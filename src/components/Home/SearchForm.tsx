import React, { useRef, useState } from 'react';
import classes from '../../styles/SearchForm.module.scss';

const SearchForm = () => {
    const [validationMessage,setValidationMessage] = useState<string>("");

    const userNameRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const userName = userNameRef.current!.value;
        if (userName.trim().length < 3){
            setValidationMessage("Please enter at least 3 character");
        }else{
            debugger;
        }
    }
    
    const changeInputHandler = (e: React.FormEvent<HTMLInputElement>) => {
        const enteredValue = e.currentTarget.value;
        if (enteredValue.trim().length >= 3){
            setValidationMessage("");
        }
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <h2>Search User</h2>
            <div className={classes.searchGroup}>
                <input 
                    type="text" 
                    className={classes.input} 
                    ref={userNameRef}
                    onChange={changeInputHandler}
                    />
                <button type='submit' className={classes.button}> Search </button>
            </div>
            {validationMessage && <p className={classes.validationMessage}>{validationMessage}</p>}
        </form>
    )
}

export default SearchForm;