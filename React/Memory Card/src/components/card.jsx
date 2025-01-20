export function Card( {img, name, handle} ) {
    return (
        <div onClick={handle} className="card">
            <img src={img} width={"200px"}></img>
            <p>{name}</p>
        </div>
    );
};