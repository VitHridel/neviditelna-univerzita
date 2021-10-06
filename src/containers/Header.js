import Account from "../components/Account"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import AccountInfo from '../components/AccountInfo';


export default function Header() {
    const showSidebar = () => {
        if (document.querySelector('.sidebar').style.display === 'block') {
            document.querySelector('.sidebar').style.display = 'none'
            document.querySelector('main').removeAttribute('id')
        } else {
            document.querySelector('.sidebar').style.display = 'block'
            document.querySelector('main').setAttribute('id','moved')
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