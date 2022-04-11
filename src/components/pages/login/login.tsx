
import React from 'react';
import { Component } from 'react';

export default class Login extends Component { 
    state = {
        login_username: '',
        login_password: '',
        username: '',
        password: '',
        email: '',
        name: '',
        phone: '',
        address: '',
        birthday: '',
        account: []
    }

    iframeData = React.createRef<HTMLIFrameElement>();

    // for login part
    checkData = () => {
        const loginData = this.iframeData.current?.contentWindow?.document.getElementById( 'login_data' );
    
        if( loginData?.textContent && loginData.textContent !== '' ) {
           const txt = loginData.textContent; // convert to plain text to get rid of the crappy html that got carried over.
           const txtString = String( txt ); // convert back to a normal string without the bs.
           let txtJson;
    
           try {
             txtJson = JSON.parse( txtString ); // break it into JSON.
           }
           catch( e ) {
             console.error( 'error fetching data from DOM: ' + e );

             return true;
           }
    
           if( txtJson.results ) {

                console.warn( loginData.textContent ); // this is the data coming back from login.php
                this.setState({
                    account: txtJson.results
                });

                console.warn( txtJson );  // data being echo'd back (this will be in the iframe)
                return true;
           }
        }
    
        return false;
    }

    dataSearch = () => {
        const { login_username, login_password } = this.state;

        if( login_username !== '' && login_password !== '' ) {
            const dataSearch = setInterval( () => { // keep checking the DOM every .25s until we have our data
                if( this.checkData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
            }, 250 );
        }
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


    // for account creation part
    handleSubmit = () => {
        console.warn( 'sending the form to db... soon' );
    }
    handleNewUsername = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            username: e.target.value
        });
    }
    handleNewPassword = ( e:React.ChangeEvent<HTMLInputElement> ) => {
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
        const { login_username, login_password, username, password, email, name, phone, address, birthday } = this.state;

        return (
            <div id='login' className='page'>
            <form 
            id='user_info' 
            className='page'
            method='POST'
            action='./PHP/account.php'
            target='creation_iframe'
            onSubmit={this.handleSubmit}
            >
                <p>Create Account: </p>
                <fieldset>
                    <label> Enter Username: </label>
                    <input 
                        type='text'
                        name='username'
                        value={ username }
                        onChange={ this.handleNewUsername }
                        required
                    />
                </fieldset>
                
                <fieldset>
                    <label> Password: </label>
                    <input 
                        type='text'
                        name='login_password'
                        value={ password }
                        onChange={ this.handleNewPassword }
                        required
                    />
                </fieldset>

                <fieldset>
                    <label> Email: </label>
                    <input 
                        type='text'
                        name='email'
                        value={ email }
                        onChange={ this.handleEmail }
                        required
                    />
                </fieldset>

                <fieldset>
                    <label> Full Name: </label>
                    <input 
                        type='text'
                        name='fname'
                        value={ name }
                        onChange={ this.handleName }
                        required
                    />
                </fieldset>

                <fieldset>
                    <label> Phone: </label>
                    <input 
                        type='text'
                        name='phone'
                        value={ phone }
                        onChange={ this.handlePhone }
                        required
                    />
                </fieldset>

                <fieldset>
                    <label> Address: </label>
                    <input 
                        type='text'
                        name='address'
                        value={ address }
                        onChange={ this.handleAddress }
                        required
                    />
                </fieldset>

                <fieldset>
                    <label> Birthday: </label>
                    <input 
                        type='text'
                        name='birthday'
                        value={ birthday }
                        onChange={ this.handleBirthday }
                        required
                    />
                </fieldset>

                <fieldset>
                    <button 
                    type='submit'
                    onClick={ this.handleSubmit }
                    value='submit'></button>
                </fieldset>
            </form>

                <form
                    method='POST'
                    action='./PHP/login.php'
                    target='login_iframe'
                >
                    <p>Enter your login information: </p>
                    <fieldset>
                        <label> Enter ID: </label>
                        <input id='username'
                            type='text'
                            name='login_username'
                            value={ login_username }
                            onChange={ this.handleUsername }
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label> Password: </label>
                        <input id='password'
                            type='text'
                            name='login_password'
                            value={ login_password }
                            onChange={ this.handlePassword }
                            required
                        />
                    </fieldset>

                    <button 
                        type='submit'
                        onClick={ this.dataSearch }
                        style={{ display: 'none' }}
                    > Submit </button>
                </form>

                
                <div className ='account_info'> 
                    {
                        //fill this with output formatting with data from php file


                    }

                </div>

                <iframe ref={ this.iframeData } name='login_iframe' style={{ display: 'none' }} />
            </div>
        );
    }
}

