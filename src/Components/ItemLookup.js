import { useState, useEffect } from 'react'
import FlipCard from './FlipCard'
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

    // how to capture value of input and set state
    const handleSearch = (e) => {
        const value = e.target.value
        setItemNum(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const itemObj = items.find(item => {
            return itemNum === item.item_number
        })
        setItem(itemObj)
    }

        return (
            <div className='item-lookup'>
                <form className="submit-form" onSubmit={handleSubmit}>
                    <h5>To find an item, please enter a valid barcode number</h5>
                    <p>Sample barcode number: 086216105210,  041333703640,  600603216237</p>
                    <input type='text' placeholder='Search by UPC' onChange={handleSearch} value={itemNum}></input>
                    <input type='submit' ></input>
                </form>
                <br/>
                <FlipCard item={item} />
            </div>
        )
}
export default ItemLookup