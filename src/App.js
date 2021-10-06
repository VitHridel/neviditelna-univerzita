import { useEffect, useState } from "react";
import Header from "./containers/Header"; 
import Sidebar from "./containers/Sidebar";
import Head from "./containers/Head";
import HeadCard from './components/HeadCard';
import Events from "./components/Events";

export default function App() {
  const [ basicInf, setBasicInf ] = useState({});
    useEffect(() => {
        fetch('http://localhost:3000/basicInf')
          .then(response => {            
              return response.json()
          })
          .then(json => setBasicInf(json))
      }, []);

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <Head name={basicInf.domain} />
        <div className="body">
          <section className="main-part">          
            <HeadCard expire={basicInf.expires_at} />
            <Events />
          </section>          
                              
        </div>
      </main>
    </div>
  );
}
