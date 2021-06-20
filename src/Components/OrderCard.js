// import React, { Component } from 'react'

const OrderCard = (props) => {

    return (
        <div className='orders-div'>
            <table className="users">
                <thead>
                    <tr>
                        <th className="row-1 row-ID">Invoice</th>
                        <th className="row-2 row-name">Item</th>
                        <th className="row-3 row-description">Description</th>
                        <th className="row-4 row-qty">Order Qty</th>
                        <th className="row-5 row-price">Price</th>
                        <th className="row-6 row-image">Image</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.order.id}</td>
                        <td>{props.order.name}</td>
                        <td>{props.order.description}</td>
                        <td>{props.order.quantity_ordered}</td>
                        <td>{props.order.price}</td>
                        <td >
                            <img src={props.order.image_url} alt='' className='order-image'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default OrderCard