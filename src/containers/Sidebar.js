import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    window.onscroll = function(){scroll()}; 
    let sidebar = document.querySelector('.sidebar');
    let main = document.querySelector('main');
    function scroll() {
        if(sidebar && window.pageYOffset > main.offsetTop){
            sidebar.setAttribute('id','sticky');
        } else {
            sidebar.removeAttribute('id')
        }
    }
    return(
        <section className="sidebar">
            <div>applications</div>
            <ul id="applications">
                <li>
                    <FontAwesomeIcon icon={faGlobeAmericas} id="globe" />Registry
                </li>
            </ul>
        </section>
    )
}