import { useState, useEffect } from "react/cjs/react.development";

export default function Events() {
    const [ events, setEvents ] = useState()
    const [ error, setError ] = useState()

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
        <section className="card">
            {error && <p>{error}</p>}
            {events && 
            <div className="container">
                <p>Create date: {events.registered.timestamp} Registrar: {events.registered.registrar_handle}</p>
                <p>Update date: {events.updated.timestamp} Registrar: {events.updated.registrar_handle}</p>
                <p>Transfer date: {events.transferred.timestamp} Registrar: {events.transferred.registrar_handle}</p>
                <p>Delete date: {events.unregistered && events.unregistered.timestamp}</p>
            </div>}            
            
        </section>
    )
}