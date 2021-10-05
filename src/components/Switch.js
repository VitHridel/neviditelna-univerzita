import { useContext } from "react";
import { ViewContext } from "../context/ViewContext";

export default function Switch() {
    const { toggleView } = useContext(ViewContext);
    return ( <button id="switch" onClick={toggleView} />);
}