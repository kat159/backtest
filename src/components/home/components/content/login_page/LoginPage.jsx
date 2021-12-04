import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class LoginPage extends Component {

    state = {
        UsernameExist: false,
        invalidUsername: false,
        invalidPassword: false,
        successSignUp: false,
    }

    userData = {username: '', password: ''}

    handleKeyUp = (event) => {
        const {target} = event
        const {name} = target
        this.userData[name] = target.value
        console.log(this.userData)
    }
    
    login = () => {
        // console.log(this.password.value)
        // console.log(this.username.value)
        axios.defaults.baseURL = 'http://127.0.0.1:3000';
        axios({
            method: 'get',
            url: '/login',
            params: this.userData,
        }).then(
            res => {
                console.log(res);
                if (res.data === 'success') { // 登录成功
                    this.setState({invalidPassword: false, invalidUsername: false, UsernameExist: false, successSignUp: false})
                    PubSub.publish('login_status', {loggedIn: true, username: this.userData.username});
                    this.props.history.push('/test');
                } else if (res.data === 'password incorrect') { // 密码错误
                    this.setState({invalidUsername: false, invalidPassword: true, UsernameExist: false, successSignUp: false});
                } else { // 用户名不存在
                    this.setState({invalidUsername: true, invalidPassword: false, UsernameExist: false, successSignUp: false})
                }
                console.log(this.state)
            },
        )
    }

    signUp = () => {
        axios.defaults.baseURL = 'http://127.0.0.1:3000';
        axios({
            method: 'get',
            url: '/signup',
            params: this.userData,
        }).then(
            res => {
                console.log(res);
                if (res.data === true) { // 注册成功
                    this.setState({successSignUp: true, invalidPassword: false, invalidUsername:false, UsernameExist: false});
                } else {
                    this.setState({UsernameExist: true, successSignUp: false, invalidPassword: false, invalidUsername:false, })
                }
                console.log(this.state)
            },
        )
    }

    render() {
        return (
            <div>
                <form action='/login' method='post' id='loginForm'>
                    <div className="field">
                        <label>Username: &nbsp;&nbsp;&nbsp;&nbsp;
                            <input ref={c => this.username = c} onKeyUp={this.handleKeyUp} type='text' name='username' />
                            {
                                this.state.UsernameExist ? <span> Username exists ! </span> : 
                                this.state.invalidUsername ? <span> Username not exists !</span> : <span></span>
                            }
                        </label>
                    </div>
                    <div className="field">
                        <label>Password: &nbsp;&nbsp;&nbsp;&nbsp;
                            <input ref={c => this.password = c} onKeyUp={this.handleKeyUp} type='text' name='password' />
                            {
                                this.state.invalidPassword ? <span> Incorrect password ! </span> : <span></span>
                            }
                        </label>
                    </div>
                    <button onClick={this.login} className='btn btn-info' style={{ marginLeft: '20px' }} type='button' id='username' >login</button>
                    <button onClick={this.signUp} className='btn btn-info' style={{ marginLeft: '20px' }} type='button' id='password' >sign up</button>
                    <br />
                    {
                        this.state.successSignUp ? <div>'sign up successfully!'</div> : <div></div>
                    }
                </form>
                
                {/* <Link className='btn btn-info' style={{ marginLeft: '20px' }} to='/test'>Login</Link> */}
            </div>
        )
    }
}
