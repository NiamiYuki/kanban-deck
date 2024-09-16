import React, {useState} from "react";
import styles from './Card.module.css'
import { FaPaw } from "react-icons/fa";
import CardMenu from './CardMenu';
import CardEditor from './CardEditor'
import { createPortal } from 'react-dom';

function Card(props){
    const [isActiveCardArea, setIsActivCardArea] = useState();
    const [modalContainer, setModalContainer] = useState();
    const [showModal, setShowModal] = useState(false);

    const portal=(showModal)=>{
        setShowModal(showModal);
        if(document.getElementById('mainScreen')){
            setModalContainer(document.getElementById('mainScreen'));
        }
    }


    const handleIsCardAreaActive = (value) => {
        setIsActivCardArea(value);  
        // console.log('card');
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
                    cardToMove={props.cardToMove}
                    setCardToMove={props.setCardToMove}
                    className={styles.moveCardTitleMenu}
                    cardIndex={props.cardIndex} 
                    card={props.card} 
                    cardGroup={props.cardGroup}
                    cardGroupList={props.cardGroupList}
                    isActiveCardArea={isActiveCardArea}
                    handleIsCardAreaActive={handleIsCardAreaActive}
                    handleCardRemove={props.handleCardRemove}
                    handleCardMove={props.handleCardMove}
                    portal={portal}
                    /> 
            </div>
                {isActiveCardArea && <div className={styles.cardMenu}></div>} 
                {modalContainer&&showModal&&createPortal(
                <div className={styles.modal}>
                    <CardEditor
                    card={props.card}
                    handleChange={props.handleChange}
                    setShowModal={setShowModal}
                    handleCardRemove={props.handleCardRemove}
                    cardIndex={props.cardIndex} 
                    />
                </div>, 
                modalContainer)}
 
            </div>
        </div> 
    </div>
    )
}
export default Card;
