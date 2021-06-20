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

    const renderOrderCard = () => {
        return order.map(singleOrder => {
            return <OrderCard order={singleOrder} key={singleOrder.id} />
        })
    }



    return (
        <div>
            <br/>
            <br/>
            <br/>
            <h2>Current orders:</h2>
            {renderOrderCard()}
            {/* {order.map(singleOrder => (
                <OrderCard order={singleOrder} key={singleOrder.id}/>
            ))} */}
        </div>
    )
}
export default Orders
