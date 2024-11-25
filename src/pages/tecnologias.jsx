import React from 'react'
import { ScrollRevealEffect } from '../components/efects/ScrollrevealEffect'
import Carousell from '../components/carousell/carousell'

export default function Tecnologias() {
  return (
    <ScrollRevealEffect>
      <div className='container'>
        <h2>Tecnologias</h2>
        <Carousell />
      </div>

    </ScrollRevealEffect>
  )
}

