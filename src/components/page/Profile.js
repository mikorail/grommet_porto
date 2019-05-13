import React from 'react'
import './style.css'

class Profile extends React.Component {
    render(){
        return(
            <div>
                <h1>Profile page</h1>
                <img className="imageBG" src={require('./img/03.png')}/>
            </div>
        )
    }
}

export default Profile;