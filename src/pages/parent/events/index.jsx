import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { EVENT_CONTENTS } from './contents'
import { Container } from '../../../components/templates'
import styles from './events.module.scss'

const Events = () => {
  const { eventLink } = EVENT_CONTENTS

  return (
    <Container name={'Events'}>
      <section className={styles.events}>
        <div className={styles.events__body_head}>
          {eventLink.map((item, index) => (
            <NavLink
              end
              key={index}
              className={styles.event_links}
              activeclassname={styles.active}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </section>
    </Container>
  )
}

export default Events
