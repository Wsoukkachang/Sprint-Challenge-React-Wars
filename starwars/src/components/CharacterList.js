import React from 'react';
import Character from './Character';

const CharacterList = props => {
    // map array

    return (
        <div className="character-list"> 
            {props.starwarsChars.map(character => (
                <Character 
                    character={character}
                    key={character.name}
                />
                ))}
        </div>
        );
};

export default CharacterList;