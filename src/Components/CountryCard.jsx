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

        <div className='CountryCard_Card_titleBox'>
          <h1 className='CountryCard_Card_titleBox_title'>
            {title}
          </h1>
        </div>

        <div className='CountryCard_Card_capitalBox'>
          <sub className='CountryCard_Card_capitalBox_capital'>
            {capital}
          </sub>
        </div>


        <div className='CountryCard_Card_infoBox'>
          <p className='CountryCard_Card_infoBox_info'>
            {info}
          </p>
        </div>

        <div className='CountryCard_Card_btnBox'>
          <button className='CountryCard_Card_btnBox_btn'>
            추가할 버튼
          </button>
        </div>

      </div>


    </div>
  )
}

