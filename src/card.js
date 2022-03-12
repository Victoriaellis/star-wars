import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import './style.css';

export default function Card(props){
    
    const showStat = (e) => {
        if(props.player == 2){
            e.currentTarget.childNodes[1].style.display = 'block'
            e.currentTarget.classList.add('selected')
        }
    }
    return (
        <div>
            <p className='cardHeader'>{props.name}</p>
            <img className='cardImage' src='./starwars-logo.png'></img>
            <div className='statContainer'>
                <div className='statCard' onClick={showStat}>
                    <p>Credit Cost: </p>
                    <p className={`${props.player == 2 ? 'hidden': ''}`}>{props.creditCost}</p>
                </div>
            </div>
            <div className='statContainer'>
                <div className='statCard' onClick={showStat}>
                    <p>Passengers:</p>
                    <p className={`${props.player == 2 ? 'hidden': ''}`}>{props.passengers}</p>
                </div>
            </div>
            <div className='statContainer'>
                <div className='statCard' onClick={showStat} >
                    <p>Max speed: </p>
                    <p className={`${props.player == 2 ? 'hidden': ''}`}>{props.maxSpeed}</p>
                </div>
            </div>
        </div>

    )
} 
