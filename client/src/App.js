import React, { Component } from 'react'
import Excel from "./components/excel/Excel"
import "./App.css"

class App extends Component {
    render() {
        return (
            <div>
                
                <Excel />
                <p>Developed by<a href="http://www.shivakumarmangina.in"> Shivakumar Mangina</a></p>
            </div>
        )
    }
}

export default App