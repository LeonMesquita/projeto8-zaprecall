import QuestionCard from "./QuestionCard";
import React from 'react';
export default function QuestionsScreen(){

    const deck1 = [
        {
            questionTitle: "O que é JSX?",
            questionAnswer: "JSX é uma sintaxe para escrever HTML dentro do JS"
        },
        {
            questionTitle: "O React é_",
            questionAnswer: "uma biblioteca JavaScript para construção de interfaces"
        },
        {
            questionTitle: "Componentes devem iniciar com_",
            questionAnswer: "letra maiúscula"
        },
        {
            questionTitle: "Podemos colocar __ dentro do JSX",
            questionAnswer: "expressões"
        },
        {
            questionTitle: "O ReactDOM nos ajuda __",
            questionAnswer: "interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            questionTitle: "Usamos o npm para __",
            questionAnswer: "gerenciar os pacotes necessários e suas dependências"
        },
        {
            questionTitle: "Usamos props para __",
            questionAnswer: "passar diferentes informações para componentes"
        },
        {
            questionTitle: "Usamos estado (state) para __",
            questionAnswer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
        
    ]


    return(
        <div className="questions-screen"> 
            <div className="title">
                <img  src="images/logo.svg" alt=""/>
                <h1>ZapRecall</h1>

            </div>
            
            {deck1.map((card, index) => <Question questionNumber={index+1} key={index}
            questionText={card.questionTitle} answer={card.questionAnswer}/>
        )}
        
        </div>
    );
}



function Question(props){
    const [open, setOpen] = React.useState(false);

    return(
       open ? <QuestionCard questionText={props.questionText} answer={props.answer}/> :
        <button className="question-container"   onClick={() => setOpen(true)} >
            <span>Pergunta {props.questionNumber}</span>
            <img  src="images/play.svg" alt=""/>
        </button>
    );
}