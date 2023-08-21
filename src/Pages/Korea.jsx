import React from 'react'
import "../CSS/Map/Asia/Korea/Korea.css";
import KoreaMap from '../Components/Map/Asia/Korea/KoreaMap';
import CountryCard from '../Components/CountryCard';

export default function Korea() {


  return (
    <div className='KoreaPage'>
      <div className='KoreaPage_left'>
        <CountryCard
          title={"KOR"}
          capital={"Seoul City"}
          info={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, fugit perspiciatis. Ad, error nulla nemo perspiciatis aliquam repellat laborum provident, aspernatur suscipit quibusdam quasi odit?"}
          img={'/Img/Korea.jpg'}
        />

      </div>
      <div className='KoreaPage_right'>
        <KoreaMap />
      </div>
    </div>
  )
}
