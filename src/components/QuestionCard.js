export default function QuestionCard(props){
    return(
        <div className="question-card">
            <span>{props.questionText}</span>
            <img src="images/setinha.png" alt=""/>
        </div>
    )
}