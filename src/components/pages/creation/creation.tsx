
import { Component } from 'react';

export default class Creation extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        name: '',
        phone: '',
        address: '',
        birthday: ''

    }

    handleSubmit = () => {
        console.warn( 'sending the form to db... soon' );
    }

    handleUsername = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            username: e.target.value
        });
    }

    handlePassword = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            password: e.target.value
        });
    }

    handleEmail = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            email: e.target.value
        });
    }

    handleName = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            name: e.target.value
        });
    }

    handlePhone = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            phone: e.target.value
        });
    }

    handleAddress = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            address: e.target.value
        });
    }

    handleBirthday = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            birthday: e.target.value
        });
    }


    render() {
        const { username, password, email, name, phone, address, birthday } = this.state;

        return (
            <form id='user_info' className='page' onSubmit={this.handleSubmit}>
                <fieldset>
                    <label> Enter Username: </label>
                    <input 
                        type='text'
                        name='login_username'
                        value={ username }
                        onChange={ this.handleUsername }
                    />
                </fieldset>
                
                <fieldset>
                    <label> Password: </label>
                    <input 
                        type='text'
                        name='login_password'
                        value={ password }
                        onChange={ this.handlePassword }
                    />
                </fieldset>

                <fieldset>
                    <label> Email: </label>
                    <input 
                        type='text'
                        name='email'
                        value={ email }
                        onChange={ this.handleEmail }
                    />
                </fieldset>

                <fieldset>
                    <label> Full Name: </label>
                    <input 
                        type='text'
                        name='fname'
                        value={ name }
                        onChange={ this.handleName }
                    />
                </fieldset>

                <fieldset>
                    <label> Phone: </label>
                    <input 
                        type='text'
                        name='phone'
                        value={ phone }
                        onChange={ this.handlePhone }
                    />
                </fieldset>

                <fieldset>
                    <label> Address: </label>
                    <input 
                        type='text'
                        name='address'
                        value={ address }
                        onChange={ this.handleAddress }
                    />
                </fieldset>

                <fieldset>
                    <label> Birthday: </label>
                    <input 
                        type='text'
                        name='birthday'
                        value={ birthday }
                        onChange={ this.handleBirthday }
                    />
                </fieldset>

                <fieldset>
                    <input type='submit' value='submit'></input>
                </fieldset>
            </form>
        );
    }
}