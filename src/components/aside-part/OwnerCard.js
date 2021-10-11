import { useState, useContext, useEffect } from "react";
import { ErrorContext } from "../../context/ErrorContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function OwnerCard() {
    const [ owner, setOwner ] = useState({});
    const { error, setError } = useContext(ErrorContext);
  
    useEffect(() => {
        fetch('http://localhost:3000/owner')
          .then(response => {
            if(response.ok) {
              setError()
              return response.json()
            } else {
              throw new Error(`Unable to get data from server: ${response.statusText}`)
            }
          })
          .then(json => setOwner(json))
          .catch((err) => setError(err.message))
      }, []);

    return(
      owner && owner.publish ? 
        <section className="card">
            <h4>
                <div className="container">
                    Owner:
                </div>
            </h4>
          <div className="container">
            <p className="handle handling"><span className="data-name">Handle:</span> {owner.handle}</p>
            {owner.publish.organization ? <p><FontAwesomeIcon className="icon active" icon={faEye} /> 
            <span className="data-name">Organization:</span> {owner.organization}</p>
            : <p><FontAwesomeIcon className="icon non-active" icon={faEyeSlash} />
            <span className="data-name">Organization:</span> {owner.organization}</p> }
            {owner.publish.name ? <p><FontAwesomeIcon className="icon active" icon={faEye} /><span className="data-name">Name:</span> {owner.name}</p>
            : <p><FontAwesomeIcon className="icon non-active" icon={faEyeSlash} /><span className="data-name">Name:</span> {owner.name}</p>}      
          </div>
        </section>
        : <p>{error}</p>
    )
}