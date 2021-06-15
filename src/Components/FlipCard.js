import FlipCardBack from './FlipCardBack'
import FlipCardFront from './FlipCardFront'
import './flipcard.css'

const FlipCard = (props) => {

    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <FlipCardFront item={props.item}/>
                <FlipCardBack item={props.item} adjustQty={props.adjustQty} />
            </div>
        </div>
    )
}
export default FlipCard