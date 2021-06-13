import React from 'react'


const UpcCard = (props) => {


    return(
        <div className='card-container'>
            <div className='card-div'>
                <hr></hr>
                <h6>Item: </h6>
                    <p>{props.item.title}</p>
                <h6>UPC Number: </h6>
                    <p>{props.item.barcode}</p>
                <h6>Item Description: </h6>
                    <p>{props.item.description}</p>
                <h6>MSRP: </h6>
                    <p>{props.item.msrp}</p>
                <h6>Image: </h6> 
                    <p>{props.item.images}</p>
                <h6>Manufacturer: </h6>
                    <p>{props.item.manufacturer}</p>
                <h6>Brand: {props.item.brand}</h6>
            </div>
        </div>
    )

}
export default UpcCard