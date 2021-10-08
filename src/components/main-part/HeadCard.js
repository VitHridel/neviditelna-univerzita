import ShowButton from "./ShowButton";

export default function HeadCard({expire}) {
    return(
        <section className="card">            
                <p>AuthInfo: <span id="pass">Secret Password</span> <ShowButton /></p>
                <p>Expires at: {expire}</p>
        </section>
    )
}