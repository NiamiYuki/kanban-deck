import React, {useState} from "react";
// import styles from '../containers/CardGroupView.module.css'
import styles from './CardGroupTitle.module.css'

function CardGroupTitle(props){

    const [isCardTitleChange, setIsCardTitleChange] = useState('true');

    const handleCardGroupTitleAdd = (e, index)=>{
        if(e.key==="Enter"&&e.ctrlKey){
            props.updateCardGroupTitle(index, e.target.value);
            setIsCardTitleChange(false);
        }
    }

    const handleCardGroupTitleChange = (e, index)=>{
        console.log(index);
        props.updateCardGroupTitle(index, e.target.value);
    }

    const handleCardTitleEdit = (e)=>{
        e.preventDefault();
        setIsCardTitleChange(true);
    } 

return(
    <div className={styles.cardTitleContainer}>
        {isCardTitleChange &&  
        <textarea
            className={styles.cardTitleTextarea}
            type='text'    
            name='listTitle' 
            placeholder='название списка'
            value={props.cardGroup.cardGroupTitle}
            onChange={(e)=>handleCardGroupTitleChange(e, props.cardGroupIndex)}
            onKeyDown={(e)=>handleCardGroupTitleAdd(e, props.cardGroupIndex)}>
         </textarea>}
            {!isCardTitleChange && 
            <div className={styles.cardTitle}>
                <div className={styles.cardTitleText}>{props.cardGroup.cardGroupTitle}</div>
                <button 
                    className={styles.cardTitleEditButton} 
                    onClick={(e)=>handleCardTitleEdit(e, props.cardGroupIndex)}> 
                    Редактировать {String.fromCharCode(9998)}
                 </button>
            </div>}
    </div>
)    
}

export default CardGroupTitle;