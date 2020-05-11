import React, { Component } from 'react';
import axios from '../../axios';

class SignupController extends Component {

    state = {
        form: {
            email: "Julien@julien.com",
            first_name: "Julien",
            last_name: "Hosri",
            password: "shikablaka",
            username: "shikablaka",
            token: "27ae1661ee67051b1a7cde4d78b0106a0c09b52b"
        }
    }

    componentDidMount() {
        // axios.post('account/register/', this.state.form)
        //     .then(res => {
        //         console.log(res)
        //     })
        //     .catch(err => {
        //         console.log("err")
        //         console.log(err.response)
        //     })
        const login = {
            password: "shikablaka",
            username: "Julien@julien.com",
            // email: "Julien@julien.com",
        }
        axios.post('account/login/', login)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log("err")
                console.log(err.response)
            })

    }

    render () {
        return (
            <div></div>
        );
    }
}

export default SignupController;