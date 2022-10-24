import React from 'react'
import {NavBar} from "./components/NavBar";
import {MainContent} from "./components/MainContent";

function App(){
    return(
    <React.Fragment>
        <NavBar/>
        <MainContent />
    </React.Fragment>
    )
}
export default App;