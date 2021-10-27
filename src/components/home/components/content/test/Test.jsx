import React, { Component } from 'react'
import MyNavLink from '../../nav_tab/MyNavLink'
import { Link } from 'react-router-dom'
import './test.css'

export default class Test extends Component {
    render() {
        return (
            <div>
                <form action="http://localhost:3000/search" method="GET">
                    <fieldset>
                        <div className="field">
                            <label>Strategy Name &nbsp;&nbsp;&nbsp;&nbsp;
                                <input type='text' name='?' />
                            </label>
                        </div>

                        <div className="field">
                            <label>Position Type &nbsp;&nbsp;&nbsp;&nbsp;
                                <select>
                                    <option>Long</option>
                                    <option>Short</option>
                                </select>
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend className='legend'>Position Opening</legend>
                        <div className="field">
                            <label className='select-box'><select>
                                <option>Closing Price</option>
                                <option>Opening Price</option>
                            </select></label>
                            <label className='select-box'><select>
                                <option>Higher than</option>
                                <option>Lower than</option>
                            </select></label>
                            <label className='select-box'><input type='number' defaultValue='100' >
                            </input>&nbsp;$</label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend className='legend'>Position Closing</legend>
                        <div className="field">
                            <label className='select-box'>Exit when&nbsp;<select>
                                <option>Closing Price</option>
                                <option>Opening Price</option>
                            </select></label>
                            <label className='select-box'><select>
                                <option>Higher than</option>
                                <option>Lower than</option>
                            </select></label>
                            <label className='select-box'><input type='number' defaultValue='100' >
                            </input>&nbsp;$</label>
                        </div>
                        <div className="field">
                            <label>Close position after &nbsp;&nbsp;
                                <input type='text' name='?' defaultValue='1' /> &nbsp;
                                trading days
                            </label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend className='legend'>Backtest Parameters</legend>
                        <div className="field">
                            <label>Initial Capital &nbsp;&nbsp;
                                <input type='number' name='?' defaultValue='100000' /> &nbsp;
                                $
                            </label>
                        </div>
                        <div className="field">
                            <label>Capital at Risk &nbsp;&nbsp;
                                <input type='text' name='?' defaultValue='5' /> &nbsp;
                                % of capital
                            </label>
                        </div>
                        <div className="field">
                            <label>Commission &nbsp;&nbsp;
                                <input type='text' name='?' defaultValue='0.08' /> &nbsp;
                                % of open position
                            </label>
                        </div>
                        <div className="field">
                            <label>Bid-Ask Spread &nbsp;&nbsp;
                                <input type='text' name='?' defaultValue='0.02' /> &nbsp;
                                $
                            </label>
                        </div>
                        <div className="field">
                            <label>Testing Time Period &nbsp;&nbsp;
                                <input type='date' name='?' defaultValue='2020-Jan-1' /> &nbsp;
                                to &nbsp;
                                <input type='date' name='?' defaultValue='2021-Jan-1' />
                            </label>
                        </div>
                    </fieldset>
                </form>
                <Link className='btn btn-info' style={{marginLeft: '20px'}} to='/test-report'>Run Test</Link>
            </div>
        )
    }
}
