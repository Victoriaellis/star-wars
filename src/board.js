import React, { useState, useEffect } from 'react';
import Card from './card';
import Counter from './counter'

export default function Board() {
    const [data, setData] = useState(null);
    const [maxSpeed, setSpeed] = useState(null)
    const [name, setName] = useState(null)
    const [shipClass, setShipClass] = useState(null) 
    const [creditCost, setCredits] = useState(null)
    const [passengers, setPassengers] = useState(null)
    //const [filmAppearances, setFilms] = useState(null)
    //player2
    const [data2, setData2] = useState(null);
    const [maxSpeed2, setSpeed2] = useState(null)
    const [name2, setName2] = useState(null)
    const [shipClass2, setShipClass2] = useState(null) 
    const [creditCost2, setCredits2] = useState(null)
    const [passengers2, setPassengers2] = useState(null)
    //const [filmAppearances, setFilms] = useState(null)

    const pickStarship = () => {
      let starships = [1 , 2, 3, 5, 8, 9]
      let selectedStarship = starships[Math.floor(Math.random()*starships.length)]
      starships = starships.filter((ship) => ship != selectedStarship)
      return selectedStarship.toString()
    }
    const fetchStarships = (starshipNum) => {
      return fetch('https://www.swapi.tech/api/starships/' + starshipNum)
    }
    // useEffect(() => {
    //         fetchStarships(pickStarship())
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data.result.properties)
    //             setData(data)
    //             setCredits(data.result.properties.cost_in_credits)
    //             setPassengers(data.result.properties.passengers)
    //             setSpeed(data.result.properties.max_atmosphering_speed)
    //             setName(data.result.properties.name)
    //             setShipClass(data.result.properties.starship_class)
    //             //setFilms((data.result.properties.films).length)
    //         });
    // }, []);
    useEffect(() => {
      fetchStarships(pickStarship())
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
          //player2
      .then(response => response.json())
      .then(data => {
        fetchStarships(pickStarship())
        setData2(data)
        setCredits2(data.result.properties.cost_in_credits)
        setPassengers2(data.result.properties.passengers)
        setSpeed2(data.result.properties.max_atmosphering_speed)
        setName2(data.result.properties.name)
        setShipClass2(data.result.properties.starship_class)
      })
      });
    }, []);
    const p1IsWinner = (player1Stat, player2Stat) = () => {
      if(parseInt(player1Stat) > parseInt(player2Stat)) {
        return true
      } else{
        return false
      }
    }
  return (
    <div>
      <div className='container'>
        <div className='card'>
          <Card player={1} name={name} creditCost={creditCost} maxSpeed={maxSpeed} passengers={passengers} />
        </div>
        <div className='card'>
          <Card player={2} name={name2} creditCost={creditCost2} maxSpeed={maxSpeed2} passengers={passengers2} />
        </div>
      </div>
      <div className='counter'>
        <div>
          <p className='hidden'>You win!</p>
          <p className='hidden'>You lose</p>
          <p className='hidden'>You draw</p>
        </div>
        <Counter />
      </div>
    </div>
  )
}