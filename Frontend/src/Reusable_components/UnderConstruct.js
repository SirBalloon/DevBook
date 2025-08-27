import "../CSS/UnderConstruct.css"
import ConstructionSign from "../images/construction.svg"

const Construction = () => {
    return (
        <div className="ConstructionDiv">
            <img src={ConstructionSign} alt="construction" className="ConstructIcon"/>
            <h1 className="MessageHeader">UNDER CONSTRUCTION</h1>
            <div className="MessageSubtitle">
                <p>To be released soon.</p>
            </div>
        </div>
    )
}

export default Construction