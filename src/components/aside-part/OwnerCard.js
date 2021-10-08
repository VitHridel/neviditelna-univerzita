import { useState, useContext, useEffect } from "react";
import { ErrorContext } from "../../context/ErrorContext";

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
        <section className="card">
            {owner ? 
            <div className="container">                
                {/*Object.entries(owner).map(key=> 
                    Object.entries(owner.publish).map(publishKey=> {
                        if(key[0]===publishKey[0] && publishKey[1]) {
                            return <p>ok {`${key[0]}: ${key[1]}`}</p>
                        } else if(key[0]===publishKey[0] && !publishKey[1]) {
                            return <p>not ok {`${key[0]}: ${key[1]}`}</p>
                        }
                        }))
                  */
                }
            </div>
            : <p>{error}</p>}
        </section>
    )
}