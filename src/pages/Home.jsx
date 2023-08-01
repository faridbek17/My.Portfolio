import React from 'react'
import InstaIcon from '../components/icons/InstaIcon'
import TelegramIcon from '../components/icons/TelegramIcon'
import { Link } from 'react-router-dom'

 function Home() {
  return (
    <div className='home container'>
        <h1 className='home_title'>Qurbonboyev  Farid</h1>
        <h1 className='home_lorem'>Men Front End Dasturchiman</h1>
        <div className="home_contacts">
          <Link className='home_link' to='https://t.me/far1dbek'>
            <TelegramIcon width='30px' height='30px' fill='#fff'/>
          </Link>
          <Link to='https://instagram.com/_far1dbek?igshid=OGQ5ZDc2ODk2ZA=='>
            <InstaIcon width='30px' height='30px' fill='#fff'/>
          </Link>
        </div>
    </div>
  )
}

export default Home