import React, {useState} from "react";
import styles from './Container.module.css'

import CardGroupView from './CardGroupView';
function Container(){

    const [cardGroupList, setCardGroupList] = useState([{cardGroupTitle:''}]);
    
    const handleAddCardGroup = ()=> {
       setCardGroupList([...cardGroupList, {cardGroupTitle:''}]);
    }

    const updateCardGroupTitle= (index, newTitle)=>{
        const newCardGroupList=[...cardGroupList];
        newCardGroupList.splice(index,1, {cardGroupTitle:newTitle});
        setCardGroupList(newCardGroupList);
    }

     return(
        <div className={styles.mainScreen}>
            <div className={styles.topContainer}> Верх </div>
            <div className={styles.mainAndLeftContainer}>
                <div className={styles.leftContainer}> Лево </div>
                <div className={styles.rightContainer}>
                    <div className={styles.rowsContainer} >
                        {cardGroupList.map((cardGroup,index)=>(
                        <CardGroupView  
                            index={index} 
                            cardGroup={cardGroup}
                            updateCardGroupTitle={updateCardGroupTitle}
                            cardGroupTitle={cardGroup.cardGroupTitle}
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