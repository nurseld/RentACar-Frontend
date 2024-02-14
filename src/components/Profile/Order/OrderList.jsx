import React from 'react'
import './order-list.css'

function OrderList() {
    return (
        <div className='order-container'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Kiralama No</th>
                        <th scope="col">Plate Number </th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Return Date</th>
                        <th scope="col">Total Price </th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>59ND059</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td></td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td></td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td></td>
                        <td>@mdo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default OrderList