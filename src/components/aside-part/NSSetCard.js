import { useContext, useState, useEffect } from "react";
import { ErrorContext } from "../../context/ErrorContext";

export default function NsSetCard() {
    const [ nsSet, setNsSet ] = useState()
    const { error, setError } = useContext(ErrorContext);
  
    useEffect(() => {
        fetch('http://localhost:3000/nsset')
          .then(response => {
            if(response.ok) {
              setError()
              return response.json()
            } else {
              throw new Error(`Unable to get data from server: ${response.statusText}`)
            }
          })
          .then(json => setNsSet(json))
          .catch((err) => setError(err.message))
      }, []);
    return(
        nsSet ? 
            <section className="card">
              <h4>
                  <div className="container">
                      NSSet:
                  </div>
              </h4>
              <div className="container">
                  <p className="handle"><span className="data-name">Handle:</span> {nsSet.handle}</p>
                  <p className="registrar"><span className="data-name">Registrar:</span> {nsSet.registrar}</p>
                  <p className="dns"><span className="data-name">DNS:</span> <div>{nsSet.dns.map(dns=><span className="dns">{`${dns.name}(${dns.ip_address})`}</span>)}</div></p>
              </div>
            </section>
         : <p>{error}</p>
    )
}