import React from 'react'

export default function QuestionCard(props){
    const [turned, setTurned] = React.useState(false);
    return(
        turned ?
        <div className="back-card">
            <span>{props.answer}</span>
            <div className='buttons'>
                <Button color='red-button' text="Não lembrei" setList={props.setList} listOfCheck={props.listOfCheck} setCont={props.setCont} cont={props.cont}/>
                <Button color='orange-button' text="Quase não lembrei" setList={props.setList} listOfCheck={props.listOfCheck} setCont={props.setCont} cont={props.cont}/>
                <Button color='green-button' text="Zap!" setList={props.setList} listOfCheck={props.listOfCheck} setCont={props.setCont} cont={props.cont}/>
            </div> 
        </div> :
        <div className="question-card">
            <span>{props.questionText}</span>
             <img src="images/setinha.png" alt="" onClick={() => setTurned(true)}/>
        </div>
    )
}


function Button(props){

    function selectOption(setList, list, buttonClass){
        const newList = [...list];
        if (buttonClass === "red-button"){
            newList.push(
                <img src="images/wrong.svg" alt=""/>
            )
        }
        else if (buttonClass === "green-button"){
            newList.push(
                <img src="images/correct.svg" alt=""/>
            )
        }
        else {
            newList.push(
                <img src="images/almost.svg" alt=""/>
            )            
        }
        props.setCont(props.cont + 1);
        setList(newList);
        //console.log(setList)
    }
    return(
        <button onClick={() => selectOption(props.setList, props.listOfCheck, props.color)}
        className={props.color}>{props.text} </button>
    );
}