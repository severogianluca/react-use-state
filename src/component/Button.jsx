import languages from "../data/languages";
function Button() {



    return (
        
        languages.map(element =>(

            <button type="button" className="btn btn-primary">{element.title}</button>
            
        ))
          
    );
}

export default Button


{/* <button type="button" className="btn btn-primary">Html</button>
<button type="button" className="btn btn-primary">Css</button>
<button type="button" className="btn btn-primary">Javascript</button>
<button type="button" className="btn btn-primary">Node.JS</button>
<button type="button" className="btn btn-primary">Express</button>
<button type="button" className="btn btn-primary">ReactJS</button> */}