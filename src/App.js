import Header from "./containers/Header"; 
import Sidebar from "./containers/Sidebar";
import { ViewContextProvider } from './context/ViewContext';
import Switch from "./components/Switch";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <ViewContextProvider>
          <Switch />
        </ViewContextProvider>
      </main>
    </div>
  );
}
