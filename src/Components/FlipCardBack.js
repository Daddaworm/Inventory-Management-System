import React from "react"



const FlipCardBack = (props) => {

    const handleOrder = (e) => {
        e.preventDefault()
    }



    



    return (
        <div className="flip-card-back">
            <br/>
            <h3>Order Information</h3>
            <hr></hr>
            <p>{props.items.name}</p>
            <p>UPC {props.items.item_number}</p>
            <p>{props.items.description}</p>
            <p>msrp {props.items.price}</p>
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
                <button><h1>-</h1></button>
                <span> 0 </span>
                <button><h1> + </h1></button>
            </form>
        </div>
    )
}

export default FlipCardBack