import React, {useState} from "react";
import styles from './CardGroupView.module.css'
import { FaEdit } from "react-icons/fa";

import Card from '../components/Card';
import CardGroupTitle from "../components/CardGroupTitle";

function CardGroupView(props){
    const [, setState] = React.useState(false);
    const [newCard, setNewCard] = useState();
    

    const handleCardRemove  = (index) => {
        const newList = [...props.cardGroup.cardList];
        newList.splice(index, 1);
        props.cardGroup.cardList = newList;
        setState((prev) => !prev);
        setNewCard(''); 
     }


    const handleCardAdd = (e) => {
        e.preventDefault();
        if (!newCard) return;
         else {
            props.cardGroup.cardList.push({cardTitle: newCard, cardContent:''});
            setState((prev) => !prev);
            setNewCard('');
        }   
    }

    const handleChange = (e) => {
        const {value} = e.target;
        setNewCard(value);
    }  
   
    return(
    <div>
        <form>
            <div className={styles.cardGroup}>
                <div className={styles.cardTitleContainer}>
                    <CardGroupTitle 
                        cardGroupIndex={props.index} 
                        updateCardGroupTitle={props.updateCardGroupTitle}
                        cardGroup={props.cardGroup}
                        />
                </div>
                <div  className={styles.cardList}>
                    <div className={styles.cardRow}>
                        {props.cardGroup.cardList.map((card,index)=>(
                        <Card 
                            cardGroupIndex={props.index} 
                            cardIndex={index} 
                            card={card} 
                            handleCardRemove={handleCardRemove}
                            handleCardMove={props.handleCardMove}
                            cardGroup={props.cardGroup}
                            cardGroupList={props.cardGroupList}
                        />))}
                    </div>
                    <div className={styles.addCardGroup}>
                            <textarea
                                type='text' 
                                name='cardTitle' 
                                placeholder='Название карточки' 
                                value={newCard}
                                className={styles.cardInput}
                                onChange={(e) => handleChange(e)}>
                            </textarea>
                            <button 
                                onClick={(e) => handleCardAdd(e)} className={styles.addCardButton}>
                                Добавить карточку
                            </button>
                    </div>
                 </div> 
            </div>
        </form>
    </div>
    
    );
}

export default CardGroupView;