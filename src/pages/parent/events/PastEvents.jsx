import React from 'react'

import { EVENT_CONTENTS } from './contents'
import { EventPages } from '../../../components/organisms'

const PastEvents = () => {
  const { pastEvents } = EVENT_CONTENTS

  return (
    <div>
      <EventPages contents={pastEvents} />
    </div>
  )
}

export default PastEvents
