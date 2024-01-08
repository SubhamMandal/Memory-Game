import classes from './Game.module.css';
import Medal from '../static/Images/medal.png';
import Flip from '../static/Images/flip.png';
import Timer from '../static/Images/timer.png';
import Cards from './Cards';
import { useEffect, useState } from 'react';
import Modal from './Modal';
import InfoCard from './InfoCard';
import StartModal from './StartModal';

const totalTime = 60;
let interval;
const Game = () => {
    const [result, setResult] = useState('');
    const [timer, setTimer] = useState(totalTime);
    const [flipCount, setFlipCount] = useState(0);
    const [score, setScore] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const flipHandler = (matched) => {
        setFlipCount(flipCount => flipCount + 1);
        matched ? setScore(score + 10) : setScore(score - 5);
    }

    useEffect(() => {
        if (!result && isStarted) {
            interval = setInterval(() => setTimer(time => time ? time - 1 : time), 1000);
        }
        return () => clearInterval(interval);
    }, [result, isStarted]);

    useEffect(() => {
        if (timer <= 0) {
            clearInterval(interval);
            setResult('lose');
        }
    }, [timer]);

    const winHandler = () => {
        clearInterval(interval);
        setResult('win');
    }

    const resetHandler = () => {
        setResult('');
        setTimer(totalTime);
        setFlipCount(0);
        setScore(0);
    }

    return (
        <main className={`${classes.main} ${(result || !isStarted) && classes.fixed}`}>
            {!isStarted && <StartModal startGame={() => setIsStarted(true)} />}
            <header className={classes.header}>Memory Game</header>
            {isStarted && <article className={classes.console}>
                <InfoCard infoImg={Medal} value={score} infoTitle={'Score'} />
                <InfoCard infoImg={Flip} value={flipCount} infoTitle={'Flips'} />
                <InfoCard infoImg={Timer} value={timer} infoTitle={'Timer'} />
            </article>}
            <Cards flipMatched={flipHandler} handleWin={winHandler} result={result} isStarted={isStarted}/>
            {result && <Modal score={score} flipCount={flipCount} result={result} reset={resetHandler} />}
        </main>
    );
}

export default Game;
