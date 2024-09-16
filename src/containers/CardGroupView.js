import React, {useState} from "react";
import styles from './CardGroupView.module.css'
import { FaEdit } from "react-icons/fa";

import Card from '../components/Card';
import CardGroupTitle from "../components/CardGroupTitle";

function CardGroupView(props){
    // console.log(props);

    const [cardList, setCardList] = useState([]);
    const [newCard, setNewCard] = useState();
    // const [cardGroupTitle, setCardGroupTitle] = useState('');
    // const [isCardTitleChange, setIsCardTitleChange] = useState('true');


//     const handleCardGroupTitleAdd = (e)=>{
//         if(e.key==="Enter"&&e.ctrlKey){
//             setCardGroupTitle(e.target.value);
//             setIsCardTitleChange(false);
//             console.log(1);
//         }
//     }
//     const handleCardGroupTitleChange = (e)=> {
//         setCardGroupTitle(e.target.value);
// }


    const handleCardRemove  = (e,index) => {
        e.preventDefault();
        const newList = [...cardList];
        newList.splice(index, 1)
        setCardList(newList);  
    }

    const handleCardAdd = (e, props) => {
        e.preventDefault();
        if (!newCard) return;
         else {
            setCardList([...cardList, {cardTitle: newCard}]);
            setNewCard('');
        }  
    }

    const handleChange = (e,index) => {
        const {value} = e.target;
        setNewCard(value);
    }  
   
    return(
    <div>
        <form>
            <div className={styles.cardGroup}>
                <div className={styles.cardTitleContainer}>
                    <CardGroupTitle 
                        index={props.index} 
                        updateCardGroupTitle={props.updateCardGroupTitle}
                        cardGroupTitle={props.cardGroupTitle}
                        />
                </div>
                <div  className={styles.cardList}>
                    <div className={styles.cardRow}>
                        {cardList.map((card,index)=>(
                        <Card index={index} card={card} cardList={[cardList]} handleCardRemove={handleCardRemove}/>))}
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