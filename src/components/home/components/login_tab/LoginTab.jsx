import React, { Component } from 'react'
import MyNavLink from '../nav_tab/MyNavLink'

export default class LoginTab extends Component {
    render() {
        return (
            <div>
                <MyNavLink to='/login'>login</MyNavLink>
                <span> / </span>
                <MyNavLink to='/login'>sign up</MyNavLink>
            </div>
        )
    }
}
