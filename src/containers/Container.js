import React, {useState} from "react";
import styles from './CardGroupView.module.css'
import { FaEdit } from "react-icons/fa";

import CardGroupView from './CardGroupView';
function Container(){
    const [cardGroupList, setCardGroupList] = useState([]);
    // const [newCardGroup, setNewCardGroup] = useState('');

    const handleAddCardGroup = ()=> {
       setCardGroupList([...cardGroupList, {cardGroupTitle: ''}]);
    //    setNewCardGroup('');
       console.log('hello world!');
    }

     return(
        <div className={styles.mainScreen}>
            <div className={styles.topContainer}> Верх </div>
            <div className={styles.mainAndLeftContainer}>
                <div className={styles.leftContainer}> Лево </div>
                <div className={styles.rowsContainer}>
                    {cardGroupList.map((cardGroup,index)=>(
                    <CardGroupView  index={index} cardGroup={cardGroup} />))}
                    <CardGroupView />
                <button onClick={() => handleAddCardGroup()} className={styles.addCardGroupButton}>
                    Добавить колонку
                </button>
                </div>
            </div>
        </div>

        
     )
}


export default Container;