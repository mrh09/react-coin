import React from 'react'
import HeroSection from '../HeroSection'
import Pricing from '../Pricing/Pricing'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

function Home() {
  return (
    <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjThree} />
        <Pricing />
        <HeroSection {...homeObjTwo} />
        <HeroSection {...homeObjFour} />
    </>
  )
}

export default Home