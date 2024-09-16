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

    const menuID = "menu-id";

    const [cardGroupTitleList, setCardGroupTitleList] = useState([]);
    const cardGroupList = props.cardGroupList;

    const { show } = useContextMenu({
        id: menuID 
    });



    const handleAddCardGroupTitleToList=()=>{
        console.log(props);
    }

    function displayMenu(e){
        // put whatever custom logic you need
        // you can even decide to not display the Menu
        show({
          event: e,
        });
      }


    return(
        <div>
            {props.isActiveCardArea &&<div onContextMenu={displayMenu} onClick={displayMenu}  >
            <FaPaw/>
            </div>}

            <Menu id={menuID}>
                <Submenu label="Переместить карточку">
                    <div onMouseEnter={()=>handleAddCardGroupTitleToList()}>
                        {cardGroupList.map((cardGroup,index)=>
                            <Item >
                                {cardGroup.cardGroupTitle}
                            </Item>)}
                    </div>
                </Submenu>
                <Item onClick={(e)=>props.handleCardRemove(e,props.index)}>Удалить карточку</Item>
            </Menu>
        </div>
    )

}

export default CardMenu;