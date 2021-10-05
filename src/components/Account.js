import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default function Account() {
    const showAccountInfo = () => {
        if (document.getElementById('account-info').style.display === 'flex') {
            document.getElementById('account-info').style.display = 'none'
        } else {
            document.getElementById('account-info').style.display = 'flex'
        }           
    }

    return(
        <div id="account" onClick={showAccountInfo}>
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
            <h2 id="user">Jan Musílek</h2>            
        </div>
    )
}