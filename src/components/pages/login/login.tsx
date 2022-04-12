
import React from 'react';
import { Component } from 'react';

export default class Login extends Component { 
    state = {
        login_username: '',
        login_password: '',
        username: '',
        password: '',
        email: '',
        fullname: '',
        phone: '',
        address: '',
        birthdate: '',
        display: 'login'
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
            fullname: e.target.value
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

    handleBirthdate = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            birthdate: e.target.value
        });
    }

    toggleDisplay = () => {
        const { display } = this.state;
        const that = this;

        function toggle( display:string ) {
            that.setState({ display: display });
        }

        return (
            <ul className='toggle_display'>
                <li
                    className={ display === 'login' ? 'selected' : '' }
                    onClick={ () => toggle( 'login' ) }
                > login </li>
                <li
                    className={ display === 'create' ? 'selected' : '' }
                    onClick={ () => toggle( 'create' ) }
                > create </li>
            </ul>
        );
    }

    showLogin = () => {
        const { login_username, login_password, display } = this.state;

        if( display === 'login' ) {
            return (
                <form
                    method='POST'
                    action='./PHP/login.php'
                    target='login_iframe'
                    className='page'
                >
                    { this.toggleDisplay() }
                    <h3> Enter username & password: </h3>
    
                    <fieldset>
                        <label> Username: </label>
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
            );
        }

        return null;
    }

    showRegisterAccount = () => {
        const { username, password, email, fullname, phone, address, birthdate, display } = this.state;

        if( display === 'create' ) {
            return (
                <form 
                    id='user_info' 
                    className='page'
                    method='POST'
                    action='./PHP/account.php'
                    target='creation_iframe'
                    style={{ gridTemplateColumns: '300px 300px' }}
                    onSubmit={this.handleSubmit}
                    >
                        { this.toggleDisplay() }
                        <h3> Create an account: </h3>
    
                        <fieldset>
                            <label> Username: </label>
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
                                name='password'
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
                                name='fullname'
                                value={ fullname }
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
                                name='birthdate'
                                value={ birthdate }
                                onChange={ this.handleBirthdate }
                                required
                            />
                        </fieldset>
    
                        <fieldset className='button'>
                            <button 
                                type='submit'
                                onClick={ this.handleSubmit }
                                value='submit'
                            > Submit </button>
                        </fieldset>
                    </form>
            );
        }

        return null;
    }

    render() {
        return (
            <div id='login_create'>
                { this.showRegisterAccount() }
                { this.showLogin() }
                <div className ='account_info'> { /* fill this with output formatting with data from php file */ } </div>
                <iframe ref={ this.iframeData } name='login_iframe' style={{ display: 'none' }} />
            </div>
        );
    }
}

