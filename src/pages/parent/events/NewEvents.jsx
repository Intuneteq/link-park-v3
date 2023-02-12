import React from 'react'

import { EVENT_CONTENTS } from './contents'
import EventPages from '../../../components/organisms/eventPages'

const NewEvents = () => {
  const { newEvents } = EVENT_CONTENTS

  return (
    <div>
      <EventPages contents={newEvents} />
    </div>
  )
}

export default NewEvents
