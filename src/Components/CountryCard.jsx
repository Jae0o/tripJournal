import React from 'react';
import '../CSS/CountryCard.css';

export default function CountryCard({ title, capital, info, img }) {
  return (
    <div className='CountryCard'>
      <img
        className='CountryCard_background'
        src={img}
        alt={`${title} Country img`}
      />
      <div className='CountryCard_Card'>

        <h1 className='CountryCard_Card_title'>
          {title}
        </h1>

        <sub className='CountryCard_Card_capital'>
          {capital}</sub>

        <p className='CountryCard_Card_info'>
          {info}</p>

        <button className='CountryCard_Card_btn'>
          추가할 버튼</button>

      </div>


    </div>
  )
}
