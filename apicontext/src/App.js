import React from "react"
import {StoreContext} from "./context.js"
import logo from './logo.svg';
import './App.css';

function App() {
    const  [state, dispatch] = React.useContext(StoreContext);
   
    // const clickMe = () => {
    //     // exemple avec payload
    //     /*dispatch({
    //         type:'input_update',
    //         payload:"salut les gens"
    //     })*/
    //     dispatch({
    //         type:'add_count'
    //     })
    //     dispatch({
    //         type:'sup_count'
    //     })
    // }
   
    return (
        <div className="App">
            <button onClick={() => dispatch({type:'add_count'})}>Ajouter</button>
            <button onClick={() => dispatch({type:'sup_count'})}>supprimer</button>
            <p>compteur : {state.count}</p>
        </div>
    );
}

export default App;
