import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import './style.css';

export default function Card(props){
    const [data, setData] = useState(null);
    const [maxSpeed, setSpeed] = useState(null)
    const [name, setName] = useState(null)
    const [shipClass, setShipClass] = useState(null) 
    const [creditCost, setCredits] = useState(null)
    const [passengers, setPassengers] = useState(null)
    //const [filmAppearances, setFilms] = useState(null)

    useEffect(() => {
        fetch('https://www.swapi.tech/api/starships/' + props.starshipNum)
            .then(response => response.json())
            .then(data => {
                console.log(data.result.properties)
                setData(data)
                setCredits(data.result.properties.cost_in_credits)
                setPassengers(data.result.properties.passengers)
                setSpeed(data.result.properties.max_atmosphering_speed)
                setName(data.result.properties.name)
                setShipClass(data.result.properties.starship_class)
                //setFilms((data.result.properties.films).length)
            });
    }, []);
    const showStat = (e) => {
        if(props.player == 2){
            e.currentTarget.childNodes[1].style.display = 'block'
            e.currentTarget.classList.add('selected')
        }
    }
    return (
        <div>
            <p className='cardHeader'>{name}</p>
            <img className='cardImage' src='./starwars-logo.png'></img>
            <div className='statContainer'>
                <div className='statCard' onClick={showStat}>
                    <p>Credit Cost: </p>
                    <p className={`${props.player == 2 ? 'hidden': ''}`}>{creditCost}</p>
                </div>
            </div>
            <div className='statContainer'>
                <div className='statCard' onClick={showStat}>
                    <p>Passengers:</p>
                    <p className={`${props.player == 2 ? 'hidden': ''}`}>{passengers}</p>
                </div>
            </div>
            <div className='statContainer'>
                <div className='statCard' onClick={showStat} >
                    <p>Max speed: </p>
                    <p className={`${props.player == 2 ? 'hidden': ''}`}>{maxSpeed}</p>
                </div>
            </div>
        </div>

    )
} 
