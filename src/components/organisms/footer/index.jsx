import React from 'react'
import { BsFacebook, BsSkype } from 'react-icons/bs'
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai'

import styles from './footer.module.scss'
import { Images } from '../../../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  const quickLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Parents',
      path: '/parents',
    },
  ]

  const help = [
    {
      name: 'FAQ',
      path: '/faq',
    },
    {
      name: 'Contact Us',
      path: '/',
    },
    {
      name: 'Terms and Condition',
      path: '/',
    },
    {
      name: 'Privacy Policy',
      path: '/',
    },
  ]
  return (
    <div>
      <footer className={styles.footer}>
        <div className={['img-size', styles.footer_logo].join(' ')}>
          <img src={Images.logo} alt='logo' />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.quickLinks}>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.footerHelp}>
            <h3>Help</h3>
            <ul>
              {help.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footer__icons}>
          <h3>Socials</h3>
          <div className={styles.icons}>
            <BsFacebook />
            <AiFillTwitterCircle />
            <AiFillInstagram />
            <AiFillLinkedin />
            <BsSkype />
          </div>
        </div>
      </footer>
      <hr />
      <h6 className={styles.footer_end}>
        © 2023 Link-Park. All Rights Reserved
      </h6>
    </div>
  )
}

export default Footer
