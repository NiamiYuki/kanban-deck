import React, {useState} from "react";
import styles from './Card.module.css'
import { FaPaw } from "react-icons/fa";

function Card(props){
    const [isActiveCardArea, setIsActivCardArea] = useState();
    // console.log(props);

    const handleIsCardAreaActive = (value) => {
        setIsActivCardArea(value);
        // console.log(isActiveCardArea);
    }

return(
    // <div >
        <div 
            key={props.index} 
            className={styles.cardContainer}
            onMouseEnter={()=>handleIsCardAreaActive(true)}
            onMouseLeave={()=>handleIsCardAreaActive(false)}>
            <div className={styles.card}>
                {props.card.cardTitle} 
            </div>
                {isActiveCardArea && <button onClick={(e)=>props.handleCardRemove(e,props.index)} className={styles.removeCardButton}>
                 <FaPaw/>
                </button>}      
        </div> 
    // </div>
)
}
export default Card;
