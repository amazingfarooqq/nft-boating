import React from 'react'
import searay56img from '../../images/imgsearay56.png'
import { HomeSection1 } from './HomeSection1'
import { HomeSection2 } from './HomeSection2'
import { HomeSection3 } from './HomeSection3'
import { HomeSection4 } from './HomeSection4'



export const Home = () => {
  return (
    <>
    <div className="container">
      
      <HomeSection1 />
      <HomeSection3 />
      {/* <HomeSection2 /> */}
      <HomeSection4 />
      
      
    </div>


    </>
  )
}
