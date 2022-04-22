
import React, { Component } from 'react';

export default class Store extends Component {

    state = {
        username: '',
        game: ''
    }

    iframeData = React.createRef<HTMLIFrameElement>();


    handleUsername = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        this.setState({
            username: e.target.value
        });
    }
    handlePurchase = () => {

           console.log(this.state);

    }



    dataSearch = () => {
        const { username, game } = this.state;

        if( username !== '' && game !== '' ) {
            const dataSearch = setInterval( () => { // keep checking the DOM every .25s until we have our data
                if( this.checkData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
            }, 250 );
        }
    }

    checkData = () => {
        const purchaseData = this.iframeData.current?.contentWindow?.document.getElementById( 'purchase_data' );
    
        if( purchaseData?.textContent && purchaseData.textContent !== '' ) {
           const txt = purchaseData.textContent; // convert to plain text to get rid of the crappy html that got carried over.
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

                console.warn( purchaseData.textContent ); // this is the data coming back from login.php
                this.setState({
                    account: txtJson.results
                });

                console.warn( txtJson );  // data being echo'd back (this will be in the iframe)
                return true;
           }
        }
    
        return false;
    }



    gameStore = () => {
        const { username, game } =this.state;

        <form
        method='POST'
        action='./PHP/store.php'
        target='store_iframe' 
        className='games-container'
        >
        <div id='storePage'><h1>Retro-Retro Store</h1></div>

        <div className='box'>
            <img src='_pictures\halo_infinite.png'></img>
            <p> Halo </p>
        </div>
        <div className='box'>
            <img src='_pictures\cuphead.jpg'></img>
            <p> Cuphead </p>
        </div>
        <div className='box'>
            <img src='_pictures\halo_infinite.png'></img>
            <p> Read Dead Redemption </p>
        </div>
        <div className='box'>
            <img src='_pictures\halo_infinite.png'></img>
            <p> Elden Ring </p>
        </div>
        <div className='box'>
            <img src='_pictures\halo_infinite.png'></img>
            <p>  </p>
        </div>
        <div className='box'>
            <img src='_pictures\halo_infinite.png'></img>
            <p> Cuphead </p>
        </div>

        <h3> Enter username & game title you would like to purchase: </h3>

        <fieldset>
            <label> Username: </label>
            <input id='username'
                type='text'
                name='login_username'
                value={ username }
                onChange={ this.handleUsername }
                required
            />
        </fieldset>

        <fieldset>
            <label> Game: </label>
            <select name='game' id='game'>
                <option value='Halo'>Halo</option>
                <option value='Cuphead'>Cuphead</option>
                <option value='Elden Ring'>Elden Ring</option>

            </select>
            
        </fieldset>

        <button 
            type='submit'
            onClick={ this.dataSearch }
            style={{ display: 'none' }}
        > Submit </button>



    </form>

    return null;

    }



    render() {
        return (
            <div id='games-container'>
                { this.gameStore() }
            </div>

        );
    }
        
}

