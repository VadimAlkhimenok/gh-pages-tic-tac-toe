import React from 'react';
import classes from './Winner.module.css';

export const Winner = ({ value }) => {
    return (
        <div className={classes.Winner}>
            Winner { value }
        </div>
    )
}