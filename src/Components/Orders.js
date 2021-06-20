import React, { useEffect, useState } from 'react'
import OrderCard from './OrderCard'

const Orders = () => {

    const [order, setOrder] = useState([])

    const handleFetch = () => {
        const URL = 'http://localhost:3000/orders'
        fetch(URL)
            .then(resp => resp.json())
            .then(data => setOrder(data))
    }
    useEffect(handleFetch, [])

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h2>Current orders:</h2>
            {order.map(singleOrder => (
                <OrderCard order={singleOrder}/>
            ))}
        </div>
    )
}
export default Orders
