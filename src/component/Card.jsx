
function Card({ event }) {
    console.log(event);
    return (
        <div className="card container" style={{ width: "70%" }}>
            <div>
                {!event ? <h3>Nessun linguaggio selezionato</h3> : (
                    <div>
                        <h2>{event ? event.title : ''}</h2>
                        <p>{event ? event.description : ''}</p>
                    </div>
                )}

            </div>
        </div>
    );
}
export default Card


