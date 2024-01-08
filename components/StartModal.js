import React from 'react';
import classes from './StartModal.module.css';
import Header from '../static/Images/header.png';
import Play from '../static/Images/play.png';

const StartModal = ({startGame}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.header}>
                <img src={Header} />
            </div>
            <div className={classes.line}>Ready to test your Memory?</div>
            <div className={classes.play} onClick={startGame}><img src={Play} /></div>
        </div>
    )
}

export default StartModal;