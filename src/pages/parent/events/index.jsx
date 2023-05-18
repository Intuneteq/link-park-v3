import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { EVENT_CONTENTS } from './contents'
import { Container } from '../../../components/templates'
import {
  selectCurrentUserId,
  selectCurrentUserType,
} from '../../auth/api/authSlice'
import styles from './events.module.scss'

const Events = () => {
  const user = useSelector(selectCurrentUserType)
  const id = useSelector(selectCurrentUserId)
  let { eventLink } = EVENT_CONTENTS

  eventLink = eventLink.map((link) => {
    return {
      name: link.name,
      path: `/${user}/${id}/${link.path}`,
    }
  })

  return (
    <Container name={'Events'}>
      <section className={styles.events}>
        <div className={styles.events__body_head}>
          {eventLink.map((item, index) => (
            <NavLink
              end
              key={index}
              className={styles.event_links}
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
