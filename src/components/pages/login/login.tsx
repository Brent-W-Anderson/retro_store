
import React from 'react';
import { Component } from 'react';

export default class Login extends Component<{ setAccountInfo: Function, selectActivePage: Function }> { 
    state = {
        display: 'login',
        frontend: {
            login: {
                username: '',
                password: ''
            },
            create: {
                username: '',
                password: '',
                email: '',
                fname: '',
                lname: '',
                phone: '',
                address: ''
            }
        },
        data: {
            login: {
                username: '',
                password: ''
            },
            create: {
                username: '',
                password: '',
                email: '',
                fname: '',
                lname: '',
                phone: '',
                address: ''
            }
        }
    }

    iframeData = React.createRef<HTMLIFrameElement>();

    // for login part
    checkData = () => {
        const { setAccountInfo, selectActivePage } = this.props;
        const loginData = this.iframeData.current?.contentWindow?.document.getElementById( 'login_data' );
    
        if( loginData?.textContent && loginData.textContent !== '' ) {
           const txt = loginData.textContent;

           let userData = txt.split(",").map( item => {
            return item.trim();
           } );

           if( userData.length > 0 ) {
                setAccountInfo( userData );
                selectActivePage( 'account' );
           }
    
           return true;
        }
    
        return false;
    }

    dataSearch = () => {
        const dataSearch = setInterval( () => { // keep checking the DOM every .25s until we have our data
            if( this.checkData() ) clearInterval( dataSearch ); // if we receive some data, stop checking for data
        }, 250 );
    }

