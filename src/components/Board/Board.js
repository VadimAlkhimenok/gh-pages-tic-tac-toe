import React from 'react';
import classes from './Board.module.css';

export const Board = ({ data, handleClickOnCell }) => {
    return (
        <ul className={classes.Board}>
            { 
                data.map((cell, idx) => {
                    return (
                        <li 
                            key={idx}
                            className={classes.Cell}
                            onClick={() => handleClickOnCell(idx)}
                            >
                                { cell }
                        </li>
                    )
                })
            }
        </ul>
    )
}