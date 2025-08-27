import { motion } from "motion/react";
import "../CSS/Cabinet.css"

const Folder = ({Filename ,InfoKey, onSelect, column_start, row_start}) => {
    const handleClick = () => {
        onSelect(InfoKey)
    };

    return (
        <>
            <motion.button 
                className="Folder"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.0, ease: "easeOut" }} 
                onClick={handleClick} 
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