import React, { Component } from 'react'
import TableRow from './TableRow'
import { Link } from 'react-router-dom'

export default class TestReport extends Component {
    render() {
        const dataList = [
            ['Anualized Return, %', -70],
            ['Sharpe Ratio', 0],
            ['Winners Profit', 0],
        ]
        return (
            <div>
                <h2>TEST REPORT</h2>
                <div className='my-fieldset'>
                    <div className='my-fieldset-content'>
                        <div>Anualized Return % &nbsp;&nbsp; -70</div>
                        <div>Sharpe Ratio &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0.1</div>
                        <div>Winners Profit % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;70</div>
                        <div>Losers Profit % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-70</div>
                        <div>Max Drawdown % &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 100</div>
                        {/* {
                        dataList.map((data, i) => {
                            return <TableRow data={data} key={i} />
                        })
                    } */}
                    </div>
                </div>
                <Link className='btn btn-info test-report-btn' style={{marginLeft: '20px'}} to='/test'>Return to Test Page</Link>
            </div>
        )
    }
}
