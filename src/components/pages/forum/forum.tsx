

import React, { Component } from 'react';

export default class Forum extends Component {
    state = {
        message: '',
        updatedmessage: '',
        replymessage: '',
        username: '',
        game: '',
        display: 'messageboard'
    }

    iframeData = React.createRef<HTMLIFrameElement>();

    messageCheckData = () => {
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

    
    messageSearch = () => {
        const { username, message, game } = this.state;

        if( username !== '' && message !== '' && game !== '') {
            const dataSearch = setInterval( () => { // keep checking the DOM every .25s until we have our data
                if( this.messageCheckData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
            }, 250 );
        }
    }

    updateMessageData = () => {
        const { username, updatedmessage } = this.state;

        if( username !== '' && updatedmessage !== '') {
            const dataSearch = setInterval( () => { // keep checking the DOM every .25s until we have our data
                if( this.messageCheckData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
            }, 250 );
        }
    }
    updateReplyData = () => {
        const { username, replymessage } = this.state;

        if( username !== '' && replymessage !== '') {
            const dataSearch = setInterval( () => { // keep checking the DOM every .25s until we have our data
                if( this.messageCheckData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
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
            replymessage: e.target.value
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
    handleUpdatedMessage = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            updatedmessage: e.target.value
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
                > Create Post </li>
                <li
                    className={ display === 'replyboard' ? 'selected' : '' }
                    onClick={ () => toggle( 'replyboard' ) }
                > Reply </li>
                <li
                    className={ display === 'updatedmessage' ? 'selected' : '' }
                    onClick={ () => toggle( 'updatedmessage' ) }
                > Update Post </li>
                
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
                        onClick={ this.messageSearch }
                        value='submit'
                    > Submit </button>

            </form>
        );

        return null;

    }

    showUpdateBoard = () => {
        const { username, updatedmessage, display } = this.state;

        if( display === 'updatedmessage')
        return (
            <form 
                className='page'
                method='POST'
                action='./PHP/forum.php'
                target='update_iframe'
                >

                    { this.toggleDisplay() }
                    <h3> Change a message: </h3>
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
                        <input
                            type='text'
                            name='updatedmessage'
                            value={ updatedmessage }
                            onChange={ this.handleUpdatedMessage }
                            required
                        />
                    </fieldset>

                    <fieldset>
                            <button 
                                type='submit'
                                onClick={ this.updateMessageData }
                                value='submit'
                            > Submit </button>
                    </fieldset>
            </form>
        );

        return null;

    }
    
    showReplyBoard = () => {
        const { username, replymessage, display } = this.state;

        if( display === 'replyboard')
        return (
            <form 
                className='page'
                method='POST'
                action='./PHP/forum.php'
                target='reply_iframe'
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
                            name='replymessage'
                            value={ replymessage }
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
                { this.showUpdateBoard() }
                <iframe ref={ this.iframeData } name='messageboard_iframe' style={{ display: 'none' }} />
            </div>
        );
    }
}