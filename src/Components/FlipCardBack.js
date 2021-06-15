import React, { useState } from "react"



const FlipCardBack = (props) => {


    const [orderQty, setOrderQty] = useState('')

    const handleOrder = (e) => {
        e.preventDefault()
        const qtyOrdered = e.target[0].value
        setOrderQty(qtyOrdered)
        // console.log(qtyOrdered)

        // build your data Object to pass to the config object
            const ordersObj = {
                    item_number: props.item.item_number,
                    name: props.item.name,
                    description: props.item.description,
                    image_url: props.item.image_url,
                    quantity_ordered: qtyOrdered
            }
        // build config object and pass data Object into the body
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
        .then(data => console.log(data))
    }


    const handleClick = (e) => {
        e.preventDefault()
        const value = e.target.value
        console.log(value);
        props.adjustQty(value, props.item.item_number)
    }

    



    return (
        <div className="flip-card-back">
            <br/>
            <h3>Order Information</h3>
            <hr></hr>
            <p>{props.item.name}</p>
            <p>UPC {props.item.item_number}</p>
            <p>Price {props.item.price}</p>
            <br/>
            <p> Current Onhand Qty {props.item.onhand_quantity}</p>
            <br/>
            <form onSubmit={handleOrder}>
                <select>
                    <option value='1' name='qty'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                </select>
                <input type='submit' value='Add to order' ></input>
            </form>
            <br/>
        
            <form>
                <h4>Adjust Inventory</h4>
                <button onClick={handleClick} value='-'> - </button>
                <span> 0 </span>
                <button onClick={handleClick} value='+'> + </button>
            </form>
        </div>
    )
}

export default FlipCardBack