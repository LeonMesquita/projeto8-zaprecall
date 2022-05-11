export default function QuestionsScreen(){
    return(
        <div className="questions-screen"> 
            <div className="title">
                <img  src="images/logo.svg" alt=""/>
                <h1>ZapRecall</h1>

            </div>
            <Question questionNumber="1"/>
            <Question questionNumber="2"/>
            <Question questionNumber="3"/>
            <Question questionNumber="4"/>

        </div>
    );
}

function Question(props){
    return(
        <button className="question-container">
            <span>Pergunta {props.questionNumber}</span>
            <img  src="images/play.svg" alt=""/>
        </button>
    );
}