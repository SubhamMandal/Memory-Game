import React from 'react';
import classes from './StartModal.module.css';
import Header from '../static/Images/header.png';

const StartModal = ({startGame}) => {
    return (
        <div className={classes.modal}>
            <div className={classes.header}>
                <img src={Header} />
            </div>
            <div className={classes.line}>Ready to test your Memory?</div>
            <div className={classes.start} onClick={startGame}>Start</div>
        </div>
    )
}

export default StartModal;