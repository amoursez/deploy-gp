import React from 'react';
import Girl from '../../assets/main/girl.png';
import './style.scss';

const OurTeam = () => {
  return (
    <div> 
            <h1>Команда <span>TheTech</span></h1>

        <div className='team'>
    <div className='team-item'>
    <img src = {Girl} />
  <p>AMICE ALBERT</p>
  <span>Web Designer</span>
        </div> 
        <div className='team-item'>
    <img src = {Girl} />
  <p>AMICE ALBERT</p>
  <span>Web Designer</span>
        </div> 
        <div className='team-item'>
    <img src = {Girl} />
  <p>AMICE ALBERT</p>
  <span>Web Designer</span>
        </div> 
 
</div>

    </div>
   
  )
}

export default OurTeam
