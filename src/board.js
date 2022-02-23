import React, { useState } from 'react';
import Card from './card';
import Counter from './counter'

export default function Board() {
  return (
    <div>
      <div className='container'>
        <div className='card'>
          <Card player={1} starshipNum={2}/>
        </div>
        <div className='card'>
          <Card player={2} starshipNum={3}/>
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