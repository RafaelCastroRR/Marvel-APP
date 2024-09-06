export const GridCharacters = ({ characters }) => {
    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {characters &&
                    characters.map((char) => (
                        <div key={char.id} className="col">
                            <div className="card h-100">
                                <img
                                    src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                                    className="card-img-top"
                                    alt={char.name}
                                    style={{ height: "300px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{char.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};
