import ShowButton from "./ShowButton";
import convertToDate from "../../fce/convertToDate";

export default function HeadCard({expire}) {
    return(
        <section className="card">
            <div className="container">            
                <p><span className="data-name">AuthInfo:</span> <span id="pass">Secret Password</span> <ShowButton /></p>
                <p><span className="data-name">Expires at:</span> {convertToDate(expire)}</p>
            </div>
        </section>
    )
}