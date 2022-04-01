
import {Component} from 'react';
import { useState } from 'react';
import { ReactDOM } from 'react';

export default class AccountLogin extends Component {
    
    buttonAlerts() {
        alert('Test');
    }

    function submitLogin() {
        const[inputs,  setInputs] = useState({});

        const handleChange = (event: { target: { userID: string; password: any; }; }) => {
            const userID = event.target.userID;
            const password = event.target.password;
            setInputs(values => ({...values, [userID]: password}))
        }
        const handleSubmit = (event: { preventDefault: () => void; }) => {
            event.preventDefault();
            console.log(inputs);
        }
    

    
        return (
            <form onSubmit={handleSubmit}>
                <label>Enter ID: 
                    <input 
                    type='text'
                    name='userID'
                    value={inputs.userID || ''}
                    onChange={handleChange}
                    />
                </label>
                <label>Password: 
                    <input
                    type='any'
                    name='password'
                    value={inputs.password || ''}
                    onChange={handleChange}
                    />
                </label>
            </form>
        );
        ReactDOM.render(<submitLogin />, document.getElementById('root'));
    }
}

