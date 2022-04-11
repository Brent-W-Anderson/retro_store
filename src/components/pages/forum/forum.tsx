

import React, { Component } from 'react';

export default class Forum extends Component {
    state = {
        message: '',
        reply: '',
        username: '',
        game: '',
        display: 'messageboard'
    }

    iframeData = React.createRef<HTMLIFrameElement>();

    checkData = () => {
        const messageData = this.iframeData.current?.contentWindow?.document.getElementById( 'messageboard_data' );
    
        if( messageData?.textContent && messageData.textContent !== '' ) {
           const txt = messageData.textContent; // convert to plain text to get rid of the crappy html that got carried over.
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

                console.warn( messageData.textContent ); // this is the data coming back from login.php
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
        const { username, message, game } = this.state;

        if( username !== '' && message !== '' && game !== '') {
            const dataSearch = setInterval( () => { // keep checking the DOM every .25s until we have our data
                if( this.checkData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
            }, 250 );
        }
    }

    handleSubmit = () => {
            console.warn( 'Posting info to db ');
    }

    handleMessage = (e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            message: e.target.value
        });
    }

    handleReply = (e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            reply: e.target.value
        });
    }

    handleUsername = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            username: e.target.value
        });
    }

    handleGame = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            game: e.target.value
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
                    className={ display === 'messageboard' ? 'selected' : '' }
                    onClick={ () => toggle( 'messageboard' ) }
                > message </li>
                <li
                    className={ display === 'replyboard' ? 'selected' : '' }
                    onClick={ () => toggle( 'replyboard' ) }
                > reply </li>
            </ul>
        );
    }

    showMessageBoard = () => {
        const { username, message, game, display } = this.state;

        if( display === 'messageboard')
        return (
            <form 
                method='POST'
                action='./PHP/forum.php'
                target='message_iframe'
                className='page'
                >
                     { this.toggleDisplay() }
                     <h3> Enter your forum post: </h3>
                     <fieldset>
                            <label> Username: </label>
                            <input 
                                type='text'
                                name='username'
                                value={ username }
                                onChange={ this.handleUsername }
                                required
                            />
                    </fieldset>
                    <fieldset>
                            <label> Game: </label>
                            <input 
                                type='text'
                                name='game'
                                value={ game }
                                onChange={ this.handleGame }
                                required
                            />
                    </fieldset>
                    <fieldset>
                        <label> Enter Message: </label>
                        <input id='message'
                            type='text'
                            name='message'
                            value={ message }
                            onChange={ this.handleMessage }
                            required
                        />
                    </fieldset>

                    <button 
                        type='submit'
                        onClick={ this.dataSearch }
                        value='submit'
                    > Submit </button>

            </form>
        );

        return null;

    }
    showReplyBoard = () => {
        const { username, message, display } = this.state;

        if( display === 'replyboard')
        return (
            <form 
                id='reply'
                className='page'
                method='POST'
                action='./PHP/forum.php'
                target='message_iframe'
                style={{ gridTemplateColumns: '300px 300px' }}
                onSubmit={this.handleSubmit}
                >

                    { this.toggleDisplay() }
                    <h3> Respond to a message: </h3>
                
                    <fieldset>
                            <label> Username: </label>
                            <input 
                                type='text'
                                name='username'
                                value={ username }
                                onChange={ this.handleUsername }
                                required
                            />
                    </fieldset>

                    <fieldset>
                        <label> Enter Message: </label>
                        <input id='reply'
                            type='text'
                            name='reply'
                            value={ message }
                            onChange={ this.handleReply }
                            required
                        />
                    </fieldset>

                    <fieldset>
                            <button 
                                type='submit'
                                onClick={ this.handleSubmit }
                                value='submit'
                            > Submit </button>
                    </fieldset>
            </form>
        );

        return null;

    }


    render() {
        return (
            <div id='message_board'>
                { this.showMessageBoard() }
                { this.showReplyBoard() }
                <iframe ref={ this.iframeData } name='messageboard_iframe' style={{ display: 'none' }} />
            </div>
        );
    }
}