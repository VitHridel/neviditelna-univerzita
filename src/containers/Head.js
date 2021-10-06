import { ViewContextProvider } from '../context/ViewContext';
import Switch from "../components/Switch";

export default function Head({name}) {

    return(
        <section class="head">
            <h1>{name}</h1>
            <ViewContextProvider>
                <Switch />
            </ViewContextProvider>
        </section>
    )
}