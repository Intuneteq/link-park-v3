import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Navbar, Button } from '@nextui-org/react'

import Images from '../../../constants/Images'
import { SearchInput, Buttons } from '../../atoms'
import { NAV_CONTENT } from './contents'
import './navbar.scss'

const NavBar = () => {
  const navigate = useNavigate()
  const { navLinks } = NAV_CONTENT

  return (
    <>
      <nav className='nav'>
        <Link to={'/'} className='img-size nav__logo'>
          <img src={Images.logo} alt='logo' />
        </Link>
        <ul className='nav__links'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink activeClassName='active' to={item.path}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className='nav__search'>
          <SearchInput height={3} />
        </div>
        <Buttons
          width={8.75}
          height={3}
          classType={'primary'}
          type={'button'}
          text={'Get Started'}
          onClick={() => navigate('/user')}
        />
      </nav>

      <nav className='nav-mobile'>
        <Navbar isBordered variant='sticky'>
          <Navbar.Brand>
            <div className='img-size nav__logo'>
              <img src={Images.logo} alt='logo' />
            </div>
          </Navbar.Brand>
          <Navbar.Content>
            <Navbar.Item>
              <Navbar.Toggle aria-label='toggle navigation' />
            </Navbar.Item>
          </Navbar.Content>
          <Navbar.Collapse>
            {navLinks.map((item, index) => (
              <Navbar.CollapseItem key={index}>
                <Link
                  color='inherit'
                  css={{
                    minWidth: '100%',
                  }}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
              <Button
                onClick={() => navigate('/user')}
                className='btn-primary'
                auto
                flat
                as={Link}
              >
                Get Started
              </Button>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  )
}

export default NavBar
