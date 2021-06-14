import React from 'react'


const FlipCardFront = (props) => {


    const handleOrder = () => {

    }


    


    return (
        <div className="flip-card-front">
            {/* <img src="img_avatar.png" alt="Avatar" style={{ width: 300, height: 300 }} /> */}
            <h3>Item Information</h3>
            <hr></hr>
            <h5>Item: </h5>
            <p>{props.item.name}</p>
            <h5>UPC Number: </h5>
            <p>{props.item.item_number}</p>
            <h5>Item Description: </h5>
            <p>{props.item.description}</p>
            <h5>MSRP: </h5>
            <p>{props.item.price}</p>
            {/* <div className='card-image-div'> */}
            <img src={props.item.image_url} alt=''  className='image-style'/>
            {/* </div> */}
        </div>
    )
}

export default FlipCardFront