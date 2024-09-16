import React, {useState} from "react";
import styles from './Card.module.css'
import { FaPaw } from "react-icons/fa";
import CardMenu from './CardMenu';

function Card(props){
    const [isActiveCardArea, setIsActivCardArea] = useState();
    console.log('rendering card', props)


    const handleIsCardAreaActive = (value) => {
        setIsActivCardArea(value);  
    }


return(
    <div className={styles.cardContainer}>
        <div 
            key={props.index} 
            className={styles.cardElement}
            onMouseEnter={()=>handleIsCardAreaActive(true)}
            onMouseLeave={()=>handleIsCardAreaActive(false)}
            >
            <div className={styles.card}>
                {props.card.cardTitle} 
            </div>

            <div className={styles.cardDropdown}>
                    <div className={styles.cardMenu}>
                    <CardMenu
                    isCardToMove={props.isCardToMove}
                    setIsCardToMove={props.setIsCardToMove}
                    className={styles.moveCardTitleMenu}
                    cardIndex={props.cardIndex} 
                    card={props.card} 
                    cardGroup={props.cardGroup}
                    cardGroupList={props.cardGroupList}
                    isActiveCardArea={isActiveCardArea}
                    handleIsCardAreaActive={handleIsCardAreaActive}
                    handleCardRemove={props.handleCardRemove}
                    handleCardMove={props.handleCardMove}
                    /> 
            </div>
                {isActiveCardArea && <div className={styles.cardMenu}></div>}  
            </div>
        </div> 
    </div>
    )
}
export default Card;
