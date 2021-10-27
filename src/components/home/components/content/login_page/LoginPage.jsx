import React, { Component } from 'react'
import { Link } from 'react-router-dom'
 
export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <div className="field">
                    <label>Username: &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='text' name='?' />
                    </label>
                </div>
                <div className="field">
                    <label>Password: &nbsp;&nbsp;&nbsp;&nbsp;
                        <input type='text' name='?' />
                    </label>
                </div>
                <Link className='btn btn-info' style={{marginLeft: '20px'}} to='/test'>Login</Link>
            </div>
        )
    }
}
