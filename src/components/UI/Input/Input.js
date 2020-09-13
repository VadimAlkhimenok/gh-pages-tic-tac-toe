import React from 'react';
import classes from './Input.module.css';


export const Input = ({ id, handleChange, name }) => {
    return (
        <>
            <label className={classes.Player}>{ name } (default name { id })</label>

            <input 
                id={ id }
                type='text' 
                placeholder='Input your name' 
                className={classes.Input}
                onChange={event => handleChange(event)}
            />
        </>
    )
}