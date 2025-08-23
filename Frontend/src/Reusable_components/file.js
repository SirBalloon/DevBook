import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import "../CSS/Cabinet.css"

const Folder = ({Filename ,link, column_start, row_start}) => {
    const navigate = useNavigate();
    const handleGoToProject = () => {
        navigate(link);
    };

    return (
        <>
            <motion.button 
                className="Folder" 
                onClick={handleGoToProject} 
                whileHover={{y:-20, boxShadow: "4px 4px 15px rgba(0,0,0,0.3)", transition: { type: "spring", stiffness: 200, damping: 20 }}}
                style={{ 
                    gridColumnStart: column_start,
                    gridRowStart: row_start,
                }}
            >{Filename}</motion.button>
        </>
    )
}

export default Folder