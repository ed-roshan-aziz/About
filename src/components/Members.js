import React from 'react'
import "../styles/Members.css"
import ManPro from "../images/businessman.png"
import Professor from "../images/professor.png"
import Woman from "../images/Woman.png"

const Members = () => {
  return (
    <>
    <div className='scrollablecontainer'>
    <div className='membergrid'>
      <div className='card'>
        <div className='cardinfo'>
        <h1>Ahmed Raza</h1>
        <img src = {ManPro} alt='Missing Image' className='image'/>
        <p>He graduated from Beaconhouse National University. He did his major in Arts and communication.</p>
        </div>
      </div>
      <div className='card'>
        <div className='cardinfo'>
        <h1>Ali Khokar</h1>
        <img src = {Professor} alt='Missing Image' className='image'/>
        <p>He graduated from Lahore University of Management Sciences. He did his major in Business Marketing.</p>
        </div>
      </div>
      <div className='card'>
        <div className='cardinfo'>
          <h1>Aunaiza Khan</h1>
          <img src = {Woman} alt='Missing Image' className='image'/>
          <p>She graduated from FAST university. She did her major in Business Management and excelled with flying colors.</p>
        </div>
      </div>
      

    </div>
    </div>
    </>
  )
}

export default Members