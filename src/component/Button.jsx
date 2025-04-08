import { useState } from "react";
import languages from "../data/languages";

function Button() {

    let[event, setEvent] = useState(null)
    {console.log(event)}
    return (
        <div>
            {languages.map(element =>(
            <button onClick={() => setEvent(element)} 
            type="button" className="btn btn-primary" key={element.id}>{element.title}</button>

            ))}
            <h2>
                {event ? event.title: ''}
            </h2>

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