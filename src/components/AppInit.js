import BottomBar from "./BottomBar";
import InitialScreen from "./InitialScreen";
import QuestionsScreen from "./QuestionsScreen";
import React from 'react';
export default function AppInit(){
    // <QuestionsScreen />
    //                <BottomBar />

    const [screen, setScreen] = React.useState('InitialScreen');
                return(
               
                      <div className='main-container'>
                    
                      <QuestionsScreen />

                    </ div>


            );
  

}

/*

      {
                            screen === 'InitialScreen' ?
                            <InitialScreen setScreen={setScreen}/> :
                            <>
                                <QuestionsScreen />
                                <BottomBar />
                            </>
                        }   
*/