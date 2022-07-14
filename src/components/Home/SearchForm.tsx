import { useHistory } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import classes from '../../styles/SearchForm.module.scss';
import searchIcon from "../../images/search.svg";

const SearchForm = () => {
    const [validationMessage,setValidationMessage] = useState<string>("");
    const history = useHistory();
    const userNameRef = useRef<HTMLInputElement>(null);

    const addToSearchHistory = (item:string) => {
        const newItem = {
            searchedUser:item,
            searchedTime : new Date().toISOString()
        }
        const searchedHistory = localStorage.getItem("searchedHistory");
        if (searchedHistory){
            const searchedArray = JSON.parse(searchedHistory);
            const updatedArray = [...searchedArray,newItem]
            localStorage.setItem('searchedHistory',JSON.stringify(updatedArray));
        }else{
            localStorage.setItem('searchedHistory',JSON.stringify([newItem]));
        }
    }
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userName = userNameRef.current!.value;
        if (userName.trim().length < 3){
            setValidationMessage("Please enter at least 3 character");
        }else{
            addToSearchHistory(userName.trim());
            userNameRef.current!.value="";
            history.push(userName.trim());
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
            <div className={classes.searchGroup}>
                <input 
                    type="text" 
                    className={classes.input} 
                    ref={userNameRef}
                    onChange={changeInputHandler}
                    />
                <button type='submit' className={classes.button}>
                    <img src={searchIcon} alt="search" className={classes.searchIcon} />
                </button>
            </div>
            {validationMessage && <p className={classes.validationMessage}>{validationMessage}</p>}
        </form>
    )
}

export default SearchForm;