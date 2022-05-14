import React from 'react'

export default function QuestionCard(props){
    const buttons = [
        {
            color: 'red-button',
            text: 'Não lembrei',
        },
        {
            color: 'orange-button',
            text: 'Quase não lembrei',
        },
        {
            color: 'green-button',
            text: 'Zap!',
        },
        
    ]
    const [turned, setTurned] = React.useState(false);
    return(
        turned ?
        <div className="back-card">
            <span>{props.answer}</span>
            <div className='buttons'>
                {buttons.map(
                    button => <Button color={button.color} text={button.text} setList={props.setList}
                    listOfCheck={props.listOfCheck} setCont={props.setCont} cont={props.cont}
                    setAnswered={props.setAnswered} setOpen={props.setOpen} setFlashIcon={props.setFlashIcon}
                    />
                )}
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
            props.setFlashIcon("images/wrong.svg");
        }
        else if (buttonClass === "green-button"){
            newList.push(
                <img src="images/correct.svg" alt=""/>
            )
            props.setFlashIcon("images/correct.svg");

        }
        else {
            newList.push(
                <img src="images/almost.svg" alt=""/>
            )
            props.setFlashIcon("images/almost.svg");
          
        }
        props.setCont(props.cont + 1);
        setList(newList);
        props.setAnswered(true);
        props.setOpen(false);
        
    }
    return(
        <button onClick={() => selectOption(props.setList, props.listOfCheck, props.color)}
        className={props.color}>{props.text} </button>
    );
}