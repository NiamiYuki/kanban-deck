import React, {useState} from "react";
import styles from './CardGroupView.module.css'
import { FaEdit } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

function CardGroupView(){

    const [cardList, setCardList] = useState([]);
    const [newCard, setNewCard] = useState();
    const [newCardGroupTitle, setNewCardGroupTitle] = useState();
    const [isCardTitleChange, setIsCardTitleChange] = useState('true');
    const [isActiveCardArea, setIsActivCardArea] = useState();



    // //
    // const textarea = document.getElementsByClassName('textarea');
    // for (var i = 0; i < textarea.length; i++) {
    //     textarea[i].setAttribute('style', 'height:' + (textarea[i].scrollHeight) + 'px;overflow-y:hidden;');
    //     textarea[i].addEventListener("input", OnInput, false);
    //     }
    //     function OnInput() {
    //     this.style.height = 'auto'; 
    //     this.style.height = (this.scrollHeight) + 'px';
    //     }
    // //

    const handleIsCardAreaActive = (value) => {
        setIsActivCardArea(value);
        console.log(isActiveCardArea);
    }

    // const handleTextAreaOnMouseOut = (e) => {
    //     setIsActivCardArea('false');
    //     console.log(isActiveCardArea);
    // }

    const handleCardGroupTitleChange = (e)=> {
            // const value = e.target.value
            setNewCardGroupTitle(e.target.value);
            // console.log(value);
    }

    const handleCardGroupTitleAdd = (e)=>{
        if(e.key==="Enter"&&e.ctrlKey){
            setNewCardGroupTitle(e.target.value);
            setIsCardTitleChange(false);
        }
    }
    const handleCardTitleEdit = (e)=>{
        e.preventDefault();
        setIsCardTitleChange(true);
    } 

    const handleCardAdd = (e) => {
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

    const handleCardRemove  = (e,index) => {
        e.preventDefault();
        const newList = [...cardList];
        console.log(newList[index],index);
        newList.splice(index, 1)
        setCardList(newList);
        
    }
    
    return(
    <div className={styles.container}>
        <form>
            <div className={styles.cardGroup}>
                <div className={styles.cardTitleContainer}>
                   {isCardTitleChange &&  <textarea
                        className={styles.cardTitleTextarea}
                        type='text'    
                        name='listTitle' 
                        placeholder='название списка'
                        value={newCardGroupTitle}
                        onChange={(e)=>handleCardGroupTitleChange(e)}
                        onKeyDown={(e)=>handleCardGroupTitleAdd(e)}
                        >
                    </textarea>}
                    {!isCardTitleChange && 
                        <div className={styles.cardTitle}>
                           <div className={styles.cardTitleText}>{newCardGroupTitle}</div>
                           <button className={styles.cardTitleEditButton} onClick={(e)=>handleCardTitleEdit(e)}> Редактировать {String.fromCharCode(9998)}</button>
                        </div>}

                </div>
                <div  className={styles.cardList}>
                <div>
                {cardList.map((card,index)=>(
                    <div                             
                    onMouseEnter={()=>handleIsCardAreaActive(true)}
                    onMouseLeave={()=>handleIsCardAreaActive(false)}
                    >
                        <div key={index} className={styles.cardContainer}  >
                            <div className={styles.card}>
                                {card.cardTitle} 
                            </div>
                                {isActiveCardArea && <button onClick={(e)=>handleCardRemove(e,index)} className={styles.removeCardButton}>
                                 <FaPaw/>
                                 </button>}
                               
                        </div> 
                    </div>
                    ))}
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