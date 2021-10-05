import Account from "../components/Account"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AccountInfo from '../components/AccountInfo';


export default function Header() {
    const showSidebar = () => {
        if (document.getElementById('sidebar').style.display === 'block') {
            document.getElementById('sidebar').style.display = 'none'
        } else {
            document.getElementById('sidebar').style.display = 'block'
        }
    }

    return(
        <header className="header">
            <div>
                <FontAwesomeIcon icon={faBars} id='sidebar-button' onClick={showSidebar} />
                <h2 id="ferda">Ferda</h2>
            </div>
            <div>
                <Account />
                <AccountInfo />
            </div>
        </header>
    )
}