import { useState, useContext, useEffect } from "react";
import { ViewContext } from "./../../context/ViewContext";
import { ErrorContext } from "../../context/ErrorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function AdministrativeContactsCard() {
    const [ administrativeContacts, setAdministrativeContacts ] = useState([])
    const { verboseView } = useContext(ViewContext);    
    const { error, setError } = useContext(ErrorContext);
  
    useEffect(() => {
        fetch('http://localhost:3000/administrative_contacts')
          .then(response => {
            if(response.ok) {
              setError()
              return response.json()
            } else {
              throw new Error(`Unable to get data from server: ${response.statusText}`)
            }
          })
          .then(json => setAdministrativeContacts(json))
          .catch((err) => setError(err.message))
      }, []);
    
    return(
        verboseView ? 
            administrativeContacts.map(contact=>(
                <section className="card">
                    <h4>
                        <div className="container">
                            Administrative contacts:
                        </div>
                    </h4>
                    <div className="container">
                        <p className="handle handling"><span className="data-name">Handle:</span> {contact.handle}</p>
                        {contact.publish.organization ? <p><FontAwesomeIcon className="icon active" icon={faEye} /><span className="data-name">Organization:</span> {contact.organization}</p>
                        : <p><FontAwesomeIcon className="icon non-active" icon={faEyeSlash} /><span className="data-name">Organization:</span> {contact.organization}</p> }
                        {contact.publish.name ? <p><FontAwesomeIcon className="icon active" icon={faEye} /><span className="data-name">Name:</span> {contact.name}</p>
                        : <p><FontAwesomeIcon className="icon non-active" icon={faEyeSlash} /><span className="data-name">Name:</span> {contact.name}</p>} 
                    </div>
                </section> 
            ))
        : <section className="card">
            <h4>
              <div className="container">
                  Administrative contacts:
              </div>
            </h4>
            <div className="container">
            {administrativeContacts.map(contact=><p className="handle"><span className="data-name">{contact.name}:</span> {contact.handle}</p>)}
            </div>
        </section>
    )

}