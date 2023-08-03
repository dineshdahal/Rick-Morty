import { useState, useEffect } from "react";

import Character from "./Character";

const List = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const api = async () => {
            try {
                const data = await fetch(
                    "https://rickandmortyapi.com/api/character"
                );
                const { results } = await data.json();
                setCharacters(results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        api();
    }, []);


    return (
        <div className="row">
            {loading ? (
                <div>loading...</div>
            ) :
                (

                    characters.map(character => (
                        <Character
                            key={character.id}
                            name={
                                character.name
                            }
                            origin={
                                character.origin
                            }
                            image={
                                character.image
                            }
                        />
                    )))
            }




        </div >
    );
};
export default List;
