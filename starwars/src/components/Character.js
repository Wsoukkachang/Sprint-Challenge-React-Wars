import React from 'react';
import "./StarWars.css";

const Character = props => {
    // 
    return (
    <div className="character-container">
        <div className="character-img"></div>
            <div className="character-info">
            
            <h2>{props.character.name}</h2>
            <p><strong>Gender:</strong> {props.character.gender}</p>
            <p><strong>Birth Year:</strong> {props.character.birth_year}</p>
            <p><strong>Height: </strong>{props.character.height}</p>
            <p><strong>Mass:</strong> {props.character.mass}</p>
            </div>
    </div>
    );
};

export default Character;