import React, {useState} from "react";
import styles from './Card.module.css'
import { FaPaw } from "react-icons/fa";
import CardMenu from './CardMenu';

function Card(props){
    const [isActiveCardArea, setIsActivCardArea] = useState();


    const handleIsCardAreaActive = (value) => {
        setIsActivCardArea(value);  
        // console.log(isActiveCardArea);
    }


return(
    <div className={styles.cardContainer}>
        <div 
            key={props.index} 
            className={styles.cardElement}
            onMouseEnter={()=>handleIsCardAreaActive(true)}
            onMouseLeave={()=>handleIsCardAreaActive(false)}>
            <div className={styles.card}>
                {props.card.cardTitle} 
            </div>

            <div className={styles.cardDropdown}>
                <div className={styles.dropContent}>
                    <div className={styles.cardMenu}>
                    <CardMenu
                    className={styles.moveCardTitleMenu}
                    index={props.index} 
                    card={props.card} 
                    cardList={props.cardList} 
                    cardGroup={props.cardGroup}
                    cardGroupList={props.cardGroupList}
                    isActiveCardArea={isActiveCardArea}
                    handleCardRemove={props.handleCardRemove}
                    /> 
                    </div>
                </div>
                {isActiveCardArea && <div className={styles.cardMenu}></div>}  
            </div>
        </div> 
    </div>
)
}
export default Card;
