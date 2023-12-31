import { useEffect, useState } from 'react';
import { allCards } from '../static/constants';
import Star from '../static/Images/star.png';
import classes from './Cards.module.css';

const suffleCards = (allCards) => {
    const cards = [...allCards, ...allCards];
    for (let i = cards.length - 1; i >= 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[random]] = [cards[random], cards[i]];
    }
    return cards;
}

let suffeledCards = suffleCards(allCards);
const Cards = ({ flipMatched, handleWin, result }) => {
    const [block, setBlock] = useState(false);
    const [openedCards, setOpenedCards] = useState([]);
    const handleFlip = (index) => {
        const lastCardIndex = openedCards[openedCards.length - 1];
        if (index === lastCardIndex || openedCards.includes(index) || block) return;
        setOpenedCards(openedCards => [...openedCards, index]);
        if (openedCards.length + 1 === suffeledCards.length) {
            handleWin();
        }
        if ((openedCards.length + 1) % 2 == 0) {
            if (suffeledCards[lastCardIndex].type === suffeledCards[index].type) {
                flipMatched(true);
            } else {
                flipMatched(false);
                setBlock(true);
                setTimeout(() => {
                    setOpenedCards(openedCards.slice(0, openedCards.length - 1));
                    setBlock(false);
                }, 1000);
            }
        }
    }

    useEffect(() => {
        setOpenedCards([]);
        suffeledCards = suffleCards(allCards);
    }, [result])

    return (
        <section>
            {suffeledCards.map(
                (card, index) => <Card
                    key={index}
                    type={card.type}
                    icon={card.icon}
                    index={index}
                    handleFlip={handleFlip}
                    openedCards={openedCards}
                />)}
        </section>
    );
}

export default Cards;

const Card = ({ type, icon, index, handleFlip, openedCards }) => {
    let isFlipped = openedCards.includes(index);
    const handleClick = () => {
        handleFlip(index);
    }
    return (
        <div className={`${classes.card} ${isFlipped ? classes.flipped : ''}`} onClick={handleClick}>
            <div className={classes.front}>
                <img src={icon} />
            </div>
            <div className={classes.back}>
                <img src={Star} />
            </div>
        </div>
    );
}