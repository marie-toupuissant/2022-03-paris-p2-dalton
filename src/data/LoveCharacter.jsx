import React from 'react';
import { Link } from "react-router-dom";
import "./LoveCharacter.css";

const LoveCharacter = ({loveCharacter}) => {
    return (
        <div className='loveCharacter'>
            <div className='love-cards'>
                <Link to={{ pathname: `/loveCharacter/${loveCharacter.id}`}}>
                    <img className="loveCharacter-img" src={loveCharacter.image} alt={loveCharacter.name} />
                </Link>
                <div className='loveCharacter-content'>
                    <div className="loveCharacter-rectangle"></div>
                    <h2 className="loveCharacter-name">{loveCharacter.name}</h2>
                    <h3>{loveCharacter.race}</h3>
                    <h3>{loveCharacter.gender}</h3>
                </div>
            </div>
        </div>
      )
    }

export default LoveCharacter;