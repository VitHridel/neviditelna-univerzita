import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return(
        <section id="sidebar">
            <div>applications</div>
            <ul id="applications">
                <li>
                    <FontAwesomeIcon icon={faGlobeAmericas} id="globe" /> Registry
                </li>
            </ul>
        </section>
    )
}