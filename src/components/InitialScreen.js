
export default function InitialScreen({setScreen}){
    return(
        <div className="initial-screen hidden">
            <img  src="images/logo.svg" alt=""/>
            <h1>ZapRecall</h1>
            <button className="start-button" onClick={() => setScreen('QuestionsScreen')}>Iniciar Recall!</button>
        </div>
    );
}