import React from 'react';
import { Input } from '../UI/Input/Input';
import classes from './MainPage.module.css';
import { Title } from '../UI/Title/Title';
import { Button } from '../UI/Button/Button';

export const MainPage = ({ handleStartGame, handleChange }) => {
    return (
        <div className={classes.MainPage}>
            <Title title={'Tic Tac Toe'}/>
            <p className={classes.SubTitle}>(If you don't input player name, one will be default)</p>

            <Input 
                id='X'
                name='Player 1'
                handleChange={handleChange}
            />

            <Input 
                id='O'
                name='Player 2'
                handleChange={handleChange}
            />

            <Button onClick={handleStartGame} name={'Start'} className={classes.Start}/>
        </div>
    )
}