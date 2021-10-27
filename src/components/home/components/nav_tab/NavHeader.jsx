import React, { Component } from 'react'
import LoginTab from '../login_tab/LoginTab'
import MyNavLink from './MyNavLink'

export default class NavHeader extends Component {
    render() {
        return (
            <div className='nav-header'>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink className="list-group-item" to='/test' >Strategy Test</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink className="list-group-item" to='/log' >Backtest Log</MyNavLink>
                    </li>
                </ul>
                <LoginTab />
            </div>
        )
    }
}
