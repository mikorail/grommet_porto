import React from 'react'
import './style.css'

class Portofolio extends React.Component {
    render(){
        return(
            <div>
                <h1>Portofolio page</h1>
                <img className="imageBG" src={require('./img/10.png')}/>
            </div>
        )
    }
}

export default Portofolio;