import React, { Component, useEffect, useState } from 'react' 
import OrderCard from './OrderCard'



const OrderInventory = () => {


const [orders, setOrders] = useState([])

const handleFetch = () => {
    const URL = 'http://localhost:3000/orders'
    fetch(URL)
    .then(resp => resp.json())
    .then(data => setOrders(data))
}
useEffect(handleFetch, [])

    
        return(
            <div>
                <h1>Current orders{orders.name}</h1>
                
            </div>
        )
}

export default OrderInventory
