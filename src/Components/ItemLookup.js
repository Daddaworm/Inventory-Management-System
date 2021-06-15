//This will be the home page

import { useState, useEffect } from 'react'
import FlipCard from './FlipCard'
import OrderInventory from './OrderInventory'
import OrderCard from './OrderCard'
import AdjustInventory from './AdjustInventory'
import { render } from '@testing-library/react'

const ItemLookup = () =>  {

    const [items, setItems] = useState([])
    const [itemNum, setItemNum] = useState('') // item number user input in text
    const [item, setItem] = useState({}) // obj to pass as props

    const handleFetch = (e) => {
        // e.preventDefault()
        const URL = 'http://localhost:3000/items'
        fetch(URL)
        .then(resp => resp.json())
        .then(data => setItems(data))
    }
    useEffect(handleFetch , [])

    // const [item, setItem] = useState({})
    // const [upc, setUpc] = useState('')

    // how to capture value of input and set state
    const handleSearch = (e) => {
        const value = e.target.value
        setItemNum(value)
    }

    const handleSubmit = (e) => {
        //go inside items
        e.preventDefault()
        const itemObj = items.find(item => {
            return itemNum === item.item_number
        })
        setItem(itemObj)
    }

    
    const adjustQty = (char, num ) => {
        console.log(char, num)
        //if char === '-' go inside items in state, into the item that matches the itemNum, and decrement qty
        let newItems;
        if(char === '-') {
            newItems = items.map(item => {
                return (num === item.item_number) ? {...item ,onhand_quantity: item.onhand_quantity - 1} : item
            })
            setItems(newItems)
        }
        console.log(newItems)

        //if char === '+' go inside items in state, into the item that matches the itemNum, and increment qty

    }

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
                {/* <h3>Welcome to Inventory Management System</h3> */}
                <form className="submit-form" onSubmit={handleSubmit}>
                    <h5>To find an item, please enter a valid barcode number</h5>
                    <p>Sample barcode number: 086216105210</p>
                    <input type='text' placeholder='Search by UPC' onChange={handleSearch} value={itemNum}></input>
                    <input type='submit' ></input>
                </form>
                <FlipCard item={item} adjustQty={adjustQty}/>
            </div>
        )
}

export default ItemLookup