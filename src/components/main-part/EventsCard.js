import { useState, useEffect, useContext } from "react/cjs/react.development";
import { ErrorContext  } from "../../context/ErrorContext";
import convertToDate from "../../fce/convertToDate";

export default function EventsCard() {
    const [ events, setEvents ] = useState()
    const { error, setError } = useContext(ErrorContext);

    useEffect(() => {
        fetch('http://localhost:3000/events')
          .then(response => {
            if(response.ok) {
              setError()
              return response.json()
            } else {
              throw new Error(`Unable to get data from server: ${response.statusText}`)
            }
          })
          .then(json => setEvents(json))
          .catch((err) => setError(err.message))
      }, []);

    return(
      events ? 
        <section className="events card">
          <h4>
              <div className="container">
                  Events:
              </div>
          </h4>
          <div className="container">
            <div className="dates">
              <p><span className="data-name">Create date:</span> {convertToDate(events.registered.timestamp)}</p>
              <p><span className="data-name">Update date:</span> {convertToDate(events.updated.timestamp)}</p>              
              <p><span className="data-name">Transfer date:</span> {convertToDate(events.transferred.timestamp)}</p>
              <p><span className="data-name">Delete date:</span> {events.unregistered && convertToDate(events.unregistered.timestamp)}</p>
            </div>
            <div className="registrars">
              <p className="registrar"><span className="data-name">Registrar:</span> {events.registered.registrar_handle}</p>
              <p className="registrar"><span className="data-name">Registrar:</span> {events.updated.registrar_handle}</p>
              <p className="registrar"><span className="data-name">Registrar:</span> {events.transferred.registrar_handle}</p>
            </div>
          </div>  
        </section>
        : <p>{error}</p>
    )
}