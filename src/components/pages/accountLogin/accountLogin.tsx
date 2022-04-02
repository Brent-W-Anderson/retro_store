
import { Component } from 'react';

export default class AccountLogin extends Component {
    state = {
        login_username: '',
        login_password: ''
    }

    handleSubmit = () => {
        console.warn( 'form submitted..' );
    }

    handleUsername = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            login_username: e.target.value
        });
    }

    handlePassword = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            login_password: e.target.value
        });
    }

    render() {
        const { login_username, login_password } = this.state;

        return (
            <form onSubmit={ this.handleSubmit }>
                <label> Enter ID: </label>
                <input 
                    type='text'
                    name='login_username'
                    value={ login_username }
                    onChange={ this.handleUsername }
                />
                
                <label> Password: </label>
                <input 
                    type='text'
                    name='login_password'
                    value={ login_password }
                    onChange={ this.handlePassword }
                />
            </form>
        );
    }
}

