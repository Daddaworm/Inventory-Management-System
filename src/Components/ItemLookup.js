import { useState, useEffect } from 'react'
import FlipCard from './FlipCard'


const ItemLookup = () =>  {

    const [itemsArray, setItemsArray] = useState([]) //Data returned from fetch
    const [upcSearch, setUpcSearch] = useState('') // item number user input in text
    const [singleItem, setSingleItem] = useState({}) // obj to pass as props

    const handleFetch = (e) => {
        // e.preventDefault()
        const URL = 'http://localhost:3000/items'
        fetch(URL)
        .then(resp => resp.json())
        .then(data => setItemsArray(data))
    }
    useEffect(handleFetch , [])

    // how to capture value of input and set state
    const handleSearch = (e) => {
        const value = e.target.value
        setUpcSearch(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const item = itemsArray.find(item => {
            return upcSearch === item.item_number
        })
        setSingleItem(item)
    }

        return (
            <div className='item-lookup'>
                <form className="submit-form" onSubmit={handleSubmit}>
                    <br/>
                    <h5>To find an item, please enter a valid barcode number</h5>
                    <p>Sample barcode number: 086216105210,  041333703640,  600603216237</p>
                    <input type='text' placeholder='Search by UPC' onChange={handleSearch} value={upcSearch}></input>
                    <input type='submit' ></input>
                </form>
                <br/>
                <FlipCard item={singleItem} />
            </div>
        )
}
export default ItemLookup