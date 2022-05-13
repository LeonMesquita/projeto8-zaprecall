import React from 'react'

export default function QuestionCard(props){
    const [turned, setTurned] = React.useState(false);
    return(
        turned ?
        <div className="back-card">
            <span>{props.answer}</span>
            <div className='buttons'>
                <button className='red-button'>Não lembrei</button>
                <button className='orange-button'>Quase não lembrei</button>
                <button className='green-button'>Zap!</button>
            </div> 
        </div> :
        <div className="question-card">
            <span>{props.questionText}</span>
             <img src="images/setinha.png" alt="" onClick={() => setTurned(true)}/>
        </div>
    )
}