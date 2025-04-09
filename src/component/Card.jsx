
function Card({event}) {
    console.log(event);
    return (
        <div className="card container" style={{ width: "70%" }}>
            <div>
                <h2>{event ? event.title : ''}</h2>
                <p>{event ? event.description : ''}</p>
            </div>
        </div>
    );
}
export default Card



