import { useEffect, useState } from "react";
import Header from "./containers/Header"; 
import Sidebar from "./containers/Sidebar";
import Head from "./containers/Head";
import HeadCard from './components/main-part/HeadCard';
import EventsCard from './components/main-part/EventsCard';
import { ErrorContextProvider } from "./context/ErrorContext";
import StateFlagsCard from "./components/main-part/StateFlagsCard";
import { ViewContextProvider } from "./context/ViewContext";
import OwnerCard from "./components/aside-part/OwnerCard";
import AdministrativeContactsCard from "./components/aside-part/AdmistrativeContactsCard";
import NsSetCard from "./components/aside-part/NSSetCard";
import KeySetCard from "./components/aside-part/KeySetCard";

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
      <ViewContextProvider>
        <ErrorContextProvider>
        <Head name={basicInf.domain} />
        <div className="body">
          <section className="main-part">          
            <HeadCard expire={basicInf.expires_at} />
            <EventsCard />
            <StateFlagsCard />
          </section>  
          <aside className="aside-part">
            <OwnerCard/>
            <AdministrativeContactsCard />
            <NsSetCard />
            <KeySetCard />
          </aside>        
        </div>
        </ErrorContextProvider>                    
      </ViewContextProvider>
      </main>
    </div>
  );
}
