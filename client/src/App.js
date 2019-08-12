import React, { Component } from 'react'
import Cert from './components/cert/Cert'
import Excel from "./components/excel/Excel"

class App extends Component {
    render() {
        return (
            <div>
                <Cert /> 
                <Excel />
            </div>
        )
    }
}

export default App