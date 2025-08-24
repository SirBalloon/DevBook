import "../CSS/Cabinet.css"
import Folder from "./file";

const Cabinet = ({SetInfoPack}) => {
    const folders = [
        { name: "Capstone Project", InfoKey: "CapstoneProject" },
        { name: "LeetCode", InfoKey: "LeetJourney" },
        { name: "Electronics & Software", InfoKey: "ElecSoftware" },
    ];

    const MaxCol = 4;

    return (
        <div className="CabinetBackDiv">
            <section className="FolderContainer">
            {folders.map((f, index) => {
                const column_start = (index % MaxCol) + 1;           
                const group = Math.floor(index / MaxCol);           
                const withinGroup = index % MaxCol;     
                const row_start = group * (MaxCol + 1) + (withinGroup + 1);

                return (
                    <Folder
                        key={index}
                        Filename={f.name}
                        InfoKey={f.InfoKey}
                        onSelect={SetInfoPack}
                        column_start={column_start}
                        row_start={row_start}
                    />
                );
            })}
            </section>
            <div className="CabinetFrontDiv">
            </div>
        </div>
    )
}

export default Cabinet
