import { useContext } from "react";
import { ViewContext } from "../../context/ViewContext";

export default function Switch() {
    const { toggleView } = useContext(ViewContext);
    return ( 
        <div>
        <label className="switch">
            <input onClick={toggleView} type="checkbox" />
            <span className="slider round"></span>
        </label>
        </div>
    )
}