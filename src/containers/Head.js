import Account from "../components/Account"


export default function Head() {
    const showSidebar = () => {
        if (document.getElementById('sidebar').style.display === 'none') {
            document.getElementById('sidebar').style.display = 'block'
        } else {
            document.getElementById('sidebar').style.display = 'none'
        }
    }

    return(
        <header id="head">
            <button id='sidebar-button' onClick={showSidebar}></button>
            <span>Ferda</span>
            <Account />
        </header>
    )
}