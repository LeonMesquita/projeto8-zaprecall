import QuestionCard from "./QuestionCard";
import React from 'react';
import BottomBar from "./BottomBar";
import InitialScreen from "./InitialScreen";



export default function QuestionsScreen(props){
    
    const choosedDeck = props.selectedDeck;
    const [finished, setFinished] = React.useState(0);

    const [listOfCheck, setListOfCheck] = React.useState([]);

    const [currentScreen, setCurrentScreen] = React.useState('QuestionsScreen');

    let qtdZap = 0;
    return(
        currentScreen === "QuestionsScreen" ?
        <div className="questions-screen"> 
            <div className="title">
                <img  src="images/logo.svg" alt=""/>
                <h1>ZapRecall</h1>
            </div>
            
            {choosedDeck.map((card, index) => <Question questionNumber={index+1} key={index}
            questionText={card.questionTitle} answer={card.questionAnswer}
            setList={setListOfCheck} listOfCheck={listOfCheck} setCont={setFinished} cont={finished}
            />
        )}
                    
        <BottomBar>
            {finished === choosedDeck.length ?
                checkAnswers()
            :
            null
            }

            <span>{finished}/{choosedDeck.length} CONCLUÍDOS</span> 
            
                {listOfCheck.length !== 0 ? 
                <div className="check-icons">
                    {listOfCheck.map((check, index) =>  <img src={check} alt="" key={index}/>)}
                    </div>   
 
                :
                    <div className="margin"></div>
                }

            {finished === choosedDeck.length ? 
            <button className="reset-button" onClick={ResetApp}>REINICIAR RECALL </button>
            :
            null
            }
           
        </BottomBar>

        
        </div>
        :
        <InitialScreen />
    );



    function checkAnswers(){
        let result = "Parabéns!";
        let message = "Você não esqueceu de nenhum flashcard!";
        let emoji = "images/party.svg";
        
        for (let cont = 0; cont < listOfCheck.length; cont++){
            if (listOfCheck[cont] === "images/wrong.svg"){
                result = "Puts..."
                emoji = "images/sad.svg"
                message = "Ainda faltam alguns... Mas não desanime!"
                break;
            }
            else if (listOfCheck[cont] === "images/correct.svg") 
                qtdZap++;
        }

        if(qtdZap < props.zapMeta){
            result = "Puts..."
            emoji = "images/sad.svg"
            message = "Ainda faltam alguns... Mas não desanime!"
        }
        return(
        <>
            <div className="finished-zap">
                <img  src={emoji} alt=""/>
                <p>{result}</p>
             </div>
            <span>{message}</span>
       </>

        );

    }




    function ResetApp(){
        setCurrentScreen("InitialScreen");
    }
}


function Question(props){
    const [open, setOpen] = React.useState(false);
    const [answered, setAnswered] = React.useState(false);
    const [flashIcon, setFlashIcon] = React.useState("images/play.svg");


    return(
       !open?
            questionContainer()
       :
       <QuestionCard questionText={props.questionText} answer={props.answer}
       setList={props.setList} listOfCheck={props.listOfCheck} setCont={props.setCont}
       cont={props.cont} setAnswered={setAnswered} setOpen={setOpen} setFlashIcon={setFlashIcon}
       />

    );



    function questionClass(){
        if(flashIcon === "images/correct.svg")
            return "correct-question"
        else if(flashIcon === "images/wrong.svg")
            return "wrong-question"
        else return "almost-correct"
    }

    function questionContainer(){
        const questClass = questionClass();
        if(answered === false){
            return(
                <button className="question-container"   onClick={() => setOpen(true)} >
                <span className={"question-title"}>Pergunta {props.questionNumber}</span>
                <img  src={flashIcon} alt=""/>
            </button>
            )
        }
        else{
            return(
                <button className="question-container">
                <span className={`answered-question ${questClass}`}>Pergunta {props.questionNumber}</span>
                <img  src={flashIcon} alt=""/>
            </button>
            )
        }
    }
}


/*

 
*/