import ReactDOM from 'react-dom';
import AppInit from './components/AppInit';

function AppBody(){
    return(
        <div className='main-container'>
           <AppInit />
       
        </ div>
    );
}

const app = AppBody()
ReactDOM.render(app, document.querySelector(".root"));