import FlipCardBack from './FlipCardBack'
import FlipCardFront from './FlipCardFront'
import './flipcard.css'

const FlipCard = (props) => {

    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <FlipCardFront item={props.item}/>
                <FlipCardBack item={props.item} />
            </div>
        </div>
    )
}
export default FlipCard