
import React from 'react';
import { Component } from 'react';

export default class Login extends Component {
    

    formAction = React.createRef<HTMLFormElement>();
    
    
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


    search = async ( e:React.KeyboardEvent<HTMLInputElement> ) => {
        const { login_password, login_username } = this.state;

        if( e.key === 'Enter' && login_username.length >= 4 && login_password.length >= 4) {

        this.formAction.current?.submit();
        }
    }

    // Trying to turn from here XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    iframeData = React.createRef<HTMLIFrameElement>();

    checkData = () => {
        // using this for user info return from php
      const userInfo = this.iframeData.current?.contentWindow?.document.getElementById( 'user_info' );
  
      if( userInfo?.textContent && userInfo.textContent !== '' ) {
        const txt = userInfo.textContent; // convert to plain text to get rid of the crappy html that got carried over.
        const txtString = String( txt ); // convert back to a normal string without the bs.
        let txtJson;
  
        try {
          txtJson = JSON.parse( txtString ); // break it into JSON.
        }
        catch( e ) {
          return true;
        }
  
        if( txtJson.results ) {
            userInfo.innerHTML = ''; // reset data that was passed back to empty.
          this.setState({ 

            // this sets the info for output in the other functions called of search
            user: txtJson.results
          });
  
          console.warn( txtJson );
    
          return true;
        }
      }
  
      return false;
    }

    //TO HERE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX TO USEABLE CODE FOR THIS PAGE

    render() {
        const { login_username, login_password } = this.state;

        return (
            <div id='login' className='page'>
            <form
            ref={ this.formAction }
            onClick={this.handleSubmit}
            method='POST'
            action='index.php'
            

            >
                <fieldset>
                    <label> Enter ID: </label>
                    <input id='username'
                        type='text'
                        name='login_username'
                        value={ login_username }
                        onChange={ this.handleUsername }
                    />

                    <label> Password: </label>
                    <input id='password'
                        type='text'
                        name='login_password'
                        value={ login_password }
                        onChange={ this.handlePassword }
                        onKeyDown={ this.search }
                    />
                </fieldset>
            </form>

            </div>
        );
    }
}

