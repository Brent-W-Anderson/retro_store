
import { Component } from 'react';

export default class Account extends Component<{ accountInfo:string[] }> {
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
    
    render() {
        const { user, pass, email, fname, lname, phone, address } = this.state;

        return (
            <div id="account" className="page">
                <h3>
                    Hello { fname } { lname }, welcome to Retro-Retro!
                </h3>

                <form
                    method='POST'
                    action='./index.php'
                    target='account_iframe'
                >
                    <h3> Account Info: </h3>

                    {/* PRESENTATION DATA */}
                    <fieldset>
                        <label> Password: </label>
                        <input 
                            type='text'
                            placeholder={ pass }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Username: </label>
                        <input 
                            type='text'
                            placeholder={ user }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Last Name: </label>
                        <input 
                            type='text'
                            placeholder={ lname }
                        />
                    </fieldset>

                    <fieldset>
                        <label> First Name: </label>
                        <input 
                            type='text'
                            placeholder={ fname }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Phone: </label>
                        <input 
                            type='text'
                            placeholder={ phone }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Email: </label>
                        <input 
                            type='text'
                            placeholder={ email }
                        />
                    </fieldset>

                    <fieldset>
                        <label> Address: </label>
                        <input 
                            type='text'
                            placeholder={ address }
                        />
                    </fieldset>

                    {/* DATA FOR BACKEND */}
                    <fieldset style={{ display: 'none' }}>
                        <fieldset>
                            <label> Password: </label>
                            <input 
                                type='text'
                                name='update_password'
                                defaultValue={ pass }
                            />
                        </fieldset>

                        <fieldset>
                            <label> Username: </label>
                            <input 
                                type='text'
                                name='update_username'
                                defaultValue={ user }
                            />
                        </fieldset>

                        <fieldset>
                            <label> Last Name: </label>
                            <input 
                                type='text'
                                name='update_lname'
                                defaultValue={ lname }
                            />
                        </fieldset>

                        <fieldset>
                            <label> First Name: </label>
                            <input 
                                type='text'
                                name='update_fname'
                                defaultValue={ fname }
                            />
                        </fieldset>

                        <fieldset>
                            <label> Phone: </label>
                            <input 
                                type='text'
                                name='update_phone'
                                defaultValue={ phone }
                            />
                        </fieldset>

                        <fieldset>
                            <label> Email: </label>
                            <input 
                                type='text'
                                name='update_email'
                                defaultValue={ email }
                            />
                        </fieldset>

                        <fieldset>
                            <label> Address: </label>
                            <input 
                                type='text'
                                name='update_address'
                                defaultValue={ address }
                            />
                        </fieldset>
                    </fieldset>

                    <fieldset className='button'>
                        <button type='submit'> Update </button>
                    </fieldset>
                </form>

                <iframe name='account_iframe' style={{ display: 'none' }} />
            </div>
        );
    }
}