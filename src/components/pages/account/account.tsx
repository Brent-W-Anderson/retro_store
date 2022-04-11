
import { Component } from 'react';

export default class Account extends Component {
    state = {
        username: '',
        password: '',
        email: '',
        name: '',
        phone: '',
        address: '',
        birthday: ''

    }

    render() {
        return (
            <h3> ..show account specific information here (after a user has logged in).. </h3>
        );
    }
}