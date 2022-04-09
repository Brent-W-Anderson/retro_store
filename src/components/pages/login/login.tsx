
import React from 'react';
import { Component } from 'react';

export default class Login extends Component { 
    state = {
        login_username: '',
        login_password: ''
    }

    iframeData = React.createRef<HTMLIFrameElement>();

    checkData = () => {
        const loginData = this.iframeData.current?.contentWindow?.document.getElementById( 'login_data' );
    
        if( loginData?.textContent && loginData.textContent !== '' ) {
        //   const txt = loginData.textContent; // convert to plain text to get rid of the crappy html that got carried over.
        //   const txtString = String( txt ); // convert back to a normal string without the bs.
        //   let txtJson;
    
        //   try {
        //     txtJson = JSON.parse( txtString ); // break it into JSON.
        //   }
        //   catch( e ) {
        //     console.error( 'error fetching data from DOM: ' + e );

        //     return true;
        //   }
    
        //   if( txtJson.results ) {
        //     console.warn( txtJson ); // data being echo'd back (this will be in the iframe)
      
            console.warn( loginData.textContent ); // this is the data coming back from login.php
            return true;
        //   }
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

    render() {
        const { login_username, login_password } = this.state;

        return (
            <div id='login' className='page'>
                <form
                    method='POST'
                    action='./PHP/login.php'
                    target='login_iframe'
                >
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

                <iframe ref={ this.iframeData } name='login_iframe' style={{ display: 'none' }} />
            </div>
        );
    }
}

