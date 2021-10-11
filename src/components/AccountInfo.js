import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function AccountInfo() {
    return(
        <div id="account-info">
            <section>
                <FontAwesomeIcon icon={faUserCircle} className="user-circle icon" />
                <p>Jan Musílek<br/><span id="admin">admin</span></p>
            </section>
            <section id="logout"><FontAwesomeIcon icon={faSignOutAlt} className="icon" /><p>Logout</p></section>            
        </div>
    )
}