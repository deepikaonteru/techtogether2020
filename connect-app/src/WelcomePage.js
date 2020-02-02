import React from 'react';
import Headerbar from './Headerbar.js';
import defaultSignIn from './assets/defaultSignIn.png';

class WelcomePage extends React.Component {

    render() {
        return (
            <div>
                <Headerbar> </Headerbar>
                <div className="linkedinSignin">
                    <img src={defaultSignIn}/>
                </div>
            </div>
        );
    }

}

export default WelcomePage;