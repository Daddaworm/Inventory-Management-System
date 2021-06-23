// import React, { useState } from "react"

const FlipCardBack = (props) => {

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const qtyOrdered = e.target[0].value

            const ordersObj = {
                    item_number: props.item.item_number,
                    name: props.item.name,
                    description: props.item.description,
                    image_url: props.item.image_url,
                    price: props.item.price,
                    quantity_ordered: qtyOrdered
            }

            const configObj = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(ordersObj)
            };
        // Do the post and pass config Object as second parameter
        fetch("http://localhost:3000/orders", configObj)
        .then(res => res.json())
        .then(data => console.log('Success', data))
    
    }
    return (
        <div className="flip-card-back">
            <br/>
            <h3>Order Information</h3>
            <hr></hr>
            <p><b>{props.item.name}</b></p>
            <p><b>UPC:</b> {props.item.item_number}</p>
            <p><b>Price:</b> {props.item.price}</p>
            <p> <b>Current Inventory Onhand:</b> {props.item.onhand_quantity}</p>
            <br/>
            <form onSubmit={handleSubmit}>
                <select  className='select-value'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
                <input type='submit' value='Add to order' ></input>
            </form>
            <br/>
        </div>
    )
}
export default FlipCardBack