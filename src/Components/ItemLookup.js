//This will be the home page

import { useState, useEffect } from 'react'
import FlipCard from './FlipCard'
import OrderInventory from './OrderInventory'
import OrderCard from './OrderCard'
import AdjustInventory from './AdjustInventory'

const ItemLookup = () =>  {

    const [items, setItems] = useState([])

    const useEffect = (e) => {
        e.preventDefault()
        const URL = 'http://localhost:3000/items'
        fetch(URL)
        .then(response => response.json())
        .then(data => setItems(data))
    }
    // useEffect(handleFetch)


    // const [item, setItem] = useState({})
    // const [upc, setUpc] = useState('')

    //how to capture value of input and set state
    // const handleSearch = (e) => {
    //     const value = e.target.value
    //     setUpc(value)
    // }

    // const handleFetch = (e) => {
    //     // console.log(e)
    //     e.preventDefault()
    //     const apiKey1 = 'DD60F606772ACED1296B5D968B8C147A';
    //     const apiKey2 = '1320F70F291D90AB3FE03ACDC1543E29'
    //     const upcSample = '0079184380048'
    //     const URL = `product/${upc}?apikey=${apiKey1}`;
    //     fetch(URL)
    //         .then(resp => resp.json())
    //         .then(data => setItem(data))
    //         .catch(error => console.log(error))
    // }
    
    

        return (
            <div className='item-lookup'>
                <h3>Welcome to Inventory Management System</h3>
                <form className="submit-form" onSubmit={useEffect}>
                    <h5>To find an item, please enter a valid barcode number</h5>
                    <p>Sample barcode number: 086216105210</p>
                    <input type='text' placeholder='Search by a UPC'  ></input>
                    <input type='submit' ></input>
                </form>
                <FlipCard items={items}/>
            </div>
        )
}

export default ItemLookup