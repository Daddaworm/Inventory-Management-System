import FlipCardBack from './FlipCardBack'
import FlipCardFront from './FlipCardFront'
import './flipcard.css'




const FlipCard = (props) => {

    const handleOrder = (e) => {
        e.preventDefault()
        let quantity = e.target.children[0].value
    }



    return (

        // <div className='card-container'>
        //     <div className='card-div'>
        //         <hr></hr>
        //         <h6>Item: </h6>
        //         <p>{props.item.title}</p>
        //         <h6>UPC Number: </h6>
        //         <p>{props.item.barcode}</p>
        //         <h6>Item Description: </h6>
        //         <p>{props.item.description}</p>
        //         <h6>MSRP: </h6>
        //         <p>{props.item.msrp}</p>
        //         <h6>Image: </h6>
        //         <p>{props.item.images}</p>
        //         <form onSubmit={handleOrder}>
        //             <select>
        //                 <option value='1' placeholder='qty'>1</option>
        //                 <option value='2'>2</option>
        //                 <option value='3'>3</option>
        //                 <option value='4'>4</option>
        //                 <option value='5'>5</option>
        //                 <option value='6'>6</option>
        //             </select>
        //         <input type='submit'value='Add to order' ></input>

        //         </form>
        //     </div>
        //     <FlipCardFront />
        //     <FlipCardBack />
        // </div>

        <div class="flip-card">
            <div class="flip-card-inner">
                <FlipCardFront item={props.item}/>
                <FlipCardBack item={props.item} adjustQty={props.adjustQty} />
            </div>
        </div>
    )

}
export default FlipCard