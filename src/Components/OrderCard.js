import React, { Component } from 'react'

const OrderCard = (props) => {

    return (
        <div className='orders-div'>
            <table class="users">
                <thead>
                    <tr>
                        <th class="row-1 row-ID">Invoice</th>
                        <th class="row-2 row-name">Item</th>
                        <th class="row-3 row-description">Description</th>
                        <th class="row-4 row-qty">Order Qty</th>
                        <th class="row-5 row-price">Price</th>
                        <th class="row-6 row-image">Image</th>
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
                            <img src={props.order.image_url} className='order-image'/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default OrderCard