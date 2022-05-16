import React from 'react';
import QuestionsScreen from './QuestionsScreen';

import decks from '../decks'



export default function InitialScreen(){
    
    const [screen, setScreen] = React.useState('InitialScreen');
    const [inputValue, setInputValue] = React.useState('');
    const [selectedDeck, setSelectedDeck] = React.useState([]);
    return(
        screen === "InitialScreen" ?
        <div className="initial-screen all-screen">
            <img  src="images/logo.svg" alt=""/>
            <h1>ZapRecall</h1>
            <input className="meta-form" placeholder="Digite sua meta de zaps..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ></input>

            <SelectDeck chooseDeck={chooseDeck}/>
            {inputValue === "" || selectedDeck.length === 0 ?
            <button className="inactive-button">Iniciar Recall!</button>
            :
            <button className="active-button" onClick={validateInput}>Iniciar Recall!</button>
            }
        </div>
        :
        <div className='main-container'>
            <QuestionsScreen zapMeta={inputValue} selectedDeck={selectedDeck}/>
        </div>
    );


    function validateInput(){
        if(!isNaN(inputValue) && inputValue >= 1 && inputValue <= 8)
            setScreen("QuestionsScreen");
    }

    function chooseDeck(setDeck, value){
       setDeck(value)
       if (value === "1")
        setSelectedDeck(decks[0].deck);
        else if (value === "2")
        setSelectedDeck(decks[1].deck);
    }
}


function SelectDeck(props){
    const [deck, setDeck] = React.useState(0);
    let chooseDeck = props.chooseDeck;
    function editState(e){
        e.preventDefault();
    }
    return(
        <select name='decks' className='select-deck' value={deck} onChange={item => chooseDeck(setDeck, item.target.value)}>
            <option value="0">Escolha um deck</option>
            <option value="1">Deck 1</option>
            <option value="2">Deck 2</option>
        </select>
    )
}