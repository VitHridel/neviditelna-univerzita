import { useContext, useState, useEffect } from "react";
import { ErrorContext } from "../../context/ErrorContext";

export default function KeySetCard() {
    const [ keySet, setKeySet ] = useState()
    const { error, setError } = useContext(ErrorContext);
  
    useEffect(() => {
        fetch('http://localhost:3000/keyset')
          .then(response => {
            if(response.ok) {
              setError()
              return response.json()
            } else {
              throw new Error(`Unable to get data from server: ${response.statusText}`)
            }
          })
          .then(json => setKeySet(json))
          .catch((err) => setError(err.message))
      }, []);

      return(
          keySet && keySet.dns_keys ? 
          <section className="card">
            <h4>
                <div className="container">
                    KeySet:
                </div>
            </h4>
            <div className="container">
              <p className="handle"><span className="data-name">Handle:</span> {keySet.handle}</p>
              <p className="registrar"><span className="data-name">Registrar:</span> {keySet.registrar}</p>
              <p className="dns"><span className="data-name">DNS keys:</span> <div id="keys">{keySet.dns_keys.map(key=><span>{key}</span>)}</div></p>
            </div>
          </section> 
          : <p>{error}</p>
      )
}