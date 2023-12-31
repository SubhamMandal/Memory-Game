import classes from './InfoCard.module.css';

const InfoCard = ({ infoImg, infoTitle, value }) => {
    return (
        <div className={classes.infoCard}>
            <div className={classes.infoImg}>
                <img src={infoImg} />
            </div>
            <div className={classes.infoTitle}>{`${infoTitle} : ${value}`}</div>
        </div>
    );
}

export default InfoCard;