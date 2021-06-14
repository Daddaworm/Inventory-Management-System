import { useState, useEffect} from 'react'





const AdjustInventory = (props) => {



    // useEffect(() => {
    //     fetch('http://localhost:3000/orders')
    //     .then(resp => resp.json())
    //     .then(data => console.log(data))
    // })

    return(
        <div className='adjust-div'>
            <h1>Adjust Inventory</h1>

            <form>
                <input type='text' placeholder='Enter upc to adjust'></input>
                <input type='submit' name='submit' ></input>
            </form>
            <button> <h1> - </h1> </button>
            <span>0</span>
            <button> <h1> + </h1></button>
        </div>
    )

}

export default AdjustInventory