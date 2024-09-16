import React, {useState} from "react";
import styles from './Container.module.css'

import CardGroupView from './CardGroupView';
function Container(){

    const [cardGroupList, setCardGroupList] = useState([{cardGroupTitle:'Ctrl+enter - сохранить название колонки', cardList:[]}]);
    const [, setState] = React.useState(false);
    
    const handleAddCardGroup = ()=> {
       setCardGroupList([...cardGroupList, {cardGroupTitle:'Название колонки', cardList:[]}]);
    }

   const handleCardMove = (isCardToMove,indexCardListToMove,card) =>{
        cardGroupList[indexCardListToMove].cardList.push({cardTitle:card.cardTitle, cardContent:card.cardContent});
        setState((prev) => !prev);
    }

    const updateCardGroupTitle= (index, newTitle)=>{
        const newCardGroupList=[...cardGroupList];
        // console.log(newCardGroupList, index);
        newCardGroupList[index].cardGroupTitle = newTitle;
        setCardGroupList(newCardGroupList);
    }

     return(
        <div className={styles.mainScreen} id='mainScreen'>
            <div className={styles.topContainer}>  </div>
            <div className={styles.mainAndLeftContainer}>
                <div className={styles.leftContainer}> </div>
                <div className={styles.rightContainer}>
                    <div className={styles.rowsContainer} >
                        {cardGroupList.map((cardGroup,index)=>(
                        <CardGroupView  
                            index={index} 
                            cardGroup={cardGroup}
                            updateCardGroupTitle={updateCardGroupTitle}
                            cardGroupList={cardGroupList}
                            setCardGroupList={setCardGroupList}
                            handleCardMove={handleCardMove}
                        />))}
                    <button onClick={() => handleAddCardGroup()} className={styles.addCardGroupButton}>
                        Добавить колонку
                    </button>
                    </div>
                  
                </div>
            </div>
        </div>   
     )
}


export default Container;