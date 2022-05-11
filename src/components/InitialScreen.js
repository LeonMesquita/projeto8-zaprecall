import StartButton from "../reusable components/StartButton";

export default function InitialScreen(){
    return(
        <div className="initial-screen hidden">
            <img  src="images/logo.svg" alt=""/>
            <h1>ZapRecall</h1>
            <StartButton />
        </div>
    );
}