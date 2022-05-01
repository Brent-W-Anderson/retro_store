
import { Component } from 'react';

export default class Account extends Component<{ accountInfo:string[], setAccountInfo:Function, selectActivePage:Function, resetSearchPage:Function }> {
    state = {
        user: '',
        pass: '',
        email: '',
        fname: '',
        lname: '',
        phone: '',
        address: ''
    }

    componentDidMount() {
        const { accountInfo } = this.props;

        accountInfo.map( ( item, idx ) => {
            switch( idx ) {
                case 0: {
                    this.setState({ user: item });
                } break;

                case 1: {
                    this.setState({ pass: item });
                } break;

                case 2: {
                    this.setState({ email: item });
                } break;

                case 3: {
                    this.setState({ fname: item });
                } break;

                case 4: {
                    this.setState({ lname: item });
                } break;

                case 5: {
                    this.setState({ phone: item });
                } break;

                case 6: {
                    this.setState({ address: item });
                } break;
            }
        } );
    }

    signOut = () => {
        const { setAccountInfo, selectActivePage, resetSearchPage } = this.props;

        setAccountInfo( [] ); // wipe accountInfo
        selectActivePage( 'home' ); // bring back home after logging out
        resetSearchPage(); // reset search values for the next user
    }
    
    render() {
        const { user, pass, email, fname, lname, phone, address } = this.state;

        return (
            <div id="account" className="page">
                <button type="button" onClick={ this.signOut }>Sign Out</button>

                <h3>
                    Hello { fname } { lname }, welcome to Retro-Retro!
                </h3>

                <form>
                    <h3> Account Info: </h3>

                    <fieldset>
                        <label> Password: </label>
                        <input 
                            type='text'
                            name='new_password'
                            placeholder={ pass }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Username: </label>
                        <input 
                            type='text'
                            name='new_username'
                            placeholder={ user }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Last Name: </label>
                        <input 
                            type='text'
                            name='lname'
                            placeholder={ lname }
                        />
                    </fieldset>

                    <fieldset>
                        <label> First Name: </label>
                        <input 
                            type='text'
                            name='fname'
                            placeholder={ fname }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Phone: </label>
                        <input 
                            type='text'
                            name='phone'
                            placeholder={ phone }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Email: </label>
                        <input 
                            type='text'
                            name='email'
                            placeholder={ email }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Address: </label>
                        <input 
                            type='text'
                            name='address'
                            placeholder={ address }
                        />
                    </fieldset>
                </form>
            </div>
        );
    }
}