import "../CSS/InfoBubble.css"
import { motion } from "motion/react";

const InfoBubble = ({ InfoData , onReset }) =>{
    return(
        <div className="PC_container">
            <div className="InfoGrid">
                <motion.div className="InfoHeader">
                    <h1 className="ProjName">{InfoData.title}</h1>
                </motion.div>
                <motion.div className="DescriptInfo">
                    <h3 className="InfoHeadings">Summary</h3>
                    <p className="InfoText">{InfoData.Summary}</p>
                </motion.div>
                <motion.div className="ReleaseInfo">
                    <h3 className="InfoHeadings">Releases</h3>
                    <p className="InfoText">{InfoData.ReleaseInfo}</p>
                </motion.div>
                <motion.div className="TechStackInfo">
                    <h3 className="InfoHeadings">TechStack</h3>
                    <p className="InfoText">{InfoData.TechStack}</p>
                </motion.div>
                <motion.div className="ExtraInfo">
                    <motion.div className="InfoBubble">
                        <h4 className="InfoHeadings">Progress</h4>
                        <p className="InfoText">{InfoData.Progress}</p>
                    </motion.div>
                    <motion.div className="InfoBubble">
                        <h5 className="InfoHeadings">Dates</h5>
                        <p className="InfoText">{InfoData.Dates}</p>
                    </motion.div>
                    <motion.div className="InfoBubble">
                        <h6 className="InfoHeadings">Interests/ExtraInfo</h6>
                        <p className="InfoText">{InfoData.OtherInfo}</p>
                    </motion.div>
                </motion.div>
                <motion.div className="InfoFooter">
                    <motion.button className="InfoButton" onClick={onReset}>Reset</motion.button>
                    <motion.button className="InfoButton">Learn More</motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default InfoBubble