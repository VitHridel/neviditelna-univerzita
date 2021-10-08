import Switch from "../components/main-part/Switch";

export default function Head({name}) {
    return(
        <section className="head">
            <h1>{name}</h1>
            <Switch />            
        </section>
    )
}