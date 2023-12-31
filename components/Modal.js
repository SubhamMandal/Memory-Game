import classes from './Modal.module.css';
// import Banner from '../static/Images/banner.png';
import Banner from '../static/Images/gameOver.png';
import InfoCard from './InfoCard';
import Medal from '../static/Images/medal.png';
import Flip from '../static/Images/flip.png';
import Star from '../static/Images/goldStar.png';

const Modal = ({ score, flipCount, result, reset }) => {
    const message = result === 'win' ? "You're a Champ!" : "Better luck next time!";
    return (
        <summary>
            <img src={Banner} className={classes.banner} />
            <div className={classes.content}>
                <div className={classes.result}>{message}</div>
                <div className={`${classes.stars} ${result !== 'win' && classes.emptyStars}`}>
                    <img src={Star} />
                </div>
                <InfoCard infoImg={Medal} value={score} infoTitle={'Score'} />
                <InfoCard infoImg={Flip} value={flipCount} infoTitle={'Flips'} />
            </div>
            <div className={classes.restart} onClick={reset}></div>
        </summary>
    );
}

export default Modal;