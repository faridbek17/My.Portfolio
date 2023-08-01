import React from 'react'
import LocationIcon from './../components/icons/LocationIcon';
import EmailIcon from '../components/icons/EmailIcon';
import ShareIcon from '../components/icons/ShareIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import TelegramIcon from './../components/icons/TelegramIcon';
import InstaIcon from '../components/icons/InstaIcon';
import { Link } from 'react-router-dom';

 function Contact() {
  return (
    <div className="contact">
        <div className="contact_container">
          <div className="contact_start">
              <h1 className='contact_h1'>MEN BILAN ALOQA</h1>
          </div>

          <div className="contact_end ">
              
              <div className="contact_content-left">
              <div className="contact_content">
                  <div className="contact_content-icons">
                      <LocationIcon fill='#0f9924' width='24px' height='24px'/>
                  </div>
                  <div className="contact_content-title">
                      <h1 className='contact_content-title-h1'>Yashash Joyim</h1>
                      <h2 className='contact_content-title-h2'>O'zbekiston Horazm</h2>
                  </div>
              </div>

              <div className="contact_content">
                  <div className="contact_content-icons">
                      <EmailIcon fill='#0f9924' width='24px' height='24px'/>
                  </div>
                  <div className="contact_content-title">
                      <h1 className='contact_content-title-h1'>Mening Emailim</h1>
                      <h2 className='contact_content-title-h2'>faridbek0117@gmail.com</h2>
                  </div>
              </div>
              </div>

              <div className="contact_content-right">
                <div className="contact_content">
                    <div className="contact_content-icons">
                      <ShareIcon fill='#0f9924' width='24px' height='24px'/>
                    </div>
                    <div className="contact_content-title">
                        <h1 className='contact_content-title-h1'>Ijtimoi Tarmoqlarim</h1>
                        <div className="contact_content-tarmoq">
                            <Link className='home_link' to='https://t.me/far1dbek'>
                              <TelegramIcon width='30px' height='30px' fill='#fff'/>
                            </Link>
                            <Link to='https://instagram.com/_far1dbek?igshid=OGQ5ZDc2ODk2ZA=='>
                              <InstaIcon width='30px' height='30px' fill='#fff'/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <div className="contact_content-icons">
                        <PhoneIcon fill='#0f9924' width='24px' height='24px'/>
                    </div>
                    <div className="contact_content-title">
                        <h1 className='contact_content-title-h1'>Telefon Raqam</h1>
                        <h2 className='contact_content-title-h2'>+998 99 105 4313</h2>
                    </div>
                </div>
              </div>

          </div>
        </div>
    </div>
  )
}

export default Contact