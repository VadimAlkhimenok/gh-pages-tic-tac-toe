import React from 'react';
import classes from './NextPlayer.module.css';

export const NextPlayer = ({ player }) => {
    return (
        <div className={classes.NextPlayer}>
            <p className={classes.Text}>Next player: <strong>{ player }</strong></p>
        </div>
    )
}