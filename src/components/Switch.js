import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";

export default function Switch() {
    const { toggleView } = useContext(ViewContext);
    <button id="switch" onClick={toggleView} />;
    return ( 
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
    )
}