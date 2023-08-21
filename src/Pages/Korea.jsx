import React from 'react'
import "../CSS/Map/Asia/Korea/Korea.css";
import KoreaMap from '../Components/Map/Asia/Korea/KoreaMap';

export default function Korea() {


  return (
    <div className='KoreaPage'>
      <div className='KoreaPage_left'>


      </div>
      <div className='KoreaPage_right'>
        <KoreaMap />
      </div>
    </div>
  )
}
