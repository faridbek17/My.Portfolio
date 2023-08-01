import React, { useState } from 'react'
import { Link, NavLink,} from 'react-router-dom'
import HomeIcon from '../icons/HomeIcon'
import MenuIcon from '../icons/MenuIcon'
import CloseIcon from '../icons/CloseIcon'

 function Header() {
    
    const [openState, setOpenState] = useState(false);
    function openMenu(){
        setOpenState(openState => !openState);
    } let headerMenu = openState ? 'active' : '';


    const links = [
        {
            id: 1,
            path: '/about',
            text: 'Men Haqimda',
        },
        {
            id: 2,
            path: '/portfolio',
            text: 'Portfolio', 
        },
        {
            id: 3,
            path: '/contact',
            text: 'Contact', 
        },
        {
            id: 4,
            path: '/404',
            
        }
    ]
  return (
    <header className='header'>
        <div className="container">
            <div className="header_row">
                <div className="header_logo">
                    <Link className='header_home' to='/'>
                        <HomeIcon className='header_home-icon'/>
                        <h1 className='header_home-home'>Home</h1>
                    </Link>
                </div>

                <div className="header_nav">
                    {
                        links.map(item => {
                            return(
                                <NavLink key={item.id} to={item.path} className={({isActive}) => isActive ? 'header_link header_link-active' : 'header_link'}>
                                    {item.text}
                                </NavLink>
                            )
                        })
                    }
                </div>

                <div className="header_btns">
                    <button className='header_btn header_btn-menu' onClick={openMenu}>
                        <MenuIcon cursor='pointer' width='24px' height='24px' fill='#fff'/>
                    </button>
                </div>

                <div className={`header_menu ${headerMenu}`}>
                    <div className="header_panel">
                        <div className="header_panel-logo">
                            <Link className='header_panel-link' to='/'>
                                <h1 className='header_panel-h1'>Home</h1>
                            </Link>

                            <button className='header_btn-close header_btn-menu' onClick={openMenu}>
                                <CloseIcon cursor='pointer' width='24px' height='24px' fill='#fff'/>
                            </button>
                        </div>
                        
                        <div className="header_panel-links">
                            {
                                links.map(item => {
                                    return(
                                        <NavLink key={item.id} to={item.path} className={({isActive}) => isActive ? 'header_panel-link header_panel-link-active' : 'header_panel-link'}>
                                            {item.text}
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header

