import React, {useState} from "react";
import styles from './Card.module.css';
import { FaPaw } from "react-icons/fa";
import {
    Menu,
    Item,
    Separator,
    Submenu,
    useContextMenu
  } from "react-contexify";
  import "react-contexify/dist/ReactContexify.css";
  

function CardMenu(props){

    const menuID = '' + Math.random();

    const [cardGroupTitleList, setCardGroupTitleList] = useState([]);
    const cardGroupList = props.cardGroupList;

    const { show } = useContextMenu({
        id: menuID 
    });


    const handleAddCardGroupTitleToList=()=>{
    }

    const handleMoveCard=(isCardToMove,indexCardListToMove,card)=>{
        console.log(isCardToMove,indexCardListToMove,card);
        props.handleCardMove(isCardToMove,indexCardListToMove,card);
        props.handleCardRemove(props.cardIndex)
    }

    function displayMenu(e){
        // props.handleIsCardAreaActive(!props.isActiveCardArea);
        // put whatever custom logic you need
        // you can even decide to not display the Menu
        show({
          event: e,
        });
      }


    return(
        <div className={styles.cardMenuContent}>
            {props.isActiveCardArea &&<div onClick={displayMenu} className={styles.removeCardButton}  >
            <FaPaw/>
            </div>}

            <Menu id={menuID}>
                <Submenu label="Переместить карточку">
                    <div onMouseEnter={()=>handleAddCardGroupTitleToList()}>
                        {cardGroupList.map((cardGroup,index)=>
                            <Item onClick={()=>handleMoveCard(true,index,props.card)}>
                                {cardGroup.cardGroupTitle}
                            </Item>)}
                    </div>
                </Submenu>
                <Item onClick={()=>props.portal(true)}>Редактировать карточку</Item>
                <Item onClick={()=>props.handleCardRemove(props.cardIndex)}>Удалить карточку</Item>
            </Menu>
        </div>
    )

}

export default CardMenu;