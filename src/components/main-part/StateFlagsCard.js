import { useState, useEffect, useContext } from "react"
import { ErrorContext } from "../../context/ErrorContext";
import { ViewContext } from "../../context/ViewContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function StateFlagsCard() {
    const [ stateFlags, setStateFlags ] = useState();
    const { error, setError } = useContext(ErrorContext);
    const { verboseView } = useContext(ViewContext);

    useEffect(() => {
        fetch('http://localhost:3000/state_flags')
          .then(response => {
            if(response.ok) {
              setError()
              return response.json()
            } else {
              throw new Error(`Unable to get data from server: ${response.statusText}`)
            }
          })
          .then(json => setStateFlags(json))
          .catch((err) => setError(err.message))
      }, []);

    return(
        <section id="state-flags" className="card">
            { stateFlags ?
                <div className="container">
                {verboseView ? 
                    <ul>
                        {stateFlags.flags.map(flag => 
                        flag.active && <li className="active"><FontAwesomeIcon icon={faCheckCircle} />{flag.description}</li>
                        )}
                    </ul>
                 : <div id="lists">
                        <ul>
                            {stateFlags.flags.map(flag => {
                                if((flag.name.includes('server') && !flag.name.includes('Manual')) || flag.name.includes('deleteCandidate')) {
                                    return(
                                        flag.active ? <li className="active"><FontAwesomeIcon icon={faCheckCircle}/> {flag.description}</li>
                                    : <li className="non-active"><FontAwesomeIcon icon={faTimesCircle} />{flag.description}</li>
                                    )
                                }
                                })}
                        </ul>
                        <ul>
                            {stateFlags.flags.map(flag => {
                            if(flag.name.includes('Manual')) {
                                return(
                                    flag.active ? <li className="active"><FontAwesomeIcon icon={faCheckCircle}/>{flag.description}</li>
                                : <li className="non-active"><FontAwesomeIcon icon={faTimesCircle} />{flag.description}</li>
                                )
                            }
                            })}                          
                        </ul>
                        <ul>
                            {stateFlags.flags.map(flag => {
                            if(!flag.name.includes('server') && !flag.name.includes('Manual') && !flag.name.includes('deleteCandidate')) {
                                return(
                                    flag.active ? <li className="active"><FontAwesomeIcon icon={faCheckCircle}/>{flag.description}</li>
                                : <li className="non-active"><FontAwesomeIcon icon={faTimesCircle} />{flag.description}</li>
                                )
                            }
                            })}
                        </ul>
                    
                    </div>
                    }
                </div>
                 : <p>{error}</p> }
        </section>
    )
}