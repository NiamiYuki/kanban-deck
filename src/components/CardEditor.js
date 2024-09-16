import React, {useState} from "react";
import styles from './CardEditor.module.css'

function CardEditor(props){
    console.log( props.card);
    const [newCardTitle, setNewCardTitle] = useState(props.card.cardTitle);
    const [newCardContent, setNewCardContent] = useState(props.card.cardContent);

    const handleChangeCardTitle = (e) => {
        const {value} = e.target;
        setNewCardTitle(value);
    }  

    const handleChangeCardContent = (e) => {
        const {value} = e.target;
        setNewCardContent(value);
    }  


    const handleCloseModal = (e) => {
        props.card.cardTitle = newCardTitle;
        props.card.cardContent = newCardContent;
        props.setShowModal(false)
    }


    return(
        <div  className={styles.editorContainer}>
            <textarea 
                className={styles.cardEditorTextareaTitle}
                value={newCardTitle}
                onChange={(e) => handleChangeCardTitle(e)}
            >
            </textarea>
            <textarea 
                className={styles.cardEditorTextareaCardContent}
                value={newCardContent}
                onChange={(e) => handleChangeCardContent(e)}
            >       
            </textarea>
            <div className={styles.editorButtonsContainer}>
                <button className={styles.editorButton} onClick={() => handleCloseModal()}>Закрыть</button> 
                <button className={styles.editorButton} onClick={() => props.handleCardRemove(props.cardIndex)}>Удалить карточку</button>
            </div>
            

        </div>
    )

}

export default CardEditor;