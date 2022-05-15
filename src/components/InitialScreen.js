import React from 'react';
import QuestionsScreen from './QuestionsScreen';

export default function InitialScreen(){
    const [screen, setScreen] = React.useState('InitialScreen');
    const [inputValue, setInputValue] = React.useState('');

    return(
        screen === "InitialScreen" ?
        <div className="initial-screen all-screen">
            <img  src="images/logo.svg" alt=""/>
            <h1>ZapRecall</h1>
            <input className="meta-form" placeholder="Digite sua meta de zaps..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            ></input>
            {inputValue === "" ?
            <button className="inactive-button">Iniciar Recall!</button>
            :
            <button className="active-button" onClick={validateInput}>Iniciar Recall!</button>
            
            }
        </div>
        :
        <div className='main-container'>
            <QuestionsScreen zapMeta={inputValue}/>
        </div>
    );


    function validateInput(){
        if(!isNaN(inputValue) && inputValue >= 1 && inputValue <= 8)
            setScreen("QuestionsScreen");
    }
}

