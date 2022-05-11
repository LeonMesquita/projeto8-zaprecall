import ReactDOM from 'react-dom';
import BottomBar from './components/BottomBar';
import InitialScreen from "./components/InitialScreen";
import QuestionsScreen from './components/QuestionsScreen';

function AppBody(){
    // <InitialScreen />
    return(
        <div className='main-container'>
           <QuestionsScreen />
           <BottomBar />
        </ div>
    );
}

const app = AppBody()
ReactDOM.render(app, document.querySelector(".root"));