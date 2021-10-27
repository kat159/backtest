import React, { Component } from 'react'
import TableRow from './TableRow'

export default class Log extends Component {
    
    render() {
        const dataList = [
            ['2021-Oct-28', -50, 0.1, 50],
            ['2021-Jan-28', -70, 0.3, 70],
        ]
        return (
            <div>
                <table>
                <caption></caption>
                <thead>
                <tr>
                    <th>Test Date</th>
                    <th>Average Profit %</th>
                    <th>Sharpe Ratio</th>
                    <th>Max Drawdown %</th>
                </tr>
                </thead>

                <tbody>
                    {
                        dataList.map((data, i) => {
                            return <TableRow data={data} key={i} />
                        })
                    }
                </tbody>

            </table>
            </div>
        )
    }
}
