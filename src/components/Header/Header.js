import React from 'react';
import classes from './Header.module.css';
import { Text } from '../UI/Text/Text';

export const Header = ({ player1, player2, winsPlayer1, winsPlayer2, totalGames, notWins }) => {
    return (
        <div className={classes.Header}>
            <div>
                <Text title={'Number of games played'} className={classes.Wins} counter={totalGames}/>
                <Text title={'Not wins'} className={classes.NotWins} counter={notWins}/>
            </div>

            <Text title={player1} className={classes.Wins} counter={winsPlayer1}/>
            <Text title={player2} className={classes.Wins} counter={winsPlayer2}/>
        </div>
    )
}