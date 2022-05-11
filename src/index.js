import ReactDOM from 'react-dom';
import InitialScreen from "./components/InitialScreen";

function AppBody(){
    return(
        <div>
            <InitialScreen />
        </ div>
    );
}

const app = AppBody()
ReactDOM.render(app, document.querySelector(".root"));