import React from 'react'

import { EVENT_CONTENTS } from './contents'
import { EventPages } from '../../../components/organisms'

const AllEvents = () => {
  const { allEvents } = EVENT_CONTENTS
  return (
    <div>
      <EventPages contents={allEvents} />
    </div>
  )
}

export default AllEvents