    handleUsername = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: {
                    username: e.target.value,
                    password: frontend.login.password
                },
                create: frontend.create
            },
            data: {
                login: {
                    username: e.target.value,
                    password: data.login.password
                },
                create: data.create
            }
        });
    }

    handlePassword = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: {
                    username: frontend.login.username,
                    password: e.target.value
                },
                create: frontend.create
            },
            data: {
                login: {
                    username: data.login.username,
                    password: e.target.value
                },
                create: data.create
            }
        });
    }

    handleNewUsername = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: frontend.login,
                create: {
                    username: e.target.value,
                    password: frontend.create.password,
                    email: frontend.create.email,
                    fname: frontend.create.fname,
                    lname: frontend.create.lname,
                    phone: frontend.create.phone,
                    address: frontend.create.address
                }
            },
            data: {
                login: frontend.login,
                create: {
                    username: e.target.value,
                    password: data.create.password,
                    email: data.create.email,
                    fname: data.create.fname,
                    lname: data.create.lname,
                    phone: data.create.phone,
                    address: data.create.address
                }
            }
        });
    }

    handleNewPassword = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: frontend.login,
                create: {
                    username: data.create.username,
                    password: e.target.value,
                    email: frontend.create.email,
                    fname: frontend.create.fname,
                    lname: frontend.create.lname,
                    phone: frontend.create.phone,
                    address: frontend.create.address
                }
            },
            data: {
                login: frontend.login,
                create: {
                    username: data.create.username,
                    password: e.target.value,
                    email: data.create.email,
                    fname: data.create.fname,
                    lname: data.create.lname,
                    phone: data.create.phone,
                    address: data.create.address
                }
            }
        });
    }

    handleEmail = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: frontend.login,
                create: {
                    username: frontend.create.username,
                    password: frontend.create.password,
                    email: e.target.value,
                    fname: frontend.create.fname,
                    lname: frontend.create.lname,
                    phone: frontend.create.phone,
                    address: frontend.create.address
                }
            },
            data: {
                login: frontend.login,
                create: {
                    username: data.create.username,
                    password: data.create.password,
                    email: e.target.value,
                    fname: data.create.fname,
                    lname: data.create.lname,
                    phone: data.create.phone,
                    address: data.create.address
                }
            }
        });
    }

    handleFName = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: frontend.login,
                create: {
                    username: frontend.create.username,
                    password: frontend.create.password,
                    email: frontend.create.email,
                    fname: e.target.value,
                    lname: frontend.create.lname,
                    phone: frontend.create.phone,
                    address: frontend.create.address
                }
            },
            data: {
                login: frontend.login,
                create: {
                    username: data.create.username,
                    password: data.create.password,
                    email: data.create.email,
                    fname: e.target.value,
                    lname: data.create.lname,
                    phone: data.create.phone,
                    address: data.create.address
                }
            }
        });
    }

    handleLName = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: frontend.login,
                create: {
                    username: frontend.create.username,
                    password: frontend.create.password,
                    email: frontend.create.email,
                    fname: frontend.create.fname,
                    lname: e.target.value,
                    phone: frontend.create.phone,
                    address: frontend.create.address
                }
            },
            data: {
                login: frontend.login,
                create: {
                    username: data.create.username,
                    password: data.create.password,
                    email: data.create.email,
                    fname: frontend.create.fname,
                    lname: e.target.value,
                    phone: data.create.phone,
                    address: data.create.address
                }
            }
        });
    }

    handlePhone = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: frontend.login,
                create: {
                    username: frontend.create.username,
                    password: frontend.create.password,
                    email: frontend.create.email,
                    fname: frontend.create.fname,
                    lname: frontend.create.lname,
                    phone: e.target.value,
                    address: frontend.create.address
                }
            },
            data: {
                login: frontend.login,
                create: {
                    username: data.create.username,
                    password: data.create.password,
                    email: data.create.email,
                    fname: frontend.create.fname,
                    lname: frontend.create.lname,
                    phone: e.target.value,
                    address: data.create.address
                }
            }
        });
    }

    handleAddress = ( e:React.ChangeEvent<HTMLInputElement> ) => {
        const { frontend, data } = this.state;

        this.setState({
            frontend: {
                login: frontend.login,
                create: {
                    username: frontend.create.username,
                    password: frontend.create.password,
                    email: frontend.create.email,
                    fname: frontend.create.fname,
                    lname: frontend.create.lname,
                    phone: frontend.create.phone,
                    address: e.target.value
                }
            },
            data: {
                login: frontend.login,
                create: {
                    username: data.create.username,
                    password: data.create.password,
                    email: data.create.email,
                    fname: frontend.create.fname,
                    lname: frontend.create.lname,
                    phone: data.create.phone,
                    address: e.target.value
                }
            }
        });
    }

    clearFrontendValues = () => {
        this.setState({
            frontend: {
                login: {
                    username: '',
                    password: ''
                },
                create: {
                    username: '',
                    password: '',
                    email: '',
                    fname: '',
                    lname: '',
                    phone: '',
                    address: ''
                }
            }
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
        const { frontend, data, display } = this.state;

        if( display === 'login' ) {
            return (
                <form
                    method='POST'
                    action='./index.php'
                    target='login_iframe'
                    className='page'
                    onSubmit={ this.clearFrontendValues }
                >
                    { this.toggleDisplay() }
                    <h3> Enter username & password: </h3>
    
                    <fieldset>
                        <label> Username: </label>
                        <input id='username'
                            type='text'
                            value={ frontend.login.username }
                            onChange={ this.handleUsername }
                            required
                        />
                    </fieldset>
    
                    <fieldset>
                        <label> Password: </label>
                        <input id='password'
                            type='text'
                            value={ frontend.login.password }
                            onChange={ this.handlePassword }
                            required
                        />
                    </fieldset>

                    <fieldset style={{ display: 'none' }}>
                        <fieldset>
                            <label> Username: </label>
                            <input id='username'
                                type='text'
                                name='username'
                                value={ data.login.username }
                                onChange={ this.handleUsername }
                                required
                            />
                        </fieldset>
        
                        <fieldset>
                            <label> Password: </label>
                            <input id='password'
                                type='text'
                                name='password'
                                value={ data.login.password }
                                onChange={ this.handlePassword }
                                required
                            />
                        </fieldset>
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
        const { frontend, data, display } = this.state;

        if( display === 'create' ) {
            return (
                <form 
                    id='user_info' 
                    className='page'
                    method='POST'
                    action='./index.php'
                    target='login_iframe'
                    style={{ gridTemplateColumns: '300px 300px' }}
                >
                    { this.toggleDisplay() }
                    <h3> Create an account: </h3>

                    <fieldset>
                        <label> Username: </label>
                        <input 
                            type='text'
                            value={ frontend.create.username }
                            onChange={ this.handleNewUsername }
                            required
                        />
                    </fieldset>
                    
                    <fieldset>
                        <label> Password: </label>
                        <input 
                            type='text'
                            value={ frontend.create.password }
                            onChange={ this.handleNewPassword }
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label> Email: </label>
                        <input 
                            type='text'
                            value={ frontend.create.email }
                            onChange={ this.handleEmail }
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label> First Name: </label>
                        <input 
                            type='text'
                            value={ frontend.create.fname }
                            onChange={ this.handleFName }
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label> Last Name: </label>
                        <input 
                            type='text'
                            value={ frontend.create.lname }
                            onChange={ this.handleLName }
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label> Phone: </label>
                        <input 
                            type='text'
                            value={ frontend.create.phone }
                            onChange={ this.handlePhone }
                            required
                        />
                    </fieldset>

                    <fieldset>
                        <label> Address: </label>
                        <input 
                            type='text'
                            value={ frontend.create.address }
                            onChange={ this.handleAddress }
                            required
                        />
                    </fieldset>

                    <fieldset style={{ display: 'none' }}>
                        <fieldset>
                            <label> Username: </label>
                            <input 
                                type='text'
                                name='new_username'
                                value={ data.create.username }
                                onChange={ this.handleNewUsername }
                                required
                            />
                        </fieldset>

                        <fieldset>
                            <label> Password: </label>
                            <input 
                                type='text'
                                name='new_password'
                                value={ data.create.password }
                                onChange={ this.handleNewPassword }
                                required
                            />
                        </fieldset>
    
                        <fieldset>
                            <label> Email: </label>
                            <input 
                                type='text'
                                name='email'
                                value={ data.create.email }
                                onChange={ this.handleEmail }
                                required
                            />
                        </fieldset>
    
                        <fieldset>
                            <label> First Name: </label>
                            <input 
                                type='text'
                                name='fname'
                                value={ data.create.fname }
                                onChange={ this.handleFName }
                                required
                            />
                        </fieldset>

                        <fieldset>
                            <label> Last Name: </label>
                            <input 
                                type='text'
                                name='lname'
                                value={ data.create.lname }
                                onChange={ this.handleLName }
                                required
                            />
                        </fieldset>
    
                        <fieldset>
                            <label> Phone: </label>
                            <input 
                                type='text'
                                name='phone'
                                value={ data.create.phone }
                                onChange={ this.handlePhone }
                                required
                            />
                        </fieldset>
    
                        <fieldset>
                            <label> Address: </label>
                            <input 
                                type='text'
                                name='address'
                                value={ data.create.address }
                                onChange={ this.handleAddress }
                                required
                            />
                        </fieldset>
                    </fieldset>

                    <fieldset className='button'>
                        <button type='submit' onClick={this.dataSearch}> Submit </button>
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
                <iframe ref={ this.iframeData } name='login_iframe' style={{ display: 'none' }} />
            </div>
        );
    }
}

