import { useState } from "react";
import Card from "./Card";
import languages from "../data/languages";


function Button() {

    let [event, setEvent] = useState(null)
    return (
        <div>
            <div className="container d-flex justify-content-evenly">
                {languages.map(element => (
                    <button onClick={() => setEvent(element)} 
                    type="button" className={'btn ' + (event?.id === element.id ? 'btn-warning' : 'btn-primary')}
                    key={element.id}>{element.title}</button>
                        

                ))}
            </div>
            <Card event={event} />
        </div>


    );
}

export default Button


{/* <button type="button" className="btn btn-primary">Html</button>
<button type="button" className="btn btn-primary">Css</button>
<button type="button" className="btn btn-primary">Javascript</button>
<button type="button" className="btn btn-primary">Node.JS</button>
<button type="button" className="btn btn-primary">Express</button>
<button type="button" className="btn btn-primary">ReactJS</button> */}