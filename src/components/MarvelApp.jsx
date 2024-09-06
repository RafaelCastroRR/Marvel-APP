import Pagination from '@mui/material/Pagination';
import { useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { GridCharacters } from "./GridCharacters";

export const MarvelApp = () => {
    const [pagina, setPagina] = useState(1);
    const [searchCharacter, setSearchCharacter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const { characters, total } = useCharacters(pagina, searchTerm);

    const handleSearchChange = (e) => {
        setSearchCharacter(e.target.value);
    };

    const handleSearchClick = () => {
        setSearchTerm(searchCharacter);

    };

    return (
        <div>
            { }
            <div className="mb-4 d-flex justify-content-center">
                <div className="d-flex align-items-center">
                    <input
                        value={searchCharacter}
                        onChange={handleSearchChange}
                        className="form-control me-2"

                    />
                    <button
                        onClick={handleSearchClick}
                        className="btn btn-primary"
                    >
                        Search
                    </button>
                </div>
            </div>

            { }
            <GridCharacters characters={characters} />

            { }
            <Pagination
                count={Math.ceil(total / 20)}
                color="primary"
                className="d-flex justify-content-center mt-5"
                onChange={(e, value) => setPagina(value)}
            />
        </div>
    );
};
